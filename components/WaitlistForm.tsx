"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const professions = [
  "Student",
  "Entrepreneur / Founder",
  "Freelancer",
  "Working Professional",
  "Other",
];

interface WaitlistFormProps {
  onBack: () => void;
  onSuccess: (email: string) => void;
}

export default function WaitlistForm({ onBack, onSuccess }: WaitlistFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    problem: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.profession) errs.profession = "Select your profession";
    if (!form.problem.trim()) errs.problem = "This field is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setApiError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      onSuccess(form.email);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
    { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
    { key: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 py-24"
    >
      <div className="max-w-mobile sm:max-w-lg mx-auto w-full">
        <button
          onClick={onBack}
          className="text-text-muted text-sm mb-8 hover:text-text-secondary transition-colors"
        >
          ← Back
        </button>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 font-display">
          Get early access to DayOS
        </h2>
        <p className="text-text-secondary text-base mb-10">
          We&apos;ll email you when your spot is ready.
        </p>

        <form onSubmit={handleSubmit} className="bg-surface rounded-[20px] p-6 sm:p-8 border border-border">
          <div className="flex flex-col gap-5">
            {fields.map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-2 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete="off"
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [field.key]: e.target.value })
                  }
                  className="w-full bg-surface-hi border border-border rounded-2xl px-4 py-3.5 text-white text-sm placeholder:text-text-muted focus:border-accent-green focus:outline-none transition-colors"
                />
                {errors[field.key] && (
                  <p className="text-accent-red text-xs mt-1.5">{errors[field.key]}</p>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-2 block">
                Profession
              </label>
              <select
                value={form.profession}
                onChange={(e) => setForm({ ...form, profession: e.target.value })}
                className="w-full bg-surface-hi border border-border rounded-2xl px-4 py-3.5 text-white text-sm focus:border-accent-green focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled>
                  Select your profession
                </option>
                {professions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.profession && (
                <p className="text-accent-red text-xs mt-1.5">{errors.profession}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-2 block">
                Biggest problem holding you back
              </label>
              <textarea
                rows={4}
                placeholder="What's your biggest challenge with managing your day right now?"
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                className="w-full bg-surface-hi border border-border rounded-2xl px-4 py-3.5 text-white text-sm placeholder:text-text-muted focus:border-accent-green focus:outline-none transition-colors resize-none"
              />
              {errors.problem && (
                <p className="text-accent-red text-xs mt-1.5">{errors.problem}</p>
              )}
            </motion.div>
          </div>

          {apiError && (
            <p className="text-accent-red text-sm mt-4 text-center">{apiError}</p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full mt-6 py-4 bg-accent-green text-black font-bold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 disabled:opacity-60 hover:shadow-[0_0_30px_rgba(48,209,88,0.3)]"
          >
            {loading ? (
              <span className="animate-pulse">SENDING...</span>
            ) : (
              "SECURE MY SPOT →"
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
