import { questions as baseQuestions } from "./questions";

export interface QuizDefinition {
  id: string;
  title: string;
  description: string;
  questions: typeof baseQuestions;
}
export const quizzes: QuizDefinition[] = [
  {
    id: "quiz-base",
    title: "Quiz AWS (base)",
    description: "Questionnaire principal déjà présent dans l'application.",
    questions: baseQuestions,
  },
];
