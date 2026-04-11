"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "rto-theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return getSystemTheme();
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [hasManualPreference, setHasManualPreference] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    return storedTheme === "dark" || storedTheme === "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;

    if (hasManualPreference) {
      localStorage.setItem(STORAGE_KEY, theme);
      return;
    }

    localStorage.removeItem(STORAGE_KEY);
  }, [hasManualPreference, theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    if (hasManualPreference || storedTheme === "dark" || storedTheme === "light") {
      return;
    }

    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [hasManualPreference]);

  const toggleTheme = () => {
    setHasManualPreference(true);
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
