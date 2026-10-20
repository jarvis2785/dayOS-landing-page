"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ onCTAClick }: { onCTAClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-page mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <span className="text-white font-extrabold text-xl tracking-tight font-display">
          DayOS
        </span>
        <button
          onClick={onCTAClick}
          className="text-sm font-semibold text-accent-green hover:text-white transition-colors duration-200"
        >
          Join Waitlist →
        </button>
      </div>
    </motion.nav>
  );
}
