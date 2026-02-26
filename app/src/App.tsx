import { useState } from 'react';
import { questions } from './data/questions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  RotateCcw,
  BookOpen,
  Trophy,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;

    if (currentQuestion.isMultipleChoice) {
      setSelectedAnswers(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setSelectedAnswers([index]);
    }
  };

  const checkAnswer = () => {
    if (selectedAnswers.length === 0) return;

    const correctAnswer = currentQuestion.correctAnswer;
    let isCorrect = false;

    if (Array.isArray(correctAnswer)) {
      const sortedSelected = [...selectedAnswers].sort();
      const sortedCorrect = [...correctAnswer].sort();
      isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
    } else {
      isCorrect = selectedAnswers[0] === correctAnswer;
    }

    if (isCorrect && !answeredQuestions.has(currentQuestion.id)) {
      setScore(prev => prev + 1);
    }

    setAnsweredQuestions(prev => new Set(prev).add(currentQuestion.id));
    setShowResult(true);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswers([]);
      setShowResult(false);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const getDomainColor = (domain: string) => {
    switch (domain) {
      case 'Technologie':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Concepts du cloud':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Sécurité et conformité':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Facturation et tarification':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    let icon = null;
    
    if (percentage >= 80) {
      message = 'Excellent ! Vous maîtrisez bien les concepts AWS !';
      icon = <Trophy className="w-16 h-16 text-yellow-500" />;
    } else if (percentage >= 60) {
      message = 'Bien joué ! Continuez à réviser pour améliorer votre score.';
      icon = <CheckCircle2 className="w-16 h-16 text-green-500" />;
    } else {
      message = 'Continuez à réviser ! Les concepts AWS demandent de la pratique.';
      icon = <BookOpen className="w-16 h-16 text-orange-500" />;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                {icon}
              </div>
              <h1 className="text-3xl font-bold text-slate-800 mb-4">
                Quiz Terminé !
              </h1>
              <p className="text-xl text-slate-600 mb-8">{message}</p>
              
              <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                <div className="text-5xl font-bold text-slate-800 mb-2">
                  {score} / {questions.length}
                </div>
                <div className="text-2xl text-slate-500">
                  {percentage}%
                </div>
                <Progress value={percentage} className="mt-4 h-3" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Technologie', 'Concepts du cloud', 'Sécurité et conformité', 'Facturation et tarification'].map(domain => {
                  const domainQuestions = questions.filter(q => q.domain === domain);
                  const domainCorrect = domainQuestions.filter(q => answeredQuestions.has(q.id)).length;
                  return (
                    <div key={domain} className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="text-xs text-slate-500 mb-1">{domain}</div>
                      <div className="text-lg font-semibold text-slate-700">
                        {domainCorrect}/{domainQuestions.length}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button 
                onClick={resetQuiz}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Recommencer le Quiz
              </Button>
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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              AWS QCM Exam
            </h1>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-sm px-3 py-1">
                Score: {score}/{questions.length}
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-slate-500 mt-2">
            <span>Question {currentQuestionIndex + 1} sur {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-lg border-0 mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <Badge className={cn("border", getDomainColor(currentQuestion.domain))}>
                {currentQuestion.domain}
              </Badge>
              {currentQuestion.isMultipleChoice && (
                <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Plusieurs réponses
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl md:text-2xl font-semibold text-slate-800 mt-4 leading-relaxed">
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
                
                let buttonClass = "w-full text-left justify-start h-auto py-4 px-4 border-2 transition-all duration-200 ";
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800 hover:bg-green-100 ";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50 text-red-800 hover:bg-red-100 ";
                  } else {
                    buttonClass += "border-slate-200 bg-slate-50 text-slate-400 ";
                  }
                } else {
                  if (isSelected) {
                    buttonClass += "border-blue-500 bg-blue-50 text-blue-800 hover:bg-blue-100 ";
                  } else {
                    buttonClass += "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50 ";
                  }
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                  >
                    <div className="flex items-center gap-3 w-full">
                      {currentQuestion.isMultipleChoice ? (
                        <Checkbox 
                          checked={isSelected} 
                          disabled={showResult}
                          className="pointer-events-none"
                        />
                      ) : (
                        <div className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                          isSelected ? "border-blue-500" : "border-slate-300"
                        )}>
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                        </div>
                      )}
                      <span className="flex-1">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </Button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Explication
                </h4>
                <p className="text-blue-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
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

              {!showResult ? (
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
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Terminer' : 'Suivant'}
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
              <span className="text-sm font-medium text-slate-600">Navigateur de questions</span>
              <span className="text-xs text-slate-400">Cliquez pour naviguer</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {questions.map((q, index) => (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(index)}
                  className={cn(
                    "w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200",
                    index === currentQuestionIndex
                      ? "bg-blue-600 text-white shadow-md"
                      : answeredQuestions.has(q.id)
                      ? "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
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
