import { useEffect, useState } from "react";
import { quizzes } from "./data/quizzes";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Trophy,
  Brain,
  AlertCircle,
  Zap,
  Clock,
  Target,
  SkipForward,
  Award,
  TrendingUp,
} from "lucide-react";

type QuizMode = "training" | "exam";
const EXAM_DURATION_SECONDS = 90 * 60;

// ─── Helper: domain badge colors ─────────────────────────────────────────────
const domainConfig: Record<string, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
  "Technologie": {
    bg: "rgba(99,102,241,0.15)",
    text: "#818CF8",
    border: "rgba(99,102,241,0.3)",
    icon: <Zap className="w-3 h-3" />,
  },
  "Concepts du cloud": {
    bg: "rgba(16,185,129,0.12)",
    text: "#34D399",
    border: "rgba(16,185,129,0.3)",
    icon: <Brain className="w-3 h-3" />,
  },
  "Sécurité et conformité": {
    bg: "rgba(239,68,68,0.12)",
    text: "#F87171",
    border: "rgba(239,68,68,0.3)",
    icon: <Target className="w-3 h-3" />,
  },
  "Facturation et tarification": {
    bg: "rgba(245,158,11,0.12)",
    text: "#FCD34D",
    border: "rgba(245,158,11,0.3)",
    icon: <TrendingUp className="w-3 h-3" />,
  },
};

const getDomainStyle = (domain: string) =>
  domainConfig[domain] ?? {
    bg: "rgba(139,92,246,0.12)",
    text: "#A78BFA",
    border: "rgba(139,92,246,0.3)",
    icon: <BookOpen className="w-3 h-3" />,
  };

