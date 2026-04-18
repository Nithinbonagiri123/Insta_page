"use client";

import { motion } from "framer-motion";
import { Mic2, Shield, RefreshCw } from "lucide-react";

const items = [
  {
    icon: Mic2,
    title: "Voice lock briefing",
    desc: "Reference reels, tone notes, and taboo topics up front—plus a revision round dedicated to how you sound, not just how it looks.",
  },
  {
    icon: Shield,
    title: "Discretion by default",
    desc: "Secure transfer, NDA on request, and clear handling for raws—built for personal brands who treat footage like IP.",
  },
  {
    icon: RefreshCw,
    title: "Predictable revisions",
    desc: "Scoped rounds and delivery windows so you’re never guessing when the next cut lands—or what “unlimited” actually means.",
  },
];

export default function BrandTrust() {
  return (
    <section className="relative py-16 px-5 bg-transparent border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-accent-light text-sm font-semibold uppercase tracking-widest mb-3"
        >
          Why protective brands work with PS Edits
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-center text-2xl md:text-3xl font-bold mb-10 max-w-2xl mx-auto"
        >
          Your voice isn’t a mood board—it’s{" "}
          <span className="text-gradient">the product</span>.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent-light" />
              </div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
