"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 px-4 sm:px-8 relative noise">
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <span className="inline-block px-3 py-1 bg-accent-green/10 border border-accent-green/20 rounded-full text-accent-green text-[11px] font-semibold uppercase tracking-[0.12em]">
              REAL OUTPUT
            </span>
          </div>

          <div className="relative pl-8 sm:pl-10">
            {/* Yellow partial border */}
            <div className="absolute left-0 top-2 w-[6px] h-[80px] bg-accent-yellow rounded-full" />

            <p className="text-[22px] sm:text-[32px] font-bold text-white leading-[1.4] tracking-tight">
              &ldquo;It is 08:31 — you are mid-class right now, so the morning
              window is gone. Your first real window opens at 13:00 after three
              back-to-back classes end.&rdquo;
            </p>

            <p className="text-text-muted text-sm sm:text-base mt-6 font-mono">
              — DayOS Mentor Assessment
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