export default function App() {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [examResultFilter, setExamResultFilter] = useState<"all" | "correct" | "incorrect" | "ignored">("all");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [answersByQuestion, setAnswersByQuestion] = useState<Record<number, number[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [reviewedQuestions, setReviewedQuestions] = useState<Set<number>>(new Set());
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);

  const activeQuiz = quizzes.find((q) => q.id === selectedQuizId) ?? null;
  const activeQuestions = activeQuiz?.questions ?? [];

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, "0");
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, "0");
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const isAnswerCorrect = (correctAnswer: number | number[], answers: number[]) => {
    if (Array.isArray(correctAnswer)) {
      return JSON.stringify([...answers].sort()) === JSON.stringify([...correctAnswer].sort());
    }
    return answers[0] === correctAnswer;
  };

  const computeExamScore = () =>
    activeQuestions.reduce((acc, q) => {
      const a = answersByQuestion[q.id] ?? [];
      return isAnswerCorrect(q.correctAnswer, a) ? acc + 1 : acc;
    }, 0);

  const finishExam = () => {
    setScore(computeExamScore());
    setQuizCompleted(true);
  };

  useEffect(() => {
    if (quizMode !== "exam" || !activeQuiz || quizCompleted || timeRemaining <= 0) return;
    const id = window.setInterval(() => setTimeRemaining((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => window.clearInterval(id);
  }, [quizMode, activeQuiz, quizCompleted, timeRemaining]);

  useEffect(() => {
    if (quizMode === "exam" && activeQuiz && !quizCompleted && timeRemaining === 0) finishExam();
  }, [quizMode, activeQuiz, quizCompleted, timeRemaining]);

  const resetQuizProgress = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setAnswersByQuestion({});
    setExamResultFilter("all");
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setReviewedQuestions(new Set());
    setShowExplanation(false);
    setQuizCompleted(false);
    setTimeRemaining(EXAM_DURATION_SECONDS);
  };

  const startQuiz = (quizId: string, mode: QuizMode) => {
    setSelectedQuizId(quizId);
    setQuizMode(mode);
    resetQuizProgress();
  };

  const setQuestionState = (index: number) => {
    const question = activeQuestions[index];
    const savedAnswers = answersByQuestion[question.id] ?? [];
    setCurrentQuestionIndex(index);
    setSelectedAnswers(savedAnswers);
    if (quizMode === "training" && reviewedQuestions.has(question.id)) {
      setShowResult(true);
      setShowExplanation(true);
      return;
    }
    setShowResult(false);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (quizMode === "training" && showResult) return;
    let next: number[];
    if (activeQuestions[currentQuestionIndex]?.isMultipleChoice) {
      next = selectedAnswers.includes(index)
        ? selectedAnswers.filter((i) => i !== index)
        : [...selectedAnswers, index];
    } else {
      next = [index];
    }
    setSelectedAnswers(next);
    setAnswersByQuestion((p) => ({ ...p, [activeQuestions[currentQuestionIndex].id]: next }));
    if (quizMode === "exam" && next.length > 0) {
      setAnsweredQuestions((p) => new Set(p).add(activeQuestions[currentQuestionIndex].id));
    }
  };

  const checkAnswer = () => {
    if (quizMode === "exam" || selectedAnswers.length === 0) return;
    const q = activeQuestions[currentQuestionIndex];
    setAnsweredQuestions((p) => new Set(p).add(q.id));
    setReviewedQuestions((p) => new Set(p).add(q.id));
    const nextScore = activeQuestions.reduce((acc, question) => {
      const a = question.id === q.id ? selectedAnswers : (answersByQuestion[question.id] ?? []);
      const reviewed = question.id === q.id || reviewedQuestions.has(question.id);
      if (!reviewed) return acc;
      return isAnswerCorrect(question.correctAnswer, a) ? acc + 1 : acc;
    }, 0);
    setScore(nextScore);
    setShowResult(true);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setQuestionState(currentQuestionIndex + 1);
    } else {
      if (quizMode === "exam") { finishExam(); return; }
      setQuizCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) setQuestionState(currentQuestionIndex - 1);
  };

  const goToQuestion = (index: number) => { setQuizCompleted(false); setQuestionState(index); };

  const getOptionExplanationForQuestion = (
    question: (typeof activeQuestions)[number],
    optionIndex: number,
    isOptionCorrect: boolean,
  ) => {
    if (isOptionCorrect) return question.explanation;
    const parsed = question.incorrectOptionExplanations?.[optionIndex];
    if (parsed) return parsed;
    const correct = Array.isArray(question.correctAnswer)
      ? question.correctAnswer.map((i) => question.options[i]).join(" / ")
      : question.options[question.correctAnswer];
    return `Cette option n'est pas la bonne réponse. La bonne réponse est : ${correct}.`;
  };

  // ─── QUIZ SELECTION SCREEN ───────────────────────────────────────────────────
  if (!activeQuiz) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ background: "#080D1A" }}>
        {/* Background orbs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)", animation: "float 8s ease-in-out infinite" }} />
          <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", animation: "float 10s ease-in-out infinite reverse" }} />
          <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #A78BFA 0%, transparent 70%)", animation: "float 12s ease-in-out infinite" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
          {/* Hero header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
              <Award className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">AWS Certification Prep</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="gradient-text">Quiz Master</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              Préparez votre certification AWS avec des quiz interactifs. Choisissez votre deck et votre mode.
            </p>
          </div>

          {/* Quiz cards */}
          <div className="space-y-4">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="glass glass-hover rounded-2xl overflow-hidden cursor-pointer">
                <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.3)" }}>
                        <BookOpen className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white break-words leading-snug"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {quiz.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 ml-13 pl-1">{quiz.description}</p>
                    <div className="flex items-center gap-2 mt-3 ml-13 pl-1">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(139,92,246,0.15)", color: "#A78BFA", border: "1px solid rgba(139,92,246,0.25)" }}>
                        {quiz.questions.length} questions
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <button
                      onClick={() => startQuiz(quiz.id, "training")}
                      disabled={quiz.questions.length === 0}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 25px rgba(99,102,241,0.5)")}
                      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.35)")}
                    >
                      <Brain className="w-4 h-4" />
                      Entraînement
                    </button>
                    <button
                      onClick={() => startQuiz(quiz.id, "exam")}
                      disabled={quiz.questions.length === 0}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.75)",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                    >
                      <Clock className="w-4 h-4" />
                      Examen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080D1A" }}>
        <div className="glass rounded-2xl p-10 text-center max-w-sm">
          <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Aucune question</h2>
          <p className="text-slate-400 mb-6">Ce quiz ne contient pas de questions exploitables.</p>
          <button onClick={() => setSelectedQuizId(null)} className="px-5 py-2 rounded-xl text-sm font-semibold cursor-pointer"
            style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#818CF8" }}>
            Retour
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;

  // ─── RESULTS SCREEN ─────────────────────────────────────────────────────────
  if (quizCompleted) {
    const questionResults = activeQuestions.map((question, index) => {
      const answers = answersByQuestion[question.id] ?? [];
      const ignored = answers.length === 0;
      return { question, index, answers, ignored, isCorrect: !ignored && isAnswerCorrect(question.correctAnswer, answers) };
    });
    const correctCount = questionResults.filter((r) => r.isCorrect).length;
    const ignoredCount = questionResults.filter((r) => r.ignored).length;
    const incorrectCount = questionResults.length - correctCount - ignoredCount;
    const answeredCount = activeQuestions.length - ignoredCount;
    const percentage = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;
    const filtered = questionResults.filter((r) => {
      if (examResultFilter === "correct") return r.isCorrect;
      if (examResultFilter === "incorrect") return !r.isCorrect && !r.ignored;
      if (examResultFilter === "ignored") return r.ignored;
      return true;
    });

    const icon = percentage >= 80 ? <Trophy className="w-14 h-14" style={{ color: "#FCD34D" }} />
      : percentage >= 60 ? <CheckCircle2 className="w-14 h-14" style={{ color: "#34D399" }} />
      : <BookOpen className="w-14 h-14" style={{ color: "#F87171" }} />;
    const message = percentage >= 80 ? "Excellent ! Vous maîtrisez les concepts AWS !"
      : percentage >= 60 ? "Bien joué ! Continuez à réviser pour progresser."
      : "Continuez à réviser — la persévérance paie !";

    return (
      <div className="min-h-screen relative" style={{ background: "#080D1A" }}>
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-10">
          {/* Score hero */}
          <div className="glass rounded-3xl p-8 md:p-10 text-center mb-8">
            <div className="flex justify-center mb-5">{icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 score-appear"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Quiz Terminé !
            </h1>
            <p className="text-slate-400 mb-8">{message}</p>

            {/* Big score */}
            <div className="inline-flex flex-col items-center justify-center w-40 h-40 rounded-full mb-8"
              style={{
                background: "conic-gradient(#6366F1 0% calc(var(--p)*1%), rgba(255,255,255,0.06) 0% 100%)",
                "--p": percentage,
              } as React.CSSProperties}
            >
              <div className="flex flex-col items-center justify-center w-32 h-32 rounded-full"
                style={{ background: "#080D1A" }}>
                <span className="text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {percentage}%
                </span>
                <span className="text-xs text-slate-400 mt-1">{score}/{answeredCount}</span>
              </div>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", color: "#34D399" }}>
                <CheckCircle2 className="w-4 h-4" />
                {correctCount} correctes
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#F87171" }}>
                <XCircle className="w-4 h-4" />
                {incorrectCount} incorrectes
              </div>
              {ignoredCount > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#FCD34D" }}>
                  <SkipForward className="w-4 h-4" />
                  {ignoredCount} ignorées
                </div>
              )}
            </div>
          </div>

          {/* Review section */}
          <div className="glass rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Revue des réponses
            </h2>
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { key: "all", label: `Toutes (${activeQuestions.length})`, active: "rgba(255,255,255,0.12)", activeBorder: "rgba(255,255,255,0.25)", activeColor: "white" },
                { key: "correct", label: `Bonnes (${correctCount})`, active: "rgba(16,185,129,0.15)", activeBorder: "rgba(16,185,129,0.4)", activeColor: "#34D399" },
                { key: "incorrect", label: `Mauvaises (${incorrectCount})`, active: "rgba(239,68,68,0.15)", activeBorder: "rgba(239,68,68,0.4)", activeColor: "#F87171" },
                ...(ignoredCount > 0 ? [{ key: "ignored", label: `Ignorées (${ignoredCount})`, active: "rgba(245,158,11,0.15)", activeBorder: "rgba(245,158,11,0.4)", activeColor: "#FCD34D" }] : []),
              ].map(({ key, label, active, activeBorder, activeColor }) => {
                const isActive = examResultFilter === key;
                return (
                  <button key={key} onClick={() => setExamResultFilter(key as typeof examResultFilter)}
                    className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
                    style={{
                      background: isActive ? active : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? activeBorder : "rgba(255,255,255,0.08)"}`,
                      color: isActive ? activeColor : "rgba(255,255,255,0.45)",
                    }}>
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Question list */}
            <div className="space-y-3">
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm">Aucune question dans cette catégorie.</div>
              ) : filtered.map(({ question, index, answers, isCorrect, ignored }) => {
                const ds = getDomainStyle(question.domain);
                return (
                  <div key={question.id} className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-slate-500">Question {index + 1}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: ignored ? "rgba(245,158,11,0.12)" : isCorrect ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
                          color: ignored ? "#FCD34D" : isCorrect ? "#34D399" : "#F87171",
                          border: `1px solid ${ignored ? "rgba(245,158,11,0.25)" : isCorrect ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
                        }}>
                        {ignored ? "Ignorée" : isCorrect ? "✓ Correcte" : "✗ Incorrecte"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium mb-3 leading-relaxed">{question.question}</p>

                    {/* Explanation box */}
                    <div className="rounded-lg p-3 mb-3 text-sm leading-relaxed"
                      style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", color: "#A5B4FC" }}>
                      <span className="font-semibold text-indigo-300">Explication : </span>
                      {question.explanation}
                    </div>

                    {/* Options */}
                    <div className="space-y-1.5">
                      {question.options.map((option, oi) => {
                        const isSelected = answers.includes(oi);
                        const isCorrectOpt = Array.isArray(question.correctAnswer)
                          ? question.correctAnswer.includes(oi)
                          : question.correctAnswer === oi;
                        return (
                          <div key={oi} className="flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm"
                            style={{
                              background: isCorrectOpt ? "rgba(16,185,129,0.08)" : isSelected ? "rgba(239,68,68,0.08)" : "transparent",
                              border: `1px solid ${isCorrectOpt ? "rgba(16,185,129,0.25)" : isSelected ? "rgba(239,68,68,0.2)" : "transparent"}`,
                            }}>
                            <span className="font-bold flex-shrink-0 mt-0.5"
                              style={{ color: isCorrectOpt ? "#34D399" : isSelected ? "#F87171" : "rgba(255,255,255,0.3)" }}>
                              {String.fromCharCode(65 + oi)}.
                            </span>
                            <div className="flex-1 min-w-0">
                              <p style={{ color: isCorrectOpt ? "#D1FAE5" : isSelected ? "#FEE2E2" : "rgba(255,255,255,0.45)" }}>
                                {option}
                              </p>
                              <p className="text-xs mt-1 leading-relaxed"
                                style={{ color: isCorrectOpt ? "#6EE7B7" : "rgba(255,255,255,0.3)" }}>
                                {getOptionExplanationForQuestion(question, oi, isCorrectOpt)}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              {isCorrectOpt && <CheckCircle2 className="w-4 h-4" style={{ color: "#34D399" }} />}
                              {isSelected && !isCorrectOpt && <XCircle className="w-4 h-4" style={{ color: "#F87171" }} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {ignored && (
                      <p className="text-xs mt-2 font-medium" style={{ color: "#FCD34D" }}>
                        ⚠ Question ignorée — aucune réponse sélectionnée.
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={resetQuizProgress}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)", color: "white", boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}>
              <RotateCcw className="w-4 h-4" />
              Recommencer
            </button>
            <button onClick={() => { setSelectedQuizId(null); setQuizMode(null); resetQuizProgress(); }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}>
              Choisir un autre quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ SCREEN ─────────────────────────────────────────────────────────────
  const ds = getDomainStyle(currentQuestion.domain);

  return (
    <div className="min-h-screen relative" style={{ background: "#080D1A" }}>
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
          style={{ background: "radial-gradient(ellipse at top, #6366F1 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-6">
        {/* ── Header bar ── */}
        <div className="glass rounded-2xl p-4 md:p-5 mb-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Title + badges */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base font-bold text-white truncate" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {activeQuiz.title}
                </h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: "rgba(139,92,246,0.15)", color: "#A78BFA", border: "1px solid rgba(139,92,246,0.25)" }}>
                    {quizMode === "exam" ? "Mode Examen" : "Entraînement"}
                  </span>
                  <span className="text-xs text-slate-500">
                    {quizMode === "exam"
                      ? `${answeredQuestions.size}/${activeQuestions.length} répondues`
                      : `Score: ${score}/${activeQuestions.length}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Timer + actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {quizMode === "exam" && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-mono font-bold"
                  style={{
                    background: timeRemaining <= 300 ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${timeRemaining <= 300 ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.1)"}`,
                    color: timeRemaining <= 300 ? "#F87171" : "rgba(255,255,255,0.7)",
                  }}>
                  <Clock className="w-3.5 h-3.5" />
                  {formatTime(timeRemaining)}
                </div>
              )}
              <button onClick={() => { setSelectedQuizId(null); setQuizMode(null); resetQuizProgress(); }}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
                Quitter
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex justify-between text-xs text-slate-500 mt-1.5">
              <span>Question {currentQuestionIndex + 1} / {activeQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* ── Question card ── */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: ds.bg, color: ds.text, border: `1px solid ${ds.border}` }}>
              {ds.icon}
              {currentQuestion.domain}
            </div>
            {currentQuestion.isMultipleChoice && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(245,158,11,0.1)", color: "#FCD34D", border: "1px solid rgba(245,158,11,0.25)" }}>
                <AlertCircle className="w-3 h-3" />
                Plusieurs réponses
              </div>
            )}
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-7 break-words"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers.includes(index);
              const isCorrect = Array.isArray(currentQuestion.correctAnswer)
                ? currentQuestion.correctAnswer.includes(index)
                : currentQuestion.correctAnswer === index;

              let cls = "option-btn";
              if (showResult) {
                if (isCorrect) cls += " option-btn-correct";
                else if (isSelected && !isCorrect) cls += " option-btn-wrong";
                else cls += " option-btn-neutral-result";
              } else if (isSelected) {
                cls += " option-btn-selected";
              }

              return (
                <button key={index} className={cls} onClick={() => handleAnswerSelect(index)}
                  disabled={quizMode === "training" && showResult}>
                  <div className="flex items-center gap-3 w-full min-w-0">
                    {currentQuestion.isMultipleChoice ? (
                      <Checkbox checked={isSelected} disabled className="pointer-events-none flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={{
                          borderColor: showResult ? (isCorrect ? "#34D399" : isSelected ? "#F87171" : "rgba(255,255,255,0.15)") : isSelected ? "#6366F1" : "rgba(255,255,255,0.2)",
                          background: showResult ? "transparent" : (isSelected ? "rgba(99,102,241,0.2)" : "transparent"),
                        }}>
                        {isSelected && !showResult && <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />}
                        {showResult && isCorrect && <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#34D399" }} />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-3.5 h-3.5" style={{ color: "#F87171" }} />}
                      </div>
                    )}
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold flex-shrink-0"
                      style={{
                        background: showResult ? (isCorrect ? "rgba(16,185,129,0.2)" : isSelected ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.04)") : isSelected ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.06)",
                        color: showResult ? (isCorrect ? "#34D399" : isSelected ? "#F87171" : "rgba(255,255,255,0.35)") : isSelected ? "#818CF8" : "rgba(255,255,255,0.35)",
                      }}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 min-w-0 break-words text-sm md:text-base font-medium"
                      style={{ color: showResult ? (isCorrect ? "#D1FAE5" : isSelected ? "#FEE2E2" : "rgba(255,255,255,0.4)") : "#F1F5F9" }}>
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {quizMode === "training" && showExplanation && (
            <div className="mt-6 space-y-3">
              <div className="rounded-xl p-4"
                style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-semibold text-indigo-300">Explication générale</span>
                </div>
                <p className="text-sm text-indigo-200 leading-relaxed">{currentQuestion.explanation}</p>
              </div>

              <div className="rounded-xl p-4 space-y-3"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="text-sm font-semibold text-slate-300">Analyse des options</span>
                {currentQuestion.options.map((option, index) => {
                  const isOptionCorrect = Array.isArray(currentQuestion.correctAnswer)
                    ? currentQuestion.correctAnswer.includes(index)
                    : currentQuestion.correctAnswer === index;
                  return (
                    <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg"
                      style={{
                        background: isOptionCorrect ? "rgba(16,185,129,0.07)" : "rgba(255,255,255,0.025)",
                        border: `1px solid ${isOptionCorrect ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.06)"}`,
                      }}>
                      {isOptionCorrect
                        ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#34D399" }} />
                        : <XCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.2)" }} />}
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: isOptionCorrect ? "#D1FAE5" : "rgba(255,255,255,0.55)" }}>{option}</p>
                        <p className="text-xs leading-relaxed" style={{ color: isOptionCorrect ? "#6EE7B7" : "rgba(255,255,255,0.3)" }}>
                          {getOptionExplanationForQuestion(currentQuestion, index, isOptionCorrect)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between mt-7 pt-2">
            <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: currentQuestionIndex === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: currentQuestionIndex === 0 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              }}>
              <ChevronLeft className="w-4 h-4" />
              Précédent
            </button>

            {quizMode === "training" && !showResult ? (
              <button onClick={checkAnswer} disabled={selectedAnswers.length === 0}
                className="flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: selectedAnswers.length === 0 ? "rgba(99,102,241,0.2)" : "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  color: selectedAnswers.length === 0 ? "rgba(255,255,255,0.3)" : "white",
                  boxShadow: selectedAnswers.length > 0 ? "0 4px 20px rgba(99,102,241,0.35)" : "none",
                  cursor: selectedAnswers.length === 0 ? "not-allowed" : "pointer",
                }}>
                Valider
              </button>
            ) : (
              <button onClick={nextQuestion}
                disabled={quizMode === "exam" && selectedAnswers.length === 0}
                className="flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                }}>
                {currentQuestionIndex === activeQuestions.length - 1 ? "Terminer" : "Suivant"}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ── Navigator ── */}
        <div className="glass rounded-2xl p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Navigation
            </span>
            <button
              onClick={() => {
                if (quizMode === "exam") {
                  finishExam();
                } else {
                  const finalScore = activeQuestions.reduce((acc, question) => {
                    const a = answersByQuestion[question.id] ?? [];
                    return isAnswerCorrect(question.correctAnswer, a) ? acc + 1 : acc;
                  }, 0);
                  setScore(finalScore);
                  setQuizCompleted(true);
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#F87171" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(239,68,68,0.18)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(239,68,68,0.1)"; }}>
              <SkipForward className="w-3.5 h-3.5" />
              Terminer le quiz
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeQuestions.map((q, index) => {
              const isActive = index === currentQuestionIndex;
              const isReviewed = quizMode === "training" && reviewedQuestions.has(q.id);
              const isAnswered = quizMode === "exam" && answeredQuestions.has(q.id);
              let cls = "nav-bubble";
              if (isActive) cls += " nav-bubble-active";
              else if (isReviewed) cls += " nav-bubble-reviewed";
              else if (isAnswered) cls += " nav-bubble-answered";
              return (
                <button key={q.id} onClick={() => goToQuestion(index)} className={cls}>
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
