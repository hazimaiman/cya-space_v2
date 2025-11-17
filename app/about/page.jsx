"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const testimonials = [
  {
    quote:
      "Hazim leads our digital work website, e-commerce, tooling and docs and keeps choices practical. He turns ideas into shipped features and guides the team with calm, clear steps.",
    name: "Tuan Amir Hassan",
    title: "Founder, Zuliam Corp",
    image: "/zuliam.jpeg",
  },
  {
    quote:
      "Hazim bijak menjadi penghubung antara pihak pengurusan dan pasukan jurutera. Beliau menukar matlamat syarikat kepada tugasan yang jelas, memimpin pembangunan laman web syarikat, menyemak kod, dan memudahkan pilihan untuk pihak yang bukan teknikal.",
    name: "Tuan Haji Awang",
    title: "Technical Director, Tijan Aisyah Telco",
    image: "/Tijan.jpg",
  },
  {
    quote:
      "Sebagai CEO, saya menghargai kemas kini yang jelas. Hazim sentiasa menerangkan risiko, pilihan, dan kesan dalam bahasa perniagaan yang mudah difahami. Itu membuat keputusan dan kelulusan lebih cepat serta yakin.",
    name: "Dato' Haji Shahrul",
    title: "CEO, Tijan Aisyah Telco",
    image: "/Tijan.jpg",
  },
  {
    quote:
      "When we needed support, Hazim delivered solid fixes and simple solutions. He handled surprises calmly and documented steps we could reuse next time.",
    name: "Tuan Ikhwan",
    title: "Technical Lead, IMS",
    image: "/IMS.png",
  },
  {
    quote:
      "Hazim membangunkan laman web Cakeanis / HaiCrunch dengan kemas dan mudah digunakan. Beliau menerangkan segalanya dengan bahasa yang mudah difahami, menjadikan proses kemas kini dan perubahan produk lebih senang untuk saya sebagai pengasas bukan teknikal.",
    name: "Puan Anis Nissan",
    title: "Founder, Cakeanis / HaiCrunch",
    image: "/HaiCrunch.jpg",
  },
];

const carouselVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
};

function PartnerVoicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((p) => (p + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  const { quote, name, title, image } = testimonials[activeIndex];

  return (
    <section className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-3xl border border-[#CADCAE]/30 bg-white/80 p-10 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-[#CADCAE]/25 dark:bg-slate-900/70 dark:shadow-black/30">
      <h3 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-[#CADCAE]">
        Partner voices
      </h3>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          variants={carouselVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/60 bg-white shadow-lg shadow-black/10 dark:border-white/10 dark:bg-slate-800">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>

          <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
            "{quote}"
          </p>

          <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <p className="font-semibold text-[#9CAFAA]">{name}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {title}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === activeIndex
                ? "scale-110 bg-[#9CAFAA]"
                : "bg-slate-300/60 hover:bg-slate-400/80 dark:bg-slate-600 dark:hover:bg-slate-500"
            }`}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  const [showContactModal, setShowContactModal] = useState(false);

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
              href="/project"
              className="inline-flex items-center justify-center rounded-md bg-[#D9C4B0] px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/5 transition hover:brightness-95"
            >
              Explore Projects
            </Link>

            {/* Outline button - uses #D9C4B0 for border/text and fills on hover */}
            <button
              type="button"
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center justify-center rounded-md border border-[#D9C4B0] px-6 py-3 text-sm font-semibold text-[#D9C4B0] transition hover:bg-[#D9C4B0] hover:text-slate-900 dark:border-[#D9C4B0] dark:text-[#D9C4B0] dark:hover:bg-[#D9C4B0] dark:hover:text-slate-900"
            >
              Start a project
            </button>
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

            {/* Tech logos via react-icons - icons only */}
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

        <PartnerVoicesCarousel />
      </section>

      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-[#D9C4B0]/30 bg-white p-6 shadow-2xl shadow-black/20 dark:border-[#D9C4B0]/25 dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  About
                </p>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  Want to collaborate?
                </h2>
              </div>
              <button
                type="button"
                aria-label="Close contact modal"
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-white/10 dark:hover:text-white"
                onClick={() => setShowContactModal(false)}
              >
                X
              </button>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              Want to collaborate with me? Don&apos;t segan-silu to email. I
              only use Gmail - reach me at either address below.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:hazimaiman.azman@gmail.com"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-[#D9C4B0] hover:bg-[#D9C4B0]/10 dark:border-slate-700 dark:hover:border-[#D9C4B0] dark:hover:bg-white/5"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Primary
                  </p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    hazimaiman.azman@gmail.com
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#9CAFAA]">
                  Email
                </span>
              </a>

              <a
                href="mailto:hazimaiman@zuliam.com"
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 transition hover:border-[#D9C4B0] hover:bg-[#D9C4B0]/10 dark:border-slate-700 dark:hover:border-[#D9C4B0] dark:hover:bg-white/5"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Secondary
                  </p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    hazimaiman@zuliam.com
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#9CAFAA]">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
