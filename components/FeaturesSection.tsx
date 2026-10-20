"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#30D158" strokeWidth="3" strokeLinecap="round" />
        <path
          d="M20 6 A14 14 0 1 1 8.1 28.5"
          stroke="#30D158"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    title: "Know your day before it starts",
    body: "DayOS calculates your real free time — wake to sleep, minus every fixed block. Then scores your day load like Whoop scores recovery. Green means clear. Yellow means tight. Red means something has to go.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="10" width="28" height="22" rx="6" stroke="#30D158" strokeWidth="2.5" />
        <path d="M14 18h12M14 23h8" stroke="#30D158" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="10" r="5" fill="#30D158" />
      </svg>
    ),
    title: "Honest feedback, not encouragement",
    body: "An AI mentor analyzes your tasks against your actual schedule and tells you what fits, what doesn't, and exactly why. No fluff. No 'you've got this.' Just the truth.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <line x1="12" y1="8" x2="12" y2="32" stroke="#30D158" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="18" y="10" width="16" height="6" rx="3" fill="#30D158" fillOpacity="0.2" stroke="#30D158" strokeWidth="1.5" />
        <rect x="18" y="20" width="12" height="6" rx="3" fill="#30D158" fillOpacity="0.2" stroke="#30D158" strokeWidth="1.5" />
        <rect x="18" y="30" width="8" height="4" rx="2" fill="#30D158" fillOpacity="0.3" />
      </svg>
    ),
    title: "Tasks placed where they actually fit",
    body: "Deep focus work goes in your best cognitive windows. Creative tasks go in lower-energy slots. Meals, transitions, and dead zones are all accounted for. Your schedule is built around your real life, not an empty calendar.",
  },
];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 sm:py-32 px-4 sm:px-8">
      <div className="max-w-page mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-12 sm:mb-16 font-display"
        >
          What DayOS does
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-border rounded-2xl p-6 sm:p-8 group hover:border-accent-green/40 transition-all duration-300"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
