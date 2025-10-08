import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const navigation = [
  {
    title: "Personal",
    links: [
      { label: "Contact", href: "mailto:hazimaiman.azman@gmail.com" },
      { label: "Blog", href: "/blog" },
      { label: "Docs", href: "/docs" },
    ],
  },
];

const socialLinks = [
  { icon: FaGoogle, href: "mailto:hazimaiman.azman@gmail.com", label: "Email" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/muhammad-hazim-aiman-50086b226/",
    label: "LinkedIn",
  },
  { icon: FaGithub, href: "https://github.com/hazimaiman", label: "GitHub" },
];

export default function Footer() {
  const yearLabel = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-white/90 backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr,2fr]">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 text-slate-800 dark:text-slate-100"
            >
              <Image
                src="/logo.png"
                alt="CyA Space"
                width={40}
                height={32}
                priority
              />
              <span className="text-lg font-semibold tracking-wide">
                CyA Space
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I am Hazim, a friendly, adaptable engineer who likes to listen
              first, then build. I focus on clear communication, simple docs,
              and steady delivery so teams can ship with confidence.
            </p>
          </div>

          <div className="md:justify-self-end">
            {navigation.map((column) => (
              <div key={column.title} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  {column.title}
                </h4>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      {item.href.startsWith("/") ? (
                        <Link
                          href={item.href}
                          className="transition hover:text-blue-600 dark:hover:text-blue-300"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="transition hover:text-blue-600 dark:hover:text-blue-300"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-slate-200/60 pt-6 text-sm text-slate-500 dark:border-slate-700/60 dark:text-slate-400 sm:flex-row sm:items-center">
          <p>&copy; {yearLabel} Hazim Aiman.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="transition hover:text-blue-600 dark:hover:text-blue-300"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="transition hover:text-blue-600 dark:hover:text-blue-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
