export const metadata = {
  title: "Privacy Policy - CyA Space",
  description: "How CyA Space handles personal information during collaborations.",
}

const sections = [
  {
    title: "1. Data collected",
    body:
      "CyA Space collects only the information provided directly by clients or prospective partners, such as names, email addresses, project briefs, and feedback shared during collaboration.",
  },
  {
    title: "2. Use of data",
    body:
      "Details are used to plan projects, deliver agreed services, and maintain communication about timelines, invoices, and outcomes.",
  },
  {
    title: "3. Storage & security",
    body:
      "Project files and contact information are stored in secure cloud services with access restricted to Hazim Aiman. Sensitive assets are removed when engagements conclude.",
  },
  {
    title: "4. Sharing",
    body:
      "CyA Space never sells personal information. Data is shared only with trusted tools essential to delivering the work, such as project management or billing platforms.",
  },
  {
    title: "5. Your choices",
    body:
      "Clients can request an export or deletion of their stored information at any time by emailing hazimaiman.azman@gmail.com.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-55 mix-blend-soft-light dark:opacity-30">
        <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute left-[-18%] bottom-14 h-72 w-72 rounded-full bg-blue-500/15 blur-[120px]" />
      </div>

      <section className="relative mx-auto flex max-w-4xl flex-col gap-12">
        <header className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-300">Privacy promise</p>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Privacy Policy</h1>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Your trust matters. This policy explains how project information is collected, safeguarded, and used throughout our collaboration.
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

