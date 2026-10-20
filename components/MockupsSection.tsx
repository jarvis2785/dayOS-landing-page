"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-[280px] sm:w-[300px] h-[607px] sm:h-[650px] bg-surface-hi rounded-phone overflow-hidden shadow-2xl border border-border/50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-10" />
        <div className="w-full h-full pt-[40px] pb-[20px] px-[16px] bg-bg overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

function DayLoadMockup() {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const fillPercent = 0.78;
  const offset = circumference * (1 - fillPercent);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-5">
      <div className="relative">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#2C2C2E"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#FFD60A"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 100 100)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[48px] font-extrabold text-white leading-none">78%</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-yellow mt-1">
            TIGHT
          </span>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        {[
          { label: "FREE", value: "6.5 hrs" },
          { label: "TASKS", value: "5.2 hrs" },
          { label: "USABLE", value: "4.8 hrs" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex-1 bg-surface-hi rounded-lg py-2 px-2 text-center"
          >
            <div className="text-[10px] uppercase text-text-secondary tracking-wider">
              {stat.label}
            </div>
            <div className="text-[16px] font-bold text-white mt-0.5">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-[3px] w-full">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[6px] rounded-[1px]"
            style={{
              backgroundColor: i < 18 ? "#FFD60A" : "#2C2C2E",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MentorMockup() {
  return (
    <div className="flex flex-col h-full gap-4 pt-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
        MENTOR&apos;S TAKE
      </span>

      <div className="bg-surface-hi rounded-xl p-4 border-l-[3px] border-accent-yellow">
        <p className="text-white text-[13px] leading-[1.7]">
          It is 08:31 — you are mid-class right now, so the morning window is
          gone. Your first real window opens at 13:00. Use 13:30–15:30 for
          client work — that&apos;s your best deep focus block. Don&apos;t touch
          it.
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-1">
        <div className="bg-[#1A0A0A] rounded-lg p-3 border-l-[3px] border-accent-red">
          <div className="flex items-center gap-2">
            <span className="text-sm">📱</span>
            <div>
              <p className="text-white text-[12px] font-medium">
                Content deep work → Thu
              </p>
              <p className="text-text-secondary text-[11px]">
                No quality window left today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#1A0A0A] rounded-lg p-3 border-l-[3px] border-accent-red">
          <div className="flex items-center gap-2">
            <span className="text-sm">📝</span>
            <div>
              <p className="text-white text-[12px] font-medium">
                Blog post draft → Fri
              </p>
              <p className="text-text-secondary text-[11px]">
                Needs 90min focused, only 45min left
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleMockup() {
  return (
    <div className="flex flex-col h-full gap-1 pt-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-secondary mb-2">
        TODAY&apos;S SCHEDULE
      </span>

      <div className="flex flex-col gap-0">
        {/* Past event */}
        <div className="flex gap-3 opacity-35">
          <span className="text-[12px] font-mono text-text-secondary w-[44px] shrink-0 pt-0.5">
            08:00
          </span>
          <div className="border-l-[3px] border-[#3A3A3C] pl-3 pb-3">
            <div className="flex items-center gap-2">
              <p className="text-white text-[13px] font-medium">MEC514 Vibration</p>
              <span className="text-[9px] uppercase tracking-wider text-text-secondary bg-surface-hi px-1.5 py-0.5 rounded">
                PASSED
              </span>
            </div>
            <p className="text-text-secondary text-[11px] font-mono">
              8:00–9:30 · 90min
            </p>
          </div>
        </div>

        {/* Buffer */}
        <div className="flex gap-3 opacity-50">
          <span className="w-[44px] shrink-0" />
          <div className="border-l-[3px] border-dashed border-border pl-3 pb-3">
            <p className="text-text-muted text-[11px]">Morning Routine · 35min</p>
          </div>
        </div>

        {/* NOW indicator */}
        <div className="flex items-center gap-2 my-1">
          <span className="text-[10px] font-bold font-mono text-accent-green">NOW</span>
          <div className="flex-1 h-[1px] bg-accent-green" />
        </div>

        {/* Active task */}
        <div className="flex gap-3">
          <span className="text-[12px] font-mono text-text-secondary w-[44px] shrink-0 pt-0.5">
            13:30
          </span>
          <div className="border-l-[3px] border-accent-yellow pl-3 pb-3">
            <p className="text-white text-[13px] font-bold">Client Work</p>
            <p className="text-text-secondary text-[11px] font-mono">
              13:30–15:30 · 120min
            </p>
          </div>
        </div>

        {/* Buffer */}
        <div className="flex gap-3 opacity-50">
          <span className="w-[44px] shrink-0" />
          <div className="border-l-[3px] border-dashed border-border pl-3 pb-2">
            <p className="text-text-muted text-[11px]">Buffer · 15min</p>
          </div>
        </div>

        {/* Fixed class */}
        <div className="flex gap-3">
          <span className="text-[12px] font-mono text-text-secondary w-[44px] shrink-0 pt-0.5">
            16:00
          </span>
          <div className="border-l-[3px] border-[#3A3A3C] pl-3 pb-3">
            <p className="text-white text-[13px] font-medium">ENR207 Circuits</p>
            <p className="text-text-secondary text-[11px] font-mono">
              16:00–17:30 · 90min
            </p>
          </div>
        </div>

        {/* Evening task */}
        <div className="flex gap-3">
          <span className="text-[12px] font-mono text-text-secondary w-[44px] shrink-0 pt-0.5">
            19:35
          </span>
          <div className="border-l-[3px] border-accent-yellow pl-3 pb-1">
            <p className="text-white text-[13px] font-medium">Study / Revision</p>
            <p className="text-text-secondary text-[11px] font-mono">
              19:35–21:05 · 90min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups = [
  {
    component: <DayLoadMockup />,
    label: "DAY LOAD SCORE",
    description: "Know if today is clear, tight, or overloaded — before it starts.",
    glowColor: "rgba(255, 214, 10, 0.12)",
  },
  {
    component: <MentorMockup />,
    label: "HONEST MENTOR ASSESSMENT",
    description: "No encouragement. Just what fits and what doesn't — and exactly why.",
    glowColor: "rgba(255, 214, 10, 0.12)",
  },
  {
    component: <ScheduleMockup />,
    label: "SMART TIME-BLOCKING",
    description: "Tasks placed in real free windows. Deep focus when your brain is sharp. Never over a class.",
    glowColor: "rgba(255, 214, 10, 0.12)",
  },
];

export default function MockupsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / 3;
    setActiveDot(Math.round(scrollLeft / cardWidth));
  };

  return (
    <section ref={ref} className="py-20 sm:py-32">
      {/* Mobile: horizontal scroll */}
      <div className="block lg:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-8 mockup-scroll"
        >
          {mockups.map((mockup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center gap-5 snap-center shrink-0 w-full"
            >
              <PhoneFrame>
                {mockup.component}
              </PhoneFrame>
              <div className="text-center px-4 max-w-[300px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-2">
                  {mockup.label}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {mockup.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {mockups.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: i === activeDot ? "#FFD60A" : "#2C2C2E",
              }}
            />
          ))}
        </div>
      </div>

      {/* Desktop: 3 side by side with perspective */}
      <div className="hidden lg:flex justify-center items-center gap-8 px-8" style={{ perspective: "1200px" }}>
        {mockups.map((mockup, i) => {
          const rotation = i === 0 ? 8 : i === 2 ? -8 : 0;
          const scale = i === 1 ? 1.05 : 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center gap-6"
              style={{
                transform: `rotateY(${rotation}deg) scale(${scale})`,
              }}
            >
              <div style={{ boxShadow: `0 20px 60px ${mockup.glowColor}` }}>
                <PhoneFrame>
                  {mockup.component}
                </PhoneFrame>
              </div>
              <div className="text-center max-w-[300px]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-2">
                  {mockup.label}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {mockup.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
