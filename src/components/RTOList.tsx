"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RTOFeature } from "@/types/rto";

interface RTOListProps {
  rtos: RTOFeature[];
  hoveredRTO: RTOFeature | null;
  onRTSelect: (rto: RTOFeature) => void;
}

export default function RTOMapList({ rtos, hoveredRTO, onRTSelect }: RTOListProps) {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          India Regional Transport Offices
        </h2>
        <AnimatePresence mode="popLayout">
          {rtos.map((rto) => {
            const isHovered = hoveredRTO?.properties.id === rto.properties.id;
            return (
              <motion.div
                key={rto.properties.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                onClick={() => onRTSelect(rto)}
                className={`
                  p-3 rounded-lg cursor-pointer transition-all duration-150
                  border border-transparent
                  hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/30
                  ${isHovered
                    ? "border-blue-400 bg-blue-100 dark:bg-blue-900/40 shadow-md"
                    : "bg-zinc-50 dark:bg-zinc-800/50"
                  }
                `}
              >
                <h3 className="font-medium text-foreground">
                  {rto.properties.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {rto.properties.state}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 line-clamp-2">
                  {rto.properties.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
