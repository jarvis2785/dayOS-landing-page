"use client";

import { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MockupsSection from "../components/MockupsSection";
import FeaturesSection from "../components/FeaturesSection";
import QuoteSection from "../components/QuoteSection";
import WaitlistForm from "../components/WaitlistForm";
import ThankYou from "../components/ThankYou";

type Checkpoint = "hero" | "form" | "thankyou";

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { value: "78%", label: "Avg day load", accent: false },
    { value: "FRIDAY", label: "Worst day", accent: true },
    { value: "3.2 hrs", label: "Wasted daily", accent: false },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-8 border-y border-border/50">
      <div className="max-w-page mx-auto">
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className={`text-[28px] sm:text-[44px] font-black font-display leading-none tracking-tight ${stat.accent ? "text-accent-yellow" : "text-white"}`}>
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.12em] text-text-muted mt-2 sm:mt-3 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-8 border-t border-border/50">
      <div className="max-w-page mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="text-white font-black text-xl tracking-tight font-display">DayOS</span>
          <p className="text-text-muted text-sm mt-1">Your personal day intelligence system.</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/shaaann.soni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-white transition-colors"
          >
            Instagram →
          </a>
          <span className="text-text-muted/50 text-sm">© 2026 DayOS</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [checkpoint, setCheckpoint] = useState<Checkpoint>("hero");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const goToForm = () => {
    setCheckpoint("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToHero = () => {
    setCheckpoint("hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSuccess = (email: string) => {
    setSubmittedEmail(email);
    setCheckpoint("thankyou");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-bg">
      <AnimatePresence mode="wait">
        {checkpoint === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar onCTAClick={goToForm} />
            <HeroSection onCTAClick={goToForm} />
            <StatsBar />
            <MockupsSection />
            <FeaturesSection />
            <QuoteSection />

            {/* Final CTA */}
            <section className="py-24 sm:py-32 px-4 sm:px-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-[28px] sm:text-[40px] font-black text-white mb-4 font-display leading-tight">
                  Built for people who are serious about their time.
                </h2>
                <p className="text-text-secondary text-lg mb-10">
                  Early access. Limited spots.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={goToForm}
                  className="px-12 py-[18px] bg-accent-green text-black font-bold text-base rounded-2xl hover:shadow-[0_0_40px_rgba(48,209,88,0.35)] transition-shadow duration-200"
                >
                  Get Early Access →
                </motion.button>
              </div>
            </section>

            <Footer />
          </motion.div>
        )}

        {checkpoint === "form" && (
          <WaitlistForm
            key="form"
            onBack={goToHero}
            onSuccess={handleSuccess}
          />
        )}

        {checkpoint === "thankyou" && (
          <ThankYou
            key="thankyou"
            email={submittedEmail}
            onBack={goToHero}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
