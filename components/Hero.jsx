"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { SiIndeed } from 'react-icons/si'

export default function Hero() {
  const [open, setOpen] = useState(false)

  const closeOnEsc = (e) => {
    if (e.key === 'Escape') setOpen(false)
  }

  return (
    <section id="hero-section" className="hero-container w-full">
      <div className="hero-content flex flex-col items-center justify-center gap-5 px-4 py-8 md:flex-row max-w-screen-xl mx-auto">
        <div className="flex-1 text-center">
          <h3 className="text-xl md:text-2xl">Welcome to my Spartial Separation</h3>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Hi! I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              <Typewriter
                words={["Hazim Aiman", "Programmer", "Softball Player"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
            I am a passionate individual looking for opportunities in software development with a flexible working hours and environment. I do freelance work occasionally and aspire to become a CTO someday.
          </p>
          <p className="mt-6">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-6 py-3 text-lg font-bold text-white shadow hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white"
            >
              Let's Connect <BsArrowRightCircle />
            </button>
          </p>
        </div>
        <div className="hero-image flex-1 flex items-center justify-center">
          {/* Place 'profile.jpg' into next-app/public/profile.jpg */}
          <Image
            src="/profile.jpg"
            alt="Hazim Aiman"
            width={400}
            height={400}
            className="max-w-[80%] md:max-w-[60%] max-h-[400px] md:max-h-[350px] w-auto h-auto rounded-lg bg-transparent object-cover"
            priority
            sizes="(min-width: 1200px) 60vw, (max-width: 768px) 60vw, 80vw"
          />
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onKeyDown={closeOnEsc}
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-11/12 max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900">
            <button
              aria-label="Close"
              className="absolute right-3 top-3 rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h3 className="mb-4 text-center text-xl font-semibold text-gray-900 dark:text-white">Connect with me</h3>
            <div className="flex items-center justify-center gap-6 text-3xl">
              <a
                href="mailto:hazimaiman.azman@gmail.com"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                aria-label="Email"
              >
                <FaGoogle />
              </a>
              <a
                href="https://github.com/hazimaiman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.indeed.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
                aria-label="Indeed"
              >
                <SiIndeed />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
