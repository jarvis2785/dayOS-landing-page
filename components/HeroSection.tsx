"use client";

import { motion } from "framer-motion";

const headlineWords = [
  "Your",
  "day,",
  "scored.",
  "\n",
  "Your",
  "tasks,",
  "placed.",
  "\n",
  "No",
  "excuses.",
];

export default function HeroSection({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-mobile sm:max-w-2xl mx-auto w-full">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight font-display mb-8">
          {headlineWords.map((word, i) =>
            word === "\n" ? (
              <br key={i} />
            ) : (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-6 max-w-lg"
        >
          DayOS analyzes your fixed schedule, fits tasks into your real free
          windows, and tells you honestly what can and can&apos;t happen today.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-text-muted text-sm mb-10"
        >
          Inspired by Whoop&apos;s approach to performance data — built for your
          day, not your heart rate.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCTAClick}
          className="w-full sm:w-auto px-10 py-4 bg-accent-green text-black font-bold text-base rounded-xl transition-shadow duration-200 hover:shadow-[0_0_30px_rgba(48,209,88,0.3)]"
        >
          Join the Waitlist →
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-text-muted text-xs mt-4"
        >
          No app download needed. PWA — runs in your browser, installs to your
          home screen.
        </motion.p>
      </div>
    </section>
  );
}
