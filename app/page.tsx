"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MockupsSection from "../components/MockupsSection";
import FeaturesSection from "../components/FeaturesSection";
import QuoteSection from "../components/QuoteSection";
import WaitlistForm from "../components/WaitlistForm";
import ThankYou from "../components/ThankYou";

type Checkpoint = "hero" | "form" | "thankyou";

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
            <MockupsSection />
            <FeaturesSection />
            <QuoteSection />

            {/* Final CTA */}
            <section className="py-20 sm:py-32 px-4 sm:px-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-display">
                  Built for people who are serious about their time.
                </h2>
                <p className="text-text-secondary text-lg mb-10">
                  Early access. Limited spots.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={goToForm}
                  className="px-10 py-4 bg-accent-green text-black font-bold text-base rounded-xl hover:shadow-[0_0_30px_rgba(48,209,88,0.3)] transition-shadow duration-200"
                >
                  Get Early Access →
                </motion.button>
              </div>
            </section>
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
