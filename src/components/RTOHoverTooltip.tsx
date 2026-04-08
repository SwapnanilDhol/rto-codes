"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RTOFeature } from "@/types/rto";

interface RTOHoverTooltipProps {
  rto: RTOFeature | null;
  position?: { x: number; y: number };
}

export default function RTOHoverTooltip({ rto, position }: RTOHoverTooltipProps) {
  return (
    <AnimatePresence>
      {rto && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 5 }}
          transition={{ duration: 0.12 }}
          style={{
            position: "fixed",
            left: position?.x ?? 0,
            top: position?.y ?? 0,
            transform: "translate(-50%, -100%)",
            marginTop: "-12px",
            pointerEvents: "none",
            zIndex: 1000,
          }}
          className="bg-white dark:bg-zinc-800 shadow-xl rounded-xl px-4 py-3 min-w-[220px] max-w-xs border border-zinc-200 dark:border-zinc-700"
        >
          <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-zinc-800 border-r border-b border-zinc-200 dark:border-zinc-700" />
          <h4 className="font-semibold text-foreground text-sm">
            {rto.properties.name}
          </h4>
          <p className="text-xs text-blue-500 mt-0.5 font-medium">
            {rto.properties.state}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            {rto.properties.description}
          </p>
          <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-700">
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
              Hover to highlight region
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
