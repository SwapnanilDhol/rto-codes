"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Lookup" },
  { href: "/states", label: "States" },
  { href: "/data", label: "Data" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex w-full items-center justify-between border-b border-slate-200/60 bg-white/80 px-6 py-3 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="flex w-full items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          RTO.codes
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            className="ml-2 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/[0.05] dark:hover:text-white"
          >
            {theme === "dark" ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 3v2.25M12 18.75V21M4.72 4.72l1.59 1.59M17.69 17.69l1.59 1.59M3 12h2.25M18.75 12H21M4.72 19.28l1.59-1.59M17.69 6.31l1.59-1.59M15.75 12A3.75 3.75 0 118.25 12a3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M21 12.8A9 9 0 1111.2 3a7.5 7.5 0 009.8 9.8z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
