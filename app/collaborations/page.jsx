"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/* ---------- experience data ---------- */
const experiences = [
  {
    role: "Digital Operation Lead",
    company: "Zuliam Corp",
    location: "Kuala Lumpur",
    timeframe: "January 2025 - Present",
    annotation: "Part-Time",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    timeframe: "October 2024 - Present",
  },
  {
    role: "Software Engineer",
    company: "Tijan Aisyah Telco Sdn Bhd",
    location: "Pahang",
    timeframe: "July 2023 - September 2024",
  },
  {
    role: "Junior Software Engineer",
    company: "DevStack Sdn Bhd",
    location: "Terengganu",
    timeframe: "February 2023 - June 2023",
  },
  {
    role: "IT Support (Software & Hardware)",
    company: "IMS",
    location: "Terengganu",
    timeframe: "November 2022 - January 2023",
  },
  {
    role: "Network Intern",
    company: "Contras Capital Sdn Bhd",
    location: "Kuala Lumpur",
    timeframe: "June 2020 - September 2020",
  },
];

/* ---------- testimonials (Partner voices) ---------- */
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
      "He bridged management and engineering: translated goals into a workable backlog, led the company website build, reviewed code, and made trade-offs easy for non-technical stakeholders.",
    name: "Tuan Haji Awang",
    title: "Technical Director, Tijan Aisyah Telco",
    image: "/Tijan.jfif",
  },
  {
    quote:
      "As CEO I value clear updates. Hazim explained risks, options, and impact in simple business terms, so decisions and approvals were fast and confident.",
    name: "Dato' Haji Shahrul",
    title: "CEO, Tijan Aisyah Telco",
    image: "/Tijan.jfif",
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
      "He built a clean site for Cakeanis / HaiCrunch and explained everything in plain language. As a non-tech founder, that made updates and product changes easy.",
    name: "Puan Anis Nissan",
    title: "Founder, Cakeanis / HaiCrunch",
    image: "/HaiCrunch.jpg",
  },
];

const profile = { name: "Hazim Aiman", avatar: "/profile.jpg" };

/* ---------- helpers ---------- */
const monthMap = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

function toHeadingDate(tf) {
  const left = tf.split("-")[0].trim();
  const [mon = "", year = ""] = left.split(" ");
  return `${mon.slice(0, 3).toUpperCase()}, ${year}`;
}

function sortByStartDesc(a, b) {
  const [am, ay] = a.timeframe.split("-")[0].trim().split(" ");
  const [bm, by] = b.timeframe.split("-")[0].trim().split(" ");
  const ad = new Date(
    Number(ay),
    (monthMap[(am || "").toLowerCase()] || 1) - 1,
    1
  ).getTime();
  const bd = new Date(
    Number(by),
    (monthMap[(bm || "").toLowerCase()] || 1) - 1,
    1
  ).getTime();
  return bd - ad;
}

/* ---------- testimonials carousel ---------- */
const carouselVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.97 },
};

function TestimonialCarousel() {
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
    <section className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 rounded-3xl border border-[#CADCAE]/30 bg-white/80 p-10 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-[#CADCAE]/25 dark:bg-slate-900/70 dark:shadow-black/30">
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

/* ---------- preline-style experience timeline ---------- */
function ExperienceTimeline() {
  const items = useMemo(() => [...experiences].sort(sortByStartDesc), []);

  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl border border-[#CADCAE]/30 bg-white/80 p-10 shadow-lg shadow-black/10 backdrop-blur-xl dark:border-[#CADCAE]/25 dark:bg-slate-900/65"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Experience timeline
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Hoverable rows powered by Preline’s timeline component.
          </p>
        </div>

        <div>
          {items.map((exp, idx) => (
            <div key={`${exp.role}-${exp.company}-${idx}`}>
              {/* Heading */}
              <div className="ps-2 my-2 first:mt-0">
                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                  {toHeadingDate(exp.timeframe)}
                </h3>
              </div>

              {/* Item */}
              <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                <a
                  className="z-1 absolute inset-0"
                  aria-label={`${exp.role} at ${exp.company}`}
                  href="#"
                />
                {/* Rail + dot */}
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 dark:group-hover:after:bg-neutral-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-neutral-800 dark:border-neutral-600 dark:group-hover:border-neutral-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="grow p-2 pb-8">
                  <h3 className="flex flex-wrap items-center gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    {exp.role}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    {exp.company}
                    {exp.location ? ` • ${exp.location}` : ""}
                    {exp.annotation ? ` • ${exp.annotation}` : ""}
                    {` • ${exp.timeframe}`}
                  </p>

                  {/* Badge */}
                  <button
                    type="button"
                    className="mt-2 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-2xs disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
                  >
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={16}
                      height={16}
                      className="shrink-0 rounded-full"
                    />
                    <span>{profile.name}</span>
                  </button>
                </div>
              </div>
              {/* End item */}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ---------- page ---------- */
export default function CollaborationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Warm, brandy glows */}
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light dark:opacity-35">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#D9C4B0]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#CADCAE]/16 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <header className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.35em] text-[#522546]"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Collaborations
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work experience at a glance.
          </motion.h1>
          <motion.p
            className="mt-6 text-base text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Titles, teams, and timelines that have shaped how I collaborate and
            deliver.
          </motion.p>
        </header>

        {/* Timeline */}
        <ExperienceTimeline />

        {/* Partner voices */}
        <TestimonialCarousel />
      </section>
    </main>
  );
}
