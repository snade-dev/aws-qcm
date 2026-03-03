import { questions as baseQuestions, type Question } from './questions';

export interface QuizDefinition {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

const stopHeadings = [
  'Explication générale',
  'Options correctes',
  'Option correcte',
  'Options incorrectes',
  'Référence',
  'Références',
  'Alerte à l\'examen',
  'Domaine',
  'Bonne réponse'
];

const isQuestionHeader = (line: string) => /^Question\s+\d+/i.test(line);
const isCorrectMarker = (line: string) => /Votre\s+(sélection|réponse)\s+est\s+correcte/i.test(line);
const isIncorrectMarker = (line: string) => /Votre\s+(sélection|réponse)\s+est\s+incorrecte/i.test(line);
const isStopHeading = (line: string) => stopHeadings.some((heading) => line.startsWith(heading));
const isLinkOrImage = (line: string) => /^\[.*\]\(.*\)$/.test(line) || /^!\[.*\]\(.*\)$/.test(line) || /^!\[\]\[.*\]$/.test(line);

const normalizeLine = (line: string) =>
  line
    .replace(/\*\*/g, '')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/^[-*]\s+/, '')
    .replace(/\s+/g, ' ')
    .trim();

const normalizeForMatch = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const toComparableWords = (text: string) =>
  new Set(
    normalizeForMatch(text)
      .split(' ')
      .filter((word) => word.length > 2)
  );

const extractDomain = (lines: string[], fallbackDomain: string) => {
  const domainIndex = lines.findIndex((line) => line === 'Domaine');
  if (domainIndex === -1) {
    return fallbackDomain;
  }

  const possibleDomain = lines[domainIndex + 1];
  if (!possibleDomain || isQuestionHeader(possibleDomain)) {
    return fallbackDomain;
  }

  return possibleDomain;
};

const extractExplanation = (lines: string[]) => {
  const start = lines.findIndex((line) => line === 'Explication générale');
  if (start === -1) {
    return 'Explication non fournie dans la source.';
  }

  const explanationLines: string[] = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (isQuestionHeader(line) || line === 'Domaine' || line.startsWith('Référence') || line.startsWith('Références')) {
      break;
    }
    if (isLinkOrImage(line) || isCorrectMarker(line) || isIncorrectMarker(line) || line.startsWith('Options correctes') || line.startsWith('Options incorrectes')) {
      continue;
    }
    explanationLines.push(line);
    if (explanationLines.length >= 3) {
      break;
    }
  }

  return explanationLines.join(' ') || 'Explication non fournie dans la source.';
};

const extractIncorrectOptionExplanations = (
  lines: string[],
  options: string[],
  correctIndices: number[]
) => {
  const start = lines.findIndex((line) => line.startsWith('Réponses incorrectes'));
  if (start === -1) {
    return {} as Record<number, string>;
  }

  const sectionLines: string[] = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (
      isQuestionHeader(line) ||
      line === 'Domaine' ||
      line.startsWith('Référence') ||
      line.startsWith('Références') ||
      line.startsWith('Liens vers les références') ||
      line.startsWith('Explication générale') ||
      line.startsWith('Réponse correcte')
    ) {
      break;
    }

    if (isLinkOrImage(line) || isCorrectMarker(line) || isIncorrectMarker(line)) {
      continue;
    }

    sectionLines.push(line);
  }

  if (sectionLines.length === 0) {
    return {} as Record<number, string>;
  }

  const incorrectIndices = options
    .map((_, index) => index)
    .filter((index) => !correctIndices.includes(index));

  const usedIndices = new Set<number>();
  const explanations: Record<number, string> = {};
  const unmatchedLines: string[] = [];

  sectionLines.forEach((line) => {
    const lineNorm = normalizeForMatch(line);
    let bestIndex: number | null = null;
    let bestScore = 0;

    incorrectIndices.forEach((optionIndex) => {
      if (usedIndices.has(optionIndex)) {
        return;
      }

      const option = options[optionIndex];
      const optionNorm = normalizeForMatch(option);
      if (!optionNorm) {
        return;
      }

      let score = 0;
      if (lineNorm.startsWith(optionNorm)) {
        score = 3;
      } else if (lineNorm.includes(optionNorm) || optionNorm.includes(lineNorm)) {
        score = 2;
      } else {
        const optionWords = toComparableWords(option);
        const lineWords = toComparableWords(line);
        let overlap = 0;
        optionWords.forEach((word) => {
          if (lineWords.has(word)) {
            overlap += 1;
          }
        });
        if (overlap >= 2) {
          score = 1;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestIndex = optionIndex;
      }
    });

    if (bestIndex === null || bestScore === 0) {
      unmatchedLines.push(line);
      return;
    }

    const option = options[bestIndex];
    const colonIndex = line.indexOf(':');
    const startsWithOption = normalizeForMatch(line).startsWith(normalizeForMatch(option));
    const explanationText =
      startsWithOption && colonIndex !== -1
        ? line.slice(colonIndex + 1).trim()
        : line.trim();

    explanations[bestIndex] = explanationText;
    usedIndices.add(bestIndex);
  });

  const remainingIndices = incorrectIndices.filter((index) => !usedIndices.has(index));
  remainingIndices.forEach((optionIndex, idx) => {
    const fallbackLine = unmatchedLines[idx];
    if (fallbackLine) {
      explanations[optionIndex] = fallbackLine.trim();
    }
  });

  return explanations;
};

