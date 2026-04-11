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
  const navClass =
    theme === "dark"
      ? "border-white/10 bg-[#020617]/95"
      : "border-slate-200/70 bg-white/90";
  const brandClass = theme === "dark" ? "text-white" : "text-slate-950";
  const linkClass =
    theme === "dark"
      ? "text-slate-400 hover:bg-white/[0.05] hover:text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950";
  const buttonClass =
    theme === "dark"
      ? "text-slate-400 hover:bg-white/[0.05] hover:text-white"
      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950";

  return (
    <nav className={`flex w-full items-center justify-between border-b px-6 py-3 ${navClass}`}>
      <div className="flex w-full items-center justify-between gap-6">
        <Link href="/" className={`text-sm font-semibold tracking-tight ${brandClass}`}>
          RTO.codes
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            className={`ml-2 rounded-full p-2 transition ${buttonClass}`}
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
