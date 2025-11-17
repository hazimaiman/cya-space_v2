// @ts-check
"use client";

const ytUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export default function Footer() {
  const yearLabel = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-white/90 backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4">
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center">
          <p>&copy; {yearLabel} Hazim Aiman.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => {
                window.location.href = ytUrl;
              }}
              className="transition hover:text-blue-600 dark:hover:text-blue-300"
            >
              Terms &amp; Conditions
            </button>
            <button
              type="button"
              onClick={() => {
                alert("This privacy policy will redirect you to an external page.");
                window.location.href = ytUrl;
              }}
              className="transition hover:text-blue-600 dark:hover:text-blue-300"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
