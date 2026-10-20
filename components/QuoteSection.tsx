"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 sm:py-32 px-4 sm:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-6 text-center">
            WHAT IT ACTUALLY SAYS
          </p>

          <div className="bg-surface rounded-[20px] border-l-4 border-accent-yellow p-6 sm:p-10">
            <p className="text-text-secondary text-lg sm:text-xl italic leading-relaxed">
              &ldquo;It is 08:31 — you are mid-class right now, so the morning
              window is gone. Your first real window opens at 13:00 after three
              back-to-back classes end.&rdquo;
            </p>
            <p className="text-text-muted text-sm mt-6">
              — DayOS Mentor Assessment, real output
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
