// app/terms/TermsClient.jsx
"use client";

import { useEffect } from "react";

const RICKROLL_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const FLAG_KEY = "rrCount"; // shared across pages

export default function TermsClient({ sections }) {
  useEffect(() => {
    const count = Number(sessionStorage.getItem(FLAG_KEY) || "0");

    const timer = setTimeout(() => {
      if (count >= 1) {
        alert("u get rick rolled again.");
      }
      sessionStorage.setItem(FLAG_KEY, String(count + 1));
      window.location.href = RICKROLL_URL;
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-soft-light dark:opacity-30">
        <div className="absolute -left-24 top-20 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-15%] bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />
      </div>

      <section className="relative mx-auto flex max-w-4xl flex-col gap-12">
        <header className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-300">
            Legal overview
          </p>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Terms & Conditions
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            These terms help both sides stay aligned while we build, iterate,
            and ship meaningful digital experiences together.
          </p>
        </header>

        <div className="space-y-8 rounded-3xl border border-blue-100/60 bg-white/85 p-8 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-blue-400/20 dark:bg-slate-900/70 dark:shadow-black/20">
          {sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {section.body}
              </p>
            </article>
          ))}
        </div>

        <p className="text-xs text-center uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Last updated: January 2025
        </p>
      </section>
    </main>
  );
}
