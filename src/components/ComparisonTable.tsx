"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  {
    feature: "Turnaround time",
    diy: "3–10 days",
    va: "5–14 days",
    ps: "48 hours",
  },
  {
    feature: "Retention-first pacing",
    diy: false,
    va: "sometimes",
    ps: true,
  },
  {
    feature: "Cinematic colour grade",
    diy: false,
    va: false,
    ps: true,
  },
  {
    feature: "Voice-lock briefing",
    diy: false,
    va: false,
    ps: true,
  },
  {
    feature: "Multi-platform delivery",
    diy: "manual",
    va: "sometimes",
    ps: true,
  },
  {
    feature: "Structured revision rounds",
    diy: false,
    va: "ad-hoc",
    ps: true,
  },
  {
    feature: "NDA & content discretion",
    diy: "n/a",
    va: false,
    ps: true,
  },
  {
    feature: "SFX, supers & motion",
    diy: false,
    va: false,
    ps: true,
  },
  {
    feature: "Monthly content strategy",
    diy: false,
    va: false,
    ps: "Studio tier",
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/20">
        <Check className="w-3.5 h-3.5 text-accent-light" />
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5">
        <X className="w-3.5 h-3.5 text-zinc-600" />
      </span>
    );
  if (value === "n/a")
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5">
        <Minus className="w-3.5 h-3.5 text-zinc-700" />
      </span>
    );
  return <span className="text-zinc-400 text-xs font-medium">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="relative py-20 px-5 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Why PS Edits
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            DIY vs VA vs{" "}
            <span className="text-gradient">PS Edits</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            The real cost of doing it yourself or hiring cheap—compared to what
            you actually get here.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/5 border-b border-white/5">
            <div className="px-5 py-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Feature
            </div>
            <div className="px-4 py-4 text-center text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              DIY
            </div>
            <div className="px-4 py-4 text-center text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Hire a VA
            </div>
            <div className="px-4 py-4 text-center text-xs font-semibold text-accent-light uppercase tracking-wider">
              PS Edits
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`grid grid-cols-4 items-center border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
              }`}
            >
              <div className="px-5 py-4 text-sm text-zinc-300 font-medium">
                {row.feature}
              </div>
              <div className="px-4 py-4 flex items-center justify-center">
                <Cell value={row.diy} />
              </div>
              <div className="px-4 py-4 flex items-center justify-center">
                <Cell value={row.va} />
              </div>
              <div className="px-4 py-4 flex items-center justify-center bg-accent/5">
                <Cell value={row.ps} />
              </div>
            </motion.div>
          ))}

          {/* Footer CTA */}
          <div className="grid grid-cols-4 border-t border-white/10 bg-white/[0.02]">
            <div className="px-5 py-5 col-span-3" />
            <div className="px-4 py-5 flex items-center justify-center bg-accent/5">
              <a
                href="#pricing"
                className="text-accent-light text-xs font-bold hover:text-white transition-colors"
              >
                See packages →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