const parseMarkdownQuiz = (raw: string, fallbackDomain: string): Question[] => {
  const lines = raw
    .split(/\r?\n/)
    .map(normalizeLine)
    .filter(Boolean);

  const blocks: string[][] = [];
  let currentBlock: string[] = [];

  lines.forEach((line) => {
    if (isQuestionHeader(line) && currentBlock.length > 0) {
      blocks.push(currentBlock);
      currentBlock = [line];
      return;
    }

    currentBlock.push(line);
  });

  if (currentBlock.length > 0) {
    blocks.push(currentBlock);
  }

  const parsedQuestions: Question[] = [];

  blocks.forEach((block) => {
    if (!isQuestionHeader(block[0])) {
      return;
    }

    let cursor = 1;
    const questionParts: string[] = [];

    while (cursor < block.length) {
      const line = block[cursor];
      if (isCorrectMarker(line) || isIncorrectMarker(line) || isStopHeading(line)) {
        break;
      }

      questionParts.push(line);
      cursor += 1;

      if (line.includes('?')) {
        break;
      }
    }

    const question = questionParts.join(' ').trim();
    if (!question) {
      return;
    }

    const options: string[] = [];
    const correctIndices: number[] = [];
    let markNextAsCorrect = false;

    for (let i = cursor; i < block.length; i += 1) {
      const line = block[i];
      if (isStopHeading(line) || isQuestionHeader(line)) {
        break;
      }
      if (isCorrectMarker(line)) {
        markNextAsCorrect = true;
        continue;
      }
      if (isIncorrectMarker(line)) {
        markNextAsCorrect = false;
        continue;
      }
      if (isLinkOrImage(line) || line.startsWith('via -') || line.startsWith('via -')) {
        continue;
      }

      options.push(line);
      if (markNextAsCorrect) {
        correctIndices.push(options.length - 1);
        markNextAsCorrect = false;
      }
    }

    if (options.length < 2) {
      return;
    }

    const domain = extractDomain(block, fallbackDomain);
    const explanation = extractExplanation(block);
    const incorrectOptionExplanations = extractIncorrectOptionExplanations(
      block,
      options,
      correctIndices
    );

    parsedQuestions.push({
      id: parsedQuestions.length + 1,
      question,
      options,
      correctAnswer: correctIndices.length > 1 ? correctIndices : correctIndices[0] ?? 0,
      explanation,
      incorrectOptionExplanations,
      domain,
      isMultipleChoice: correctIndices.length > 1
    });
  });

  return parsedQuestions;
};

const markdownFiles = import.meta.glob('./*.md', {
  eager: true,
  import: 'default',
  query: '?raw'
}) as Record<string, string>;

const toReadableTitle = (fileName: string) => fileName.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();

const toQuizId = (fileName: string) =>
  fileName
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const markdownQuizzes: QuizDefinition[] = Object.entries(markdownFiles)
  .sort(([aPath], [bPath]) => aPath.localeCompare(bPath))
  .map(([path, raw]) => {
    const fileName = path.split('/').pop()?.replace(/\.md$/, '') ?? 'quiz-markdown';
    const readableTitle = toReadableTitle(fileName);

    return {
      id: `quiz-${toQuizId(fileName)}`,
      title: `${readableTitle} (Markdown)`,
      description: `Questions générées depuis ${fileName}.md.`,
      questions: parseMarkdownQuiz(raw, 'Technologie')
    };
  });

export const quizzes: QuizDefinition[] = [
  {
    id: 'quiz-base',
    title: 'Quiz AWS (base)',
    description: 'Questionnaire principal déjà présent dans l\'application.',
    questions: baseQuestions
  }
  ,
  ...markdownQuizzes
];
