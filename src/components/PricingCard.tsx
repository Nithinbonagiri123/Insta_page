"use client";

import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Zap,
  Clock,
  Film,
  Music,
  Palette,
} from "lucide-react";

const features = [
  { icon: Film, text: "5 Professionally Edited Videos" },
  { icon: Music, text: "Custom Sound Design & SFX" },
  { icon: Palette, text: "Color Grading & Motion Graphics" },
  { icon: Clock, text: "48-Hour Turnaround per Video" },
  { icon: Zap, text: "2 Revision Rounds Included" },
];

export default function PricingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-dark via-accent to-accent-light opacity-30 blur-2xl" />

      {/* Card */}
      <div className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden">
        {/* Popular badge */}
        <div className="absolute top-0 right-0">
          <div className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            MOST POPULAR
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-2">
            Starter Package
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-bold text-gradient">
              €150
            </span>
            <span className="text-zinc-500 text-lg">/5 videos</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 bg-green-500/10 text-green-400 text-sm font-medium px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5" />
            Save 20% vs. single videos
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Features */}
        <ul className="space-y-4 mb-10">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-4 h-4 text-accent-light" />
              </div>
              <span className="text-zinc-300 text-sm md:text-base">
                {feature.text}
              </span>
              <Check className="w-4 h-4 text-green-400 ml-auto flex-shrink-0" />
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full text-center py-4 px-8 rounded-2xl bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold text-lg shadow-lg shadow-accent/25 transition-shadow hover:shadow-xl hover:shadow-accent/30"
        >
          Get Started Now
        </motion.a>

        <p className="text-center text-zinc-500 text-xs mt-4">
          No contracts. Pay per package. Cancel anytime.
        </p>
      </div>
    </motion.div>
  );
}
