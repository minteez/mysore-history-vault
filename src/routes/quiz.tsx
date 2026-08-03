import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { quiz } from "@/data/quiz";
import { useI18n, useLocalizedMeta } from "@/i18n";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Mysore History Quiz — Test Your Knowledge" },
      {
        name: "description",
        content:
          "Ten questions on the history of Mysuru, from the Western Gangas and Hoysalas to Tipu Sultan, the Rendition and the renaming of Karnataka.",
      },
      { property: "og:title", content: "Mysore History Quiz" },
      { property: "og:description", content: "Ten cited questions on the history of Mysuru, Karnataka." },
      { property: "og:url", content: "/quiz" },
    ],
    links: [{ rel: "canonical", href: "/quiz" }],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { t, tc } = useI18n();
  useLocalizedMeta("meta.quiz.title", "meta.quiz.description");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const score = quiz.reduce((n, q, i) => (answers[i] === q.answer ? n + 1 : n), 0);
  const answered = Object.keys(answers).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">{t("quiz.eyebrow")}</p>
      <h1 className="mt-3 font-display text-5xl">{t("quiz.title")}</h1>
      <div className="rule-gold mt-4" />
      <p className="mt-6 text-muted-foreground" aria-live="polite">
        {t("quiz.progress", { answered, total: quiz.length, score })}
      </p>

      <ol className="mt-10 space-y-8">
        {quiz.map((q, i) => {
          const chosen = answers[i];
          return (
            <li key={q.question} className="surface-card rounded-lg p-6">
              <h2 className="font-display text-2xl">{tc(`content.quiz.${i}.question`, q.question)}</h2>
              <div className="mt-4 grid gap-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = oi === q.answer;
                  const state =
                    chosen === undefined
                      ? "border-border bg-background"
                      : isCorrect
                        ? "border-primary bg-accent text-accent-foreground"
                        : isChosen
                          ? "border-destructive bg-destructive/10"
                          : "border-border bg-background opacity-70";
                  return (
                    <button
                      key={opt}
                      onClick={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                      disabled={chosen !== undefined}
                      className={`min-h-11 rounded-md border px-4 py-3 text-left font-sans text-sm ${state}`}
                    >
                      {tc(`content.quiz.${i}.option.${oi}`, opt)}
                    </button>
                  );
                })}
              </div>
              {chosen !== undefined && (
                <p className="mt-4 font-sans text-sm text-muted-foreground">{tc(`content.quiz.${i}.explanation`, q.explanation)}</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
