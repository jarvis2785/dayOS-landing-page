"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[40px] bg-accent-yellow/[0.08] blur-[30px] rounded-full" />
      <div className="w-[260px] sm:w-[300px] h-[532px] sm:h-[612px] bg-[#1A1A1C] rounded-[40px] overflow-hidden shadow-2xl border border-[#333] relative">
        <div className="absolute -left-[3px] top-[100px] w-[3px] h-[28px] bg-[#333] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[145px] w-[3px] h-[44px] bg-[#333] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[200px] w-[3px] h-[44px] bg-[#333] rounded-l-sm" />
        <div className="absolute -right-[3px] top-[135px] w-[3px] h-[60px] bg-[#333] rounded-r-sm" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-b-[16px] z-10">
          <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full bg-[#1A1A1C]" />
        </div>
        <div className="absolute inset-[3px] rounded-[37px] overflow-hidden">
          <div className="w-full h-full pt-[40px] pb-[16px] px-[14px] bg-bg relative">
            <div className="absolute top-0 right-0 w-[60%] h-[35%] bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none z-20 rounded-tr-[37px]" />
            <div className="relative z-10 h-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayLoadMini() {
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * 0.22;

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="relative">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="#2C2C2E" strokeWidth="12" strokeLinecap="round" />
          <circle cx="80" cy="80" r={radius} fill="none" stroke="#FFD60A" strokeWidth="12" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 80 80)" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[40px] font-black text-white leading-none font-display">78%</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-yellow mt-1">TIGHT</span>
        </div>
      </div>
      <div className="flex gap-2 w-full">
        {[{ l: "FREE", v: "6.5h" }, { l: "TASKS", v: "5.2h" }, { l: "USABLE", v: "4.8h" }].map((s) => (
          <div key={s.l} className="flex-1 bg-surface-hi rounded-lg py-1.5 px-1 text-center">
            <div className="text-[9px] uppercase text-text-secondary tracking-wider">{s.l}</div>
            <div className="text-[14px] font-bold text-white">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MentorMini() {
  return (
    <div className="flex flex-col h-full gap-3 pt-2">
      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-text-secondary">MENTOR&apos;S TAKE</span>
      <div className="bg-surface-hi rounded-xl p-3.5 border-l-[3px] border-accent-yellow">
        <p className="text-white text-[12px] leading-[1.7]">
          It is 08:31 — morning window is gone. Your first real window opens at 13:00. Use 13:30–15:30 for client work — that&apos;s your best deep focus block.
        </p>
      </div>
      <div className="bg-[#1A0A0A] rounded-lg p-2.5 border-l-[3px] border-accent-red">
        <p className="text-white text-[11px] font-medium">Content deep work → Thu</p>
        <p className="text-text-secondary text-[10px]">No quality window left today</p>
      </div>
      <div className="bg-[#1A0A0A] rounded-lg p-2.5 border-l-[3px] border-accent-red">
        <p className="text-white text-[11px] font-medium">Blog post draft → Fri</p>
        <p className="text-text-secondary text-[10px]">Needs 90min, only 45min left</p>
      </div>
    </div>
  );
}

function ScheduleMini() {
  return (
    <div className="flex flex-col h-full gap-0.5 pt-2">
      <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-text-secondary mb-1.5">TODAY&apos;S SCHEDULE</span>
      <div className="flex gap-2.5 opacity-35">
        <span className="text-[11px] font-mono text-text-secondary w-[40px] shrink-0">08:00</span>
        <div className="border-l-[3px] border-[#3A3A3C] pl-2.5 pb-2.5">
          <p className="text-white text-[12px] font-medium">MEC514 Vibration</p>
          <p className="text-text-secondary text-[10px] font-mono">8:00–9:30 · 90min</p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-1">
        <span className="text-[9px] font-bold font-mono text-accent-green">NOW</span>
        <div className="flex-1 h-[1px] bg-accent-green" />
      </div>
      <div className="flex gap-2.5">
        <span className="text-[11px] font-mono text-text-secondary w-[40px] shrink-0">13:30</span>
        <div className="border-l-[3px] border-accent-yellow pl-2.5 pb-2.5">
          <p className="text-white text-[12px] font-bold">Client Work</p>
          <p className="text-text-secondary text-[10px] font-mono">13:30–15:30 · 120min</p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <span className="text-[11px] font-mono text-text-secondary w-[40px] shrink-0">16:00</span>
        <div className="border-l-[3px] border-[#3A3A3C] pl-2.5 pb-2.5">
          <p className="text-white text-[12px] font-medium">ENR207 Circuits</p>
          <p className="text-text-secondary text-[10px] font-mono">16:00–17:30 · 90min</p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <span className="text-[11px] font-mono text-text-secondary w-[40px] shrink-0">19:35</span>
        <div className="border-l-[3px] border-accent-yellow pl-2.5 pb-1">
          <p className="text-white text-[12px] font-medium">Study / Revision</p>
          <p className="text-text-secondary text-[10px] font-mono">19:35–21:05 · 90min</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    tag: "DAY LOAD SCORE",
    title: "Know your day load before it starts",
    body: "DayOS calculates your real free time — wake to sleep, minus every fixed block. Then scores your day load like Whoop scores recovery. Green means clear. Yellow means tight. Red means something has to go.",
    mockup: <DayLoadMini />,
    align: "left" as const,
  },
  {
    tag: "AI MENTOR",
    title: "Your AI mentor, not an assistant",
    body: "An AI mentor analyzes your tasks against your actual schedule and tells you what fits, what doesn't, and exactly why. No fluff. No 'you've got this.' Just the truth about your day.",
    mockup: <MentorMini />,
    align: "right" as const,
  },
  {
    tag: "SMART SCHEDULING",
    title: "Tasks placed where they actually belong",
    body: "Deep focus work goes in your best cognitive windows. Creative tasks in lower-energy slots. Meals, transitions, and dead zones — all accounted for. Your schedule is built around your real life.",
    mockup: <ScheduleMini />,
    align: "left" as const,
  },
];

function FeatureRow({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const textSide = feature.align === "left" ? "lg:order-1" : "lg:order-2";
  const mockupSide = feature.align === "left" ? "lg:order-2" : "lg:order-1";

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center py-16 md:py-24 px-4 sm:px-8">
      <div className="max-w-page mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: feature.align === "left" ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 80 }}
          className={`${textSide}`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-green mb-4 block">
            {feature.tag}
          </span>
          <h3 className="text-[32px] sm:text-[40px] font-black text-white leading-[1.05] tracking-tight font-display mb-6">
            {feature.title}
          </h3>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md">
            {feature.body}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: feature.align === "left" ? 40 : -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, type: "spring", stiffness: 80 }}
          className={`${mockupSide} flex justify-center`}
        >
          <PhoneFrame>{feature.mockup}</PhoneFrame>
        </motion.div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section>
      {features.map((feature, i) => (
        <FeatureRow key={i} feature={feature} index={i} />
      ))}
    </section>
  );
}
