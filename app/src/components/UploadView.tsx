import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, UploadCloud, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { parseMarkdownQuiz, type QuizDefinition } from "@/data/quizzes";
import { cn } from "@/lib/utils";

interface UploadViewProps {
  onBack: () => void;
  onAddQuizzes: (quizzes: QuizDefinition[]) => void;
}

export function UploadView({ onBack, onAddQuizzes }: UploadViewProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setError(null);
    
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.name.endsWith(".md") || file.type === "text/markdown"
    );
    
    if (droppedFiles.length === 0) {
      setError("Veuillez déposer des fichiers Markdown (.md) valides.");
      return;
    }

    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files).filter(
        (file) => file.name.endsWith(".md") || file.type === "text/markdown"
      );
      
      if (selectedFiles.length === 0) {
        setError("Veuillez sélectionner des fichiers Markdown (.md).");
        return;
      }
      
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  }, []);

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleProcessFiles = async () => {
    if (files.length === 0) return;

    try {
      setIsSaving(true);
      setError(null);

      const filePayload = await Promise.all(
        files.map(async (file) => ({
          name: file.name,
          content: await file.text(),
        })),
      );

      const uploadResponse = await fetch("/api/upload-markdown", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ files: filePayload }),
      });

      const uploadResult = (await uploadResponse.json()) as {
        message?: string;
        savedFiles?: string[];
      };

      if (!uploadResponse.ok) {
        throw new Error(
          uploadResult.message ?? "L'enregistrement dans src/data a échoué.",
        );
      }

      const newQuizzes: QuizDefinition[] = [];

      for (const [index, file] of filePayload.entries()) {
        const text = file.content;
        const questions = parseMarkdownQuiz(text, "Domaine"); // You might want user to specify the domain

        if (questions.length > 0) {
          const savedFileName = uploadResult.savedFiles?.[index] ?? file.name;
          const readableTitle = savedFileName
            .replace(/\.md$/i, "")
            .replace(/[-_]/g, " ");
          const id = `quiz-custom-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

          newQuizzes.push({
            id,
            title: `${readableTitle}`,
            description: `Importé depuis ${savedFileName} et enregistré dans src/data. Contient ${questions.length} questions.`,
            questions,
          });
        }
      }

      if (newQuizzes.length > 0) {
        onAddQuizzes(newQuizzes);
      } else {
        setError("Aucune question n'a pu être extraite de ces fichiers.");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur s'est produite lors de l'import des fichiers.",
      );
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100/80 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button variant="ghost" onClick={onBack} className="mb-4 flex items-center gap-2">
          <ChevronLeft className="w-4 h-4" />
          Retour
        </Button>

        <Card className="border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Importer des quiz depuis Markdown
            </CardTitle>
            <CardDescription className="text-base text-slate-600 dark:text-slate-400">
              Déposez vos fichiers Markdown contenant des questions à choix multiples.
              Ils seront enregistrés dans src/data pendant l'exécution du serveur Vite.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className={cn(
                "border-2 border-dashed rounded-xl p-12 transition-all duration-200 flex flex-col items-center justify-center text-center",
                isDragging
                  ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20"
                  : "border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900",
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <UploadCloud className={cn("w-12 h-12 mb-4", isDragging ? "text-blue-500" : "text-slate-400")} />
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Glissez-déposez vos fichiers ici
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fichiers Markdown (.md) uniquement
              </p>
              
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".md,text/markdown"
                  multiple
                  onChange={handleFileInput}
                />
                <Button variant="outline" className="pointer-events-none">
                  Ou parcourir les fichiers
                </Button>
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
              </div>
            )}

            {files.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-medium flex items-center justify-between text-slate-800 dark:text-slate-200">
                  <span>Fichiers en attente d'importation</span>
                  <Badge variant="secondary">{files.length} fichier(s)</Badge>
                </h4>
                
                <div className="grid gap-3">
                  {files.map((file, index) => (
                    <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/30">
                          <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm font-medium truncate text-slate-700 dark:text-slate-300">
                          {file.name}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700 dark:hover:text-red-400">
                        Retirer
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    onClick={handleProcessFiles}
                    className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                    disabled={isSaving}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {isSaving ? "Enregistrement..." : "Valider et importer"}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
