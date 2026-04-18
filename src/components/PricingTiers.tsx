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
  Crown,
  FileText,
  MessageSquare,
  Star,
  Layers,
  Download,
} from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "€150",
    period: "/5 videos",
    description:
      "For consistent drops when you want cinematic polish without building an in-house edit bench.",
    badge: null,
    features: [
      { icon: Film, text: "5 Professionally Edited Videos" },
      { icon: Music, text: "Custom Sound Design & SFX" },
      { icon: Palette, text: "Color Grading & Motion Graphics" },
      { icon: Clock, text: "48-Hour Turnaround per Video" },
      { icon: Zap, text: "2 Revision Rounds Included" },
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€350",
    period: "/10 videos",
    description: "For growing brands that need consistent, high-quality content.",
    badge: "MOST POPULAR",
    features: [
      { icon: Film, text: "10 Professionally Edited Videos" },
      { icon: Music, text: "Custom Sound Design & SFX" },
      { icon: Palette, text: "Color Grading & Motion Graphics" },
      { icon: Clock, text: "24-Hour Priority Turnaround" },
      { icon: Zap, text: "Unlimited Revisions" },
      { icon: FileText, text: "Thumbnail Design (10 Thumbnails)" },
      { icon: MessageSquare, text: "Caption & Script Writing" },
      { icon: Layers, text: "Custom Intros & Outros" },
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "VIP",
    price: "€650",
    period: "/20 videos",
    description:
      "For brands scaling volume while keeping voice, grade, and deadlines under one roof.",
    badge: "BEST VALUE",
    features: [
      { icon: Film, text: "20 Professionally Edited Videos" },
      { icon: Music, text: "Custom Sound Design & SFX" },
      { icon: Palette, text: "Color Grading & Motion Graphics" },
      { icon: Clock, text: "24-Hour Priority Turnaround" },
      { icon: Zap, text: "Unlimited Revisions" },
      { icon: FileText, text: "Thumbnail Design (20 Thumbnails)" },
      { icon: MessageSquare, text: "Caption & Script Writing" },
      { icon: Layers, text: "Custom Intros & Outros" },
      { icon: Star, text: "1:1 Social Media Strategy Call" },
      { icon: Download, text: "Raw Project Files Included" },
    ],
    cta: "Go VIP",
    highlighted: false,
  },
];

export default function PricingTiers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="relative"
        >
          {/* Outer glow for highlighted card */}
          {tier.highlighted && (
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent-dark via-accent to-accent-light opacity-30 blur-2xl" />
          )}

          <div
            className={`relative h-full flex flex-col rounded-3xl p-8 overflow-hidden ${
              tier.highlighted
                ? "glass-strong ring-1 ring-accent/30"
                : "glass"
            }`}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute top-0 right-0">
                <div
                  className={`text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl flex items-center gap-1 ${
                    tier.badge === "MOST POPULAR"
                      ? "bg-accent"
                      : "bg-gradient-to-r from-yellow-500 to-amber-500"
                  }`}
                >
                  {tier.badge === "MOST POPULAR" ? (
                    <Sparkles className="w-3 h-3" />
                  ) : (
                    <Crown className="w-3 h-3" />
                  )}
                  {tier.badge}
                </div>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-2">
                {tier.name}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-gradient">
                  {tier.price}
                </span>
                <span className="text-zinc-500 text-base">{tier.period}</span>
              </div>
              <p className="text-zinc-400 text-sm mt-3">{tier.description}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-3.5 h-3.5 text-accent-light" />
                  </div>
                  <span className="text-zinc-300 text-sm">{feature.text}</span>
                  <Check className="w-4 h-4 text-green-400 ml-auto flex-shrink-0" />
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full text-center py-4 px-8 rounded-2xl font-bold text-lg transition-shadow ${
                tier.highlighted
                  ? "bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
                  : "glass text-white hover:bg-white/10"
              }`}
            >
              {tier.cta}
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
