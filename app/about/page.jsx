import Link from "next/link";

export const metadata = {
  title: "About - CyA Space",
  description:
    "Learn how Hazim Aiman partners with teams to ship intentional digital products.",
};

const values = [
  {
    title: "Craft with clarity",
    description:
      "Every interface starts with a clear story, ensuring design and engineering decisions stay anchored to user value.",
  },
  {
    title: "Move with momentum",
    description:
      "Lightweight rituals, transparent roadmaps, and rapid feedback loops keep launches predictable without slowing creativity.",
  },
  {
    title: "Build for scale",
    description:
      "Choosing the right stack - from Next.js and Tailwind to Supabase - helps teams iterate quickly and grow with confidence.",
  },
];

const stats = [
  { label: "Projects collaborations", value: "10+" },
  { label: "Industries served", value: "Retail, SaaS, Telco" },
  { label: "Avg. sprint velocity gain", value: "18%" },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-soft-light dark:opacity-40">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-[-20%] top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[110px]" />
      </div>

      <section className="relative mx-auto flex max-w-5xl flex-col gap-16">
        <div className="space-y-10 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-blue-500/40 px-6 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 dark:border-blue-400/40 dark:text-blue-300">
            About Hazim Aiman
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
            Building resilient digital experiences where product, operations,
            and people stay in sync.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            From scrappy retail launches to enterprise telco refreshes, I
            champion intentional systems that feel premium without the overhead.
            Each collaboration blends hands-on engineering with calm project
            leadership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collaborations"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
            >
              Explore collaborations
            </Link>
            <Link
              href="mailto:hazimaiman.azman@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="grid gap-8 rounded-3xl border border-blue-100/60 bg-white/80 p-10 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-blue-400/20 dark:bg-slate-900/70 dark:shadow-black/30 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              What guides the work
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I treat every engagement as a partnership - aligning on velocity,
              keeping documentation friendly, and leaving teams with clarity
              long after delivery.
            </p>
            <ul className="space-y-5">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm shadow-blue-500/5 transition hover:-translate-y-1 hover:border-blue-400/70 hover:shadow-blue-500/20 dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-purple-500/10 p-8 text-slate-800 shadow-inner shadow-blue-500/10 dark:from-blue-500/10 dark:via-slate-900 dark:to-purple-500/10 dark:text-slate-100">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Momentum snapshots</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Whether engineering or operations, the goal is to leave teams
                faster and happier than when we started.
              </p>
            </div>
            <dl className="space-y-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-b border-white/30 pb-4 last:border-b-0 last:pb-0"
                >
                  <dt className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl font-semibold text-blue-600 dark:text-blue-300">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
