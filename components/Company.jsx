"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "IMS", url: "/IMS.png" },
  { name: "TIJANAT", url: "/Tijan.jfif" },
  { name: "Hai Crunch", url: "/HaiCrunch.jpg" },
  { name: "NDeco", url: "/Ndeco.jpg" },
  { name: "SneakersLab", url: "/SNEAKERSLAB.png" },
  { name: "Amr.kicks", url: "/kickslab.png" },
  { name: "Zuliam", url: "/zuliam.jpeg" },
];

const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

export default function Company() {
  return (
    <section id="company-section" className="w-full py-8">
      <div className="mx-auto w-full px-4 md:px-8">
        <h2 className="text-center text-2xl font-semibold">
          In Collaboration With
        </h2>

        <div className="relative mt-6 overflow-hidden py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/75 to-transparent blur-3xl dark:from-slate-950 dark:via-slate-950/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/75 to-transparent blur-3xl dark:from-slate-950 dark:via-slate-950/80" />

          <motion.div
            className="flex w-max items-center gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-slate-200/70 bg-white/90 p-2 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20 dark:border-slate-700/60 dark:bg-slate-900/70"
                aria-hidden={index >= logos.length ? "true" : undefined}
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
