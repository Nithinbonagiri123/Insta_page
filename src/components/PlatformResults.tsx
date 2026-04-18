"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const platforms = [
  {
    name: "Instagram Reels",
    icon: "📸",
    color: "from-pink-500/20 to-fuchsia-600/10",
    border: "border-pink-500/20",
    accent: "text-pink-400",
    stats: [
      { label: "Avg views / reel", value: "38K–92K" },
      { label: "Watch time (retained)", value: "68%" },
      { label: "Save rate", value: "3.8%" },
      { label: "Share rate", value: "2.1%" },
    ],
    note: "Hook-optimised first 3s · native 9:16 delivery",
  },
  {
    name: "TikTok",
    icon: "🎵",
    color: "from-cyan-500/20 to-sky-600/10",
    border: "border-cyan-500/20",
    accent: "text-cyan-400",
    stats: [
      { label: "Avg views / video", value: "55K–140K" },
      { label: "Completion rate", value: "74%" },
      { label: "Profile visits from video", value: "4.2%" },
      { label: "Follower conversion", value: "1.9%" },
    ],
    note: "Pattern-break pacing · trending SFX layer",
  },
  {
    name: "YouTube Shorts",
    icon: "▶️",
    color: "from-red-500/20 to-rose-600/10",
    border: "border-red-500/20",
    accent: "text-red-400",
    stats: [
      { label: "Avg views / Short", value: "22K–67K" },
      { label: "Subscriber conversion", value: "0.8%" },
      { label: "Long-form click-through", value: "3.4%" },
      { label: "Watch time (retained)", value: "71%" },
    ],
    note: "Shorts → long-form bridge · edu-format hooks",
  },
  {
    name: "LinkedIn Video",
    icon: "💼",
    color: "from-blue-500/20 to-indigo-600/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
    stats: [
      { label: "Avg impressions / post", value: "12K–40K" },
      { label: "Comment rate", value: "2.8%" },
      { label: "Connection requests / video", value: "+34" },
      { label: "Inbound DM rate", value: "1.6%" },
    ],
    note: "Docu-style trust build · caption-led storytelling",
  },
];

export default function PlatformResults() {
  return (
    <section className="relative py-20 px-5 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Platform breakdown
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What the{" "}
            <span className="text-gradient">numbers look like</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Typical performance ranges across client accounts by platform—based
            on retention-first editing vs. unoptimised content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-7 border ${p.border} group hover:bg-white/[0.04] transition-colors`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{p.name}</h3>
                  <p className="text-zinc-500 text-xs mt-0.5">{p.note}</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {p.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/[0.03] rounded-xl px-4 py-3"
                  >
                    <p className={`text-lg font-bold ${p.accent}`}>
                      {stat.value}
                    </p>
                    <p className="text-zinc-500 text-xs mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trending indicator */}
              <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/5">
                <TrendingUp className={`w-3.5 h-3.5 ${p.accent}`} />
                <p className="text-zinc-500 text-xs">
                  Figures reflect 90-day averages across active PS Edits clients
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
