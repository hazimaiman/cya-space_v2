export const metadata = {
  title: "Terms & Conditions - CyA Space",
  description: "Terms and engagement guidelines for working with Hazim Aiman.",
}

const sections = [
  {
    title: "1. Engagement scope",
    body:
      "CyA Space collaborates on digital product strategy, design, and engineering deliverables. Each engagement is governed by a written statement of work outlining timelines, stakeholders, and outcomes.",
  },
  {
    title: "2. Communication cadence",
    body:
      "Project updates are shared through weekly async status notes and scheduled review sessions. Urgent blockers should be escalated via email or the agreed messaging channel.",
  },
  {
    title: "3. Intellectual property",
    body:
      "All approved deliverables become the property of the client after final payment, while CyA Space retains the right to reference anonymised learnings and non-sensitive visuals in portfolios.",
  },
  {
    title: "4. Payment terms",
    body:
      "Invoices are issued at project kickoff and milestone completion. Payment is due within 14 days unless otherwise stated in the statement of work.",
  },
  {
    title: "5. Confidentiality",
    body:
      "Any shared assets, credentials, or strategies remain confidential and are used solely for the purpose of the engagement.",
  },
  {
    title: "6. Changes and cancellations",
    body:
      "Scope adjustments will be documented in writing. Work paused or cancelled by the client is invoiced for the effort completed to date.",
  },
]

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-soft-light dark:opacity-30">
        <div className="absolute -left-24 top-20 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-15%] bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />
      </div>

      <section className="relative mx-auto flex max-w-4xl flex-col gap-12">
        <header className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-300">Legal overview</p>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Terms & Conditions</h1>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            These terms help both sides stay aligned while we build, iterate, and ship meaningful digital experiences together.
          </p>
        </header>

        <div className="space-y-8 rounded-3xl border border-blue-100/60 bg-white/85 p-8 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-blue-400/20 dark:bg-slate-900/70 dark:shadow-black/20">
          {sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{section.body}</p>
            </article>
          ))}
        </div>

        <p className="text-xs text-center uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Last updated: January 2025</p>
      </section>
    </main>
  )
}

