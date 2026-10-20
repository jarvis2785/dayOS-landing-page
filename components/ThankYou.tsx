"use client";

import { motion } from "framer-motion";

const checkmarkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

interface ThankYouProps {
  email: string;
  onBack: () => void;
}

export default function ThankYou({ email, onBack }: ThankYouProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-24"
    >
      <div className="max-w-mobile sm:max-w-md mx-auto w-full text-center">
        <motion.div className="mb-8 inline-block">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="36" stroke="#30D158" strokeWidth="3" strokeOpacity="0.2" />
            <motion.path
              d="M24 40 L35 51 L56 30"
              stroke="#30D158"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              variants={checkmarkVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-display"
        >
          You&apos;re on the list.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-text-secondary text-base mb-10"
        >
          We&apos;ll email you at{" "}
          <span className="text-white font-medium">{email}</span>{" "}
          when DayOS is ready for you.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          href="https://instagram.com/shaaann.soni"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 border border-white/30 text-white font-medium rounded-xl hover:bg-white/5 transition-colors duration-200"
        >
          Follow @shaaann.soni for updates →
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-text-muted text-xs mt-12 leading-relaxed"
        >
          DayOS — Built by a 20-year-old engineering student who got tired of
          broken schedules.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          onClick={onBack}
          className="text-text-muted text-sm mt-8 hover:text-text-secondary transition-colors"
        >
          ← Back to home
        </motion.button>
      </div>
    </motion.div>
  );
}
