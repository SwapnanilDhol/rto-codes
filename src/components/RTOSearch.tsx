"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RTOFeature } from "@/types/rto";
import { indiaStatesWithDistricts } from "@/data/districts";

interface RTOSearchProps {
  rtos: RTOFeature[];
  onSearch: (filtered: RTOFeature[]) => void;
  onSelect: (rto: RTOFeature) => void;
}

// Normalize search query: remove spaces, dashes and handle various formats
function normalizeQuery(q: string): string {
  return q.toLowerCase().replace(/[\s-]/g, "");
}

export default function RTOSearch({ rtos, onSearch, onSelect }: RTOSearchProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return rtos;
    const normalizedQ = normalizeQuery(query);
    const q = query.toLowerCase();

    // Handle TG -> TS mapping for Telangana
    const searchQ = normalizedQ === "tg" ? "ts" : normalizedQ;

    return rtos.filter((rto) => {
      // Check state-level matches
      const nameMatch = rto.properties.name.toLowerCase().includes(q);
      const stateMatch = rto.properties.state.toLowerCase().includes(q);
      const idMatch = normalizeQuery(rto.properties.id).includes(searchQ);
      const codeMatch = normalizeQuery(rto.properties.code || "").includes(searchQ);

      if (nameMatch || stateMatch || idMatch || codeMatch) return true;

      // Check district-level matches (search by district name or RTO code)
      const stateData = indiaStatesWithDistricts.find(s => s.code === rto.properties.code);
      if (stateData) {
        for (const district of stateData.districts) {
          const districtNameMatch = normalizeQuery(district.name).includes(searchQ);
          // Also check TG version of district codes for Telangana
          const districtCodeMatch = normalizeQuery(district.rtoCode.replace("TS", "TG")).includes(searchQ) ||
                                   normalizeQuery(district.rtoCode).includes(searchQ);
          if (districtNameMatch || districtCodeMatch) return true;
        }
      }
      return false;
    });
  }, [query, rtos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(filtered);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch(rtos);
  };

  return (
    <div className="relative">
      <div
        className={`
          flex items-center gap-3 px-4 py-2.5 rounded-xl
          bg-zinc-200/60 dark:bg-zinc-800/60 border transition-all duration-200
          ${isFocused
            ? "border-blue-500/50 shadow-lg shadow-blue-500/10"
            : "border-zinc-300 dark:border-zinc-700/50 hover:border-zinc-400 dark:hover:border-zinc-600/50"
          }
        `}
      >
        <svg
          className="w-4 h-4 text-zinc-500 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search RTO by code, name, or district..."
          className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-500 outline-none"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={clearSearch}
              className="shrink-0 p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {query && filtered.length !== rtos.length && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full left-0 right-0 mt-2 px-3 py-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-lg text-xs text-zinc-600 dark:text-zinc-500"
          >
            <span className="text-zinc-900 dark:text-zinc-300 font-medium">{filtered.length}</span> of {rtos.length}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
