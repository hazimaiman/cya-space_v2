"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

const testimonials = [
  {
    quote:
      "Collaborating felt effortless - sprints stayed on track and the final delivery exceeded our stakeholder demos.",
    name: "Aminah Hassan",
    title: "Product Lead, SneakerLabs.my",
    image: "/SNEAKERSLAB.png",
  },
  {
    quote:
      "Structured, thoughtful, and calm under pressure. We always knew where the project stood.",
    name: "Faris Rahman",
    title: "Operations Manager, Zuliam Corp",
    image: "/zuliam.jpeg",
  },
  {
    quote:
      "He stayed present from discovery to deployment and every handoff felt supported.",
    name: "Nur Izzah",
    title: "Delivery Manager, DevStack Sdn Bhd",
    image: "/logo.png",
  },
  {
    quote:
      "Kept our migration calm and well documented even when hardware surprises showed up.",
    name: "Hafiz Abdullah",
    title: "IT Lead, IMS",
    image: "/IMS.png",
  },
  {
    quote:
      "Brought structure to our product timelines while respecting the pace of the team.",
    name: "Aqil Musa",
    title: "Program Director, Tijan Aisyah Telco",
    image: "/Tijan.jfif",
  },
  {
    quote:
      "Quick to understand requirements and iterate so support tickets dropped right after launch.",
    name: "Farah Zulkifli",
    title: "Founder, Contras Capital",
    image: "/logo.png",
  },
];

const carouselVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.97 },
};

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const { quote, name, title, image } = testimonials[activeIndex];

  return (
    <section className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 rounded-3xl border border-blue-100/60 bg-white/80 p-10 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-blue-400/30 dark:bg-slate-900/70 dark:shadow-black/30">
      <h3 className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-blue-500/80">
        Voices from partners
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
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/60 bg-white shadow-lg shadow-blue-500/15 dark:border-white/10 dark:bg-slate-800">
            <Image src={image} alt={name} fill className="object-contain" sizes="80px" />
          </div>
          <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
            "{quote}"
          </p>
          <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <p className="font-semibold text-blue-600 dark:text-blue-300">{name}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{title}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "scale-110 bg-blue-500 dark:bg-blue-400" : "bg-slate-300/60 hover:bg-slate-400/80 dark:bg-slate-600 dark:hover:bg-slate-500"}`}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default function CollaborationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light dark:opacity-35">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <header className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500/80"
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
            Titles, teams, and timelines that have shaped how I collaborate and deliver.
          </motion.p>
        </header>

        <motion.section
          className="relative overflow-hidden rounded-3xl border border-blue-100/60 bg-white/80 p-10 shadow-lg shadow-blue-500/10 backdrop-blur-xl dark:border-blue-400/30 dark:bg-slate-900/65"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Experience timeline</h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                A clean snapshot of ongoing roles and past positions. No bullet lists, just the essentials.
              </p>
            </div>

            <div className="relative">
              <span className="absolute left-[9px] top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" aria-hidden="true" />
              <div className="space-y-8 pl-8">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={`${experience.role}-${experience.company}`}
                    className="relative rounded-2xl bg-blue-50/60 p-6 shadow-sm shadow-blue-500/10 dark:bg-blue-500/10 dark:shadow-blue-900/30"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <span className="absolute -left-[23px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-blue-500 shadow-md shadow-blue-500/30 dark:border-slate-900" aria-hidden="true" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-300">
                      {experience.timeframe}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {experience.company}
                      {experience.location ? ` | ${experience.location}` : ""}
                      {experience.annotation ? ` | ${experience.annotation}` : ""}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <TestimonialCarousel />
      </section>
    </main>
  );
}


