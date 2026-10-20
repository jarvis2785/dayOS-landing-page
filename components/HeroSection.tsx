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
    <section className="relative h-screen flex flex-col justify-center px-4 sm:px-8 overflow-hidden noise">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #30D158 0%, transparent 70%)",
            top: "20%",
            left: "10%",
            animation: "mesh-drift 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{
            background: "radial-gradient(circle, #FFD60A 0%, transparent 70%)",
            bottom: "10%",
            right: "5%",
            animation: "mesh-drift 25s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-mobile sm:max-w-3xl mx-auto w-full">
        {/* Glow behind headline */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-accent-green/[0.06] blur-[80px] pointer-events-none" />

        <h1 className="text-[48px] sm:text-[72px] lg:text-[88px] font-black leading-[0.95] tracking-[-0.02em] font-display mb-8 relative">
          {headlineWords.map((word, i) =>
            word === "\n" ? (
              <br key={i} />
            ) : (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="inline-block mr-[0.25em]"
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
          className="text-text-secondary text-lg sm:text-xl leading-relaxed mb-6 max-w-xl"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.3, type: "spring", stiffness: 200 }}
          className="relative inline-block"
        >
          <button
            onClick={onCTAClick}
            className="relative w-full sm:w-auto px-12 py-[18px] bg-accent-green text-black font-bold text-base rounded-2xl transition-shadow duration-200 hover:shadow-[0_0_40px_rgba(48,209,88,0.35)] pulse-ring z-10"
          >
            Join the Waitlist →
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-text-muted text-xs mt-5"
        >
          No app download needed. PWA — runs in your browser, installs to your
          home screen.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#48484A" strokeWidth="2" strokeLinecap="round">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
}
