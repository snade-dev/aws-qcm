import { useEffect, useState } from "react";
import { quizzes } from "./data/quizzes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Trophy,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type QuizMode = "training" | "exam";
const EXAM_DURATION_SECONDS = 90 * 60;

function App() {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [answersByQuestion, setAnswersByQuestion] = useState<
    Record<number, number[]>
  >({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(
    new Set(),
  );
  const [reviewedQuestions, setReviewedQuestions] = useState<Set<number>>(
    new Set(),
  );
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);

  const activeQuiz = quizzes.find((quiz) => quiz.id === selectedQuizId) ?? null;
  const activeQuestions = activeQuiz?.questions ?? [];

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(totalSeconds % 60)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const computeExamScore = () =>
    activeQuestions.reduce((acc, question) => {
      const answers = answersByQuestion[question.id] ?? [];
      return isAnswerCorrect(question.correctAnswer, answers) ? acc + 1 : acc;
    }, 0);

  const finishExam = () => {
    const finalScore = computeExamScore();
    setScore(finalScore);
    setQuizCompleted(true);
  };

  useEffect(() => {
    if (quizMode !== "exam" || !activeQuiz || quizCompleted || timeRemaining <= 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [quizMode, activeQuiz, quizCompleted, timeRemaining]);

  useEffect(() => {
    if (quizMode === "exam" && activeQuiz && !quizCompleted && timeRemaining === 0) {
      finishExam();
    }
  }, [quizMode, activeQuiz, quizCompleted, timeRemaining]);

  const resetQuizProgress = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setAnswersByQuestion({});
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

  if (!activeQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
                Choisissez un quiz à lancer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {quizzes.map((quiz) => (
                <Card
                  key={quiz.id}
                  className="border border-slate-200 shadow-sm"
                >
                  <CardContent className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-slate-800 break-words">
                        {quiz.title}
                      </h3>
                      <p className="text-sm text-slate-600 break-words">
                        {quiz.description}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {quiz.questions.length} questions détectées
                      </p>
                    </div>
                    <Button
                      onClick={() => startQuiz(quiz.id, "training")}
                      disabled={quiz.questions.length === 0}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      Entraînement
                    </Button>
                    <Button
                      onClick={() => startQuiz(quiz.id, "exam")}
                      disabled={quiz.questions.length === 0}
                      variant="outline"
                    >
                      Examen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (activeQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8 text-center space-y-4">
              <h1 className="text-2xl font-bold text-slate-800">
                Aucune question trouvée
              </h1>
              <p className="text-slate-600">
                Le quiz sélectionné ne contient pas de questions exploitables.
              </p>
              <Button variant="outline" onClick={() => setSelectedQuizId(null)}>
                Choisir un autre quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;

  const isAnswerCorrect = (
    correctAnswer: number | number[],
    answers: number[],
  ) => {
    if (Array.isArray(correctAnswer)) {
      const sortedSelected = [...answers].sort();
      const sortedCorrect = [...correctAnswer].sort();
      return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    }

    return answers[0] === correctAnswer;
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

    let nextAnswers: number[] = [];
    if (currentQuestion.isMultipleChoice) {
      nextAnswers = selectedAnswers.includes(index)
        ? selectedAnswers.filter((i) => i !== index)
        : [...selectedAnswers, index];
    } else {
      nextAnswers = [index];
    }

    setSelectedAnswers(nextAnswers);
    setAnswersByQuestion((prev) => ({
      ...prev,
      [currentQuestion.id]: nextAnswers,
    }));

    if (quizMode === "exam" && nextAnswers.length > 0) {
      setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion.id));
    }
  };

  const checkAnswer = () => {
    if (quizMode === "exam") return;
    if (selectedAnswers.length === 0) return;

    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion.id));
    setReviewedQuestions((prev) => new Set(prev).add(currentQuestion.id));
    const nextScore = activeQuestions.reduce((acc, question) => {
      const answers =
        question.id === currentQuestion.id
          ? selectedAnswers
          : (answersByQuestion[question.id] ?? []);
      const isReviewed =
        question.id === currentQuestion.id ||
        reviewedQuestions.has(question.id);

      if (!isReviewed) return acc;
      return isAnswerCorrect(question.correctAnswer, answers) ? acc + 1 : acc;
    }, 0);

    setScore(nextScore);
    setShowResult(true);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setQuestionState(currentQuestionIndex + 1);
    } else {
      if (quizMode === "exam") {
        finishExam();
        return;
      }
      setQuizCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setQuestionState(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    resetQuizProgress();
  };

  const changeQuiz = () => {
    setSelectedQuizId(null);
    setQuizMode(null);
    resetQuizProgress();
  };

  const goToQuestion = (index: number) => {
    setQuizCompleted(false);
    setQuestionState(index);
  };

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case "Technologie":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Concepts du cloud":
        return "bg-green-100 text-green-800 border-green-200";
      case "Sécurité et conformité":
        return "bg-red-100 text-red-800 border-red-200";
      case "Facturation et tarification":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getOptionExplanation = (isOptionCorrect: boolean) => {
    if (isOptionCorrect) {
      return currentQuestion.explanation;
    }

    const correctOptions = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer
          .map((index) => currentQuestion.options[index])
          .join(" / ")
      : currentQuestion.options[currentQuestion.correctAnswer];

    return `Cette option n'est pas la bonne réponse. La bonne réponse est : ${correctOptions}.`;
  };

  if (quizCompleted) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    let message = "";
    let icon = null;
    const domains = Array.from(new Set(activeQuestions.map((q) => q.domain)));

    if (percentage >= 80) {
      message = "Excellent ! Vous maîtrisez bien les concepts AWS !";
      icon = <Trophy className="w-16 h-16 text-yellow-500" />;
    } else if (percentage >= 60) {
      message = "Bien joué ! Continuez à réviser pour améliorer votre score.";
      icon = <CheckCircle2 className="w-16 h-16 text-green-500" />;
    } else {
      message =
        "Continuez à réviser ! Les concepts AWS demandent de la pratique.";
      icon = <BookOpen className="w-16 h-16 text-orange-500" />;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">{icon}</div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Quiz Terminé !
              </h1>
              <p className="text-xl text-slate-600 mb-8">{message}</p>

              <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                <div className="text-5xl font-bold text-slate-800 mb-2">
                  {score} / {activeQuestions.length}
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wide mb-1">
                  Pourcentage de réussite
                </div>
                <div className="text-2xl text-slate-500">{percentage}%</div>
                <Progress value={percentage} className="mt-4 h-3" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {domains.map((domain) => {
                  const domainQuestions = activeQuestions.filter(
                    (q) => q.domain === domain,
                  );
                  const domainCorrect = domainQuestions.filter((q) => {
                    const answers = answersByQuestion[q.id] ?? [];
                    return isAnswerCorrect(q.correctAnswer, answers);
                  }).length;
                  return (
                    <div
                      key={domain}
                      className="bg-white rounded-lg p-4 border border-slate-200"
                    >
                      <div className="text-xs text-slate-500 mb-1">
                        {domain}
                      </div>
                      <div className="text-lg font-semibold text-slate-700">
                        {domainCorrect}/{domainQuestions.length}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  onClick={resetQuiz}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Recommencer le Quiz
                </Button>
                <Button onClick={changeQuiz} size="lg" variant="outline">
                  Choisir un autre quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-4">
            <h1 className="min-w-0 text-2xl md:text-3xl font-bold text-slate-800 break-words">
              {activeQuiz.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Button variant="outline" size="sm" onClick={changeQuiz}>
                Changer de quiz
              </Button>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Mode: {quizMode === "exam" ? "Examen" : "Entraînement"}
              </Badge>
              {quizMode === "exam" && (
                <Badge
                  variant="outline"
                  className={cn(
                    "text-sm px-3 py-1",
                    timeRemaining <= 300
                      ? "border-red-300 text-red-700 bg-red-50"
                      : "",
                  )}
                >
                  Temps restant: {formatTime(timeRemaining)}
                </Badge>
              )}
              <Badge variant="outline" className="text-sm px-3 py-1">
                {quizMode === "exam"
                  ? `Répondu: ${answeredQuestions.size}/${activeQuestions.length}`
                  : `Score: ${score}/${activeQuestions.length}`}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-slate-500 mt-2">
            <span>
              Question {currentQuestionIndex + 1} sur {activeQuestions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-lg border-0 mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <Badge
                className={cn("border", getDomainColor(currentQuestion.domain))}
              >
                {currentQuestion.domain}
              </Badge>
              {currentQuestion.isMultipleChoice && (
                <Badge
                  variant="outline"
                  className="text-amber-600 border-amber-200 bg-amber-50"
                >
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Plusieurs réponses
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl md:text-2xl font-semibold text-slate-800 mt-4 leading-relaxed break-words">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswers.includes(index);
                const isCorrect = Array.isArray(currentQuestion.correctAnswer)
                  ? currentQuestion.correctAnswer.includes(index)
                  : currentQuestion.correctAnswer === index;

                let buttonClass =
                  "w-full text-left justify-start h-auto py-4 px-4 border-2 transition-all duration-200 whitespace-normal ";

                if (showResult) {
                  if (isCorrect) {
                    buttonClass +=
                      "border-green-500 bg-green-50 text-green-800 hover:bg-green-100 ";
                  } else if (isSelected && !isCorrect) {
                    buttonClass +=
                      "border-red-500 bg-red-50 text-red-800 hover:bg-red-100 ";
                  } else {
                    buttonClass +=
                      "border-slate-200 bg-slate-50 text-slate-400 ";
                  }
                } else {
                  if (isSelected) {
                    buttonClass +=
                      "border-blue-500 bg-blue-50 text-blue-800 hover:bg-blue-100 ";
                  } else {
                    buttonClass +=
                      "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 ";
                  }
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={quizMode === "training" && showResult}
                  >
                    <div className="flex items-center gap-3 w-full min-w-0">
                      {currentQuestion.isMultipleChoice ? (
                        <Checkbox
                          checked={isSelected}
                          disabled={quizMode === "training" && showResult}
                          className="pointer-events-none"
                        />
                      ) : (
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                            isSelected ? "border-blue-500" : "border-slate-300",
                          )}
                        >
                          {isSelected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                          )}
                        </div>
                      )}
                      <span className="flex-1 min-w-0 break-words">
                        {option}
                      </span>
                      {quizMode === "training" && showResult && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {quizMode === "training" &&
                        showResult &&
                        isSelected &&
                        !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        )}
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Explanation */}
            {quizMode === "training" && showExplanation && (
              <>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Explication
                  </h4>
                  <p className="text-blue-700 leading-relaxed break-words">
                    {currentQuestion.explanation}
                  </p>
                </div>

                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">
                    Analyse des options
                  </h4>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                      const isOptionCorrect = Array.isArray(
                        currentQuestion.correctAnswer,
                      )
                        ? currentQuestion.correctAnswer.includes(index)
                        : currentQuestion.correctAnswer === index;

                      return (
                        <div
                          key={index}
                          className={cn(
                            "rounded-md border p-3",
                            isOptionCorrect
                              ? "border-green-200 bg-green-50"
                              : "border-slate-200 bg-white",
                          )}
                        >
                          <div className="flex items-start gap-2 mb-1">
                            {isOptionCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                            )}
                            <p className="font-medium text-slate-800 break-words">
                              {option}
                            </p>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed break-words pl-6">
                            {getOptionExplanation(isOptionCorrect)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </Button>

              {quizMode === "training" && !showResult ? (
                <Button
                  onClick={checkAnswer}
                  disabled={selectedAnswers.length === 0}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Valider
                </Button>
              ) : (
                <Button
                  onClick={nextQuestion}
                  disabled={quizMode === "exam" && selectedAnswers.length === 0}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2"
                >
                  {currentQuestionIndex === activeQuestions.length - 1
                    ? "Terminer"
                    : "Suivant"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Question Navigator */}
        <Card className="shadow-md border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-600">
                Navigateur de questions
              </span>
              <span className="text-xs text-slate-400">
                Cliquez pour naviguer
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeQuestions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(index)}
                  className={cn(
                    "w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200",
                    index === currentQuestionIndex
                      ? "bg-blue-600 text-white shadow-md"
                      : quizMode === "training" && reviewedQuestions.has(q.id)
                        ? "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200"
                        : quizMode === "exam" && answeredQuestions.has(q.id)
                          ? "bg-indigo-100 text-indigo-700 border border-indigo-300 hover:bg-indigo-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200",
                  )}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
