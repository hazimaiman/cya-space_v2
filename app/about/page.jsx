import Link from "next/link";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";

const values = [
  {
    title: "Kind, adaptable, always learning",
    description:
      "I am  not tied to a single stack and enjoy picking up whatever the team uses. I listen first, ask thoughtful questions, and keep improving along the way.",
  },
];

const stats = [
  { label: "Projects collaborations", value: "7+" },
  { label: "Industries served", value: "Retail, Fashion, Telco" },
];

// tech icons (SSR-friendly via react-icons)
const stack = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Angular", Icon: SiAngular },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Supabase", Icon: SiSupabase },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Soft brand glows (neutral; no blues/purples) */}
      <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-soft-light dark:opacity-40">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#D9C4B0]/15 blur-3xl" />
        <div className="absolute right-[-20%] top-40 h-96 w-96 rounded-full bg-[#CADCAE]/12 blur-[110px]" />
      </div>

      <section className="relative mx-auto flex max-w-5xl flex-col gap-16">
        {/* Hero */}
        <div className="space-y-10 text-center">
          <h1 className="text-2xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
            Enthusiastic, adaptable, always learning.
          </h1>

          {/* <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I like to listen first, then build. I am comfortable picking up new
            stacks, improving what already exists, and documenting as we go so
            teams move calmly and confidently. Security and maintainability
            matter and so do people and pace.
          </p> */}

          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary button - #D9C4B0 */}
            <Link
              href="/collaborations"
              className="inline-flex items-center justify-center rounded-md bg-[#D9C4B0] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/5 transition hover:brightness-95"
            >
              Explore collaborations
            </Link>

            {/* Outline button - uses #D9C4B0 for border/text and fills on hover */}
            <Link
              href="mailto:hazimaiman.azman@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-[#D9C4B0] px-6 py-3 text-sm font-semibold text-[#D9C4B0] transition hover:bg-[#D9C4B0] hover:text-slate-900 dark:border-[#D9C4B0] dark:text-[#D9C4B0] dark:hover:bg-[#D9C4B0] dark:hover:text-slate-900"
            >
              Start a project
            </Link>
          </div>
        </div>

        {/* Principles + Quick facts */}
        <div className="grid gap-8 rounded-3xl border border-[#CADCAE]/30 bg-white/80 p-10 shadow-xl shadow-black/5 backdrop-blur-xl dark:border-[#CADCAE]/25 dark:bg-slate-900/70 dark:shadow-black/30 md:grid-cols-[1.1fr,1fr]">
          {/* Values */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              What guides the work
            </h2>
            <ul className="space-y-5">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm shadow-black/5 transition hover:-translate-y-1 hover:border-[#CADCAE]/70 hover:shadow-[0_6px_16px_0_rgba(202,220,174,0.25)] dark:border-slate-700/60 dark:bg-slate-900/60"
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

          {/* Quick stats + Tech icons */}
          <div className="flex flex-col justify-between gap-8 rounded-2xl bg-gradient-to-br from-[#D9C4B0]/15 via-[#CADCAE]/10 to-transparent p-8 text-slate-800 shadow-inner shadow-black/5 dark:from-[#D9C4B0]/15 dark:via-slate-900 dark:to-transparent dark:text-slate-100">
            <dl className="space-y-6">
              {stats.map((stat) => {
                const accentLabels = new Set([
                  "Projects collaborations",
                  "Industries served",
                ]);
                const accent = accentLabels.has(stat.label);
                return (
                  <div
                    key={stat.label}
                    className="border-b border-white/30 pb-4 last:border-b-0 last:pb-0 dark:border-white/10"
                  >
                    <dt className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </dt>
                    <dd
                      className={`mt-2 text-3xl font-semibold ${
                        accent
                          ? "text-[#9CAFAA]"
                          : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {stat.value}
                    </dd>
                  </div>
                );
              })}
            </dl>

            {/* Tech logos via react-icons — icons only */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
                Tech I work with
              </h3>
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
                {stack.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/60 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-[#CADCAE]/70 hover:shadow-[0_6px_16px_0_rgba(202,220,174,0.25)] dark:border-white/10 dark:bg-slate-900/40"
                    title={name}
                    aria-label={name}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-inset ring-black/5 bg-gradient-to-br from-white/80 to-slate-100 group-hover:from-white dark:from-slate-800 dark:to-slate-800">
                      <Icon className="text-[18px] opacity-80 group-hover:opacity-100" />
                    </span>
                    <span className="sr-only">{name}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Familiar with these languages & tools and comfortable learning
                new ones fast.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
