"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <header className="w-full py-3 bg-lightbg/90 backdrop-blur dark:bg-darkbg/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <Link
            href="/"
            className={`mb-0 text-lg font-semibold transition-transform duration-200 ${
              hovered ? "scale-110 opacity-100" : "opacity-80"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "{Hazim Aiman}" : "{CyA}"}
          </Link>

          <nav className="flex items-center gap-4 font-semibold">
            <Link
              className={`border-b-2 border-transparent pb-1 transition-colors ${
                activeLink === "home" ? "font-bold" : ""
              } text-gray-700 hover:text-blue-600 dark:text-gray-300`}
              href="/"
              onMouseEnter={() => setActiveLink("home")}
              onMouseLeave={() => setActiveLink("")}
            >
              Home
            </Link>
            <Link
              className={`border-b-2 border-transparent pb-1 transition-colors ${
                activeLink === "project" ? "font-bold" : ""
              } text-gray-700 hover:text-blue-600 dark:text-gray-300`}
              href="/project"
              onMouseEnter={() => setActiveLink("project")}
              onMouseLeave={() => setActiveLink("")}
            >
              Projects
            </Link>

            <Link
              className={`border-b-2 border-transparent pb-1 transition-colors ${
                activeLink === "about" ? "font-bold" : ""
              } text-gray-700 hover:text-blue-600 dark:text-gray-300`}
              href="/about"
              onMouseEnter={() => setActiveLink("about")}
              onMouseLeave={() => setActiveLink("")}
            >
              About
            </Link>
            <Link
              className="hidden pointer-events-none select-none"
              aria-hidden="true"
              tabIndex={-1}
              href="/collaborations"
            >
              Collaborations
            </Link>

            <button
              className="ms-3 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
              onClick={toggle}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            >
              {theme === "dark" ? "Light ☀️" : "Dark 🌑"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
