"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiJavascript,
  SiFigma,
} from "react-icons/si";

const projects = [
  {
    title: "Zuliam",
    description:
      "A mission control platform with live telemetry, scheduling insights, and collaborative checklists for distributed aerospace teams.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    href: "https://zuliam.com",
    stack: [SiNextdotjs, SiTailwindcss, SiFramer],
  },
  {
    title: "CAKENIS",
    description:
      "Composable storefront experience that blends guided storytelling with realtime inventory to boost discovery for boutique brands.",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    href: "https://example.com/nebula",
    stack: [SiNextdotjs, SiJavascript, SiFirebase],
  },
  {
    title: "TIJAN",
    description:
      "Knowledge workspace that maps qualitative insights, moodboards, and product briefs into a visually searchable galaxy.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    href: "https://example.com/lumen",
    stack: [SiNextdotjs, SiTailwindcss, SiFramer],
  },
  {
    title: "MISPAW IF SEMPAT",
    description:
      "Knowledge workspace that maps qualitative insights, moodboards, and product briefs into a visually searchable galaxy.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    href: "https://example.com/lumen",
    stack: [SiNextdotjs, SiTailwindcss, SiFigma],
  },

  {
    title: "ZULIAM EASYSTORE",
    description:
      "Knowledge workspace that maps qualitative insights, moodboards, and product briefs into a visually searchable galaxy.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    href: "https://byzuliam.com",
    stack: [SiNextdotjs, SiTailwindcss],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light dark:opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <header className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500/80"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Work
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Projects engineered with curiosity and polish.
          </motion.h1>
          <motion.p
            className="mt-6 text-base text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Each build pairs performance-focused architecture with immersive
            storytelling so clients feel the craft in every interaction.
          </motion.p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/20"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={index}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(min-width: 1280px) 360px, (min-width: 640px) 50vw, 90vw"
                  priority={index === 0}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0" />
              </div>

              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300">
                    {project.stack.map((Icon, iconIndex) => (
                      <span
                        key={`${project.title}-icon-${iconIndex}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 shadow-inner shadow-white/40 transition group-hover:shadow-lg group-hover:shadow-blue-500/30 dark:bg-slate-800 dark:text-slate-200 dark:shadow-black/40"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/60 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white dark:border-blue-400/60 dark:text-blue-300 dark:hover:bg-blue-400 dark:hover:text-slate-950"
                  >
                    View project
                    <span aria-hidden="true"></span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
