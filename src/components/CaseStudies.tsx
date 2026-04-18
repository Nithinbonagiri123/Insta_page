"use client";

import { motion } from "framer-motion";
import { TrendingUp, Eye, Users, Heart } from "lucide-react";

const cases = [
  {
    type: "Lifestyle Creator",
    handle: "@teawith_tiaaa",
    result: "From 4K → 61K avg views",
    detail:
      "Switched from self-editing to monthly retainer. Consistent brand palette and hook structure across 3 months compounded reach without a single viral post.",
    before: "4K",
    after: "61K",
    metric: "Avg views per Reel",
    icon: Eye,
    accentStat: "+1,425%",
  },
  {
    type: "Founder / B2B Creator",
    handle: "Tech startup CEO",
    result: "0 → 12K followers in 60 days",
    detail:
      "No prior social presence. Voice-lock briefing + docu-style cuts built trust fast. LinkedIn reposts drove inbound leads without paid ads.",
    before: "0",
    after: "12K",
    metric: "Followers in 60 days",
    icon: Users,
    accentStat: "12K",
  },
  {
    type: "Fitness & Wellness Coach",
    handle: "Health brand",
    result: "34% watch time → 71% watch time",
    detail:
      "Retention-first pacing and pattern-interrupt editing nearly doubled watch time on existing content themes. No new camera gear, same scripts.",
    before: "34%",
    after: "71%",
    metric: "Average watch time",
    icon: TrendingUp,
    accentStat: "+37pts",
  },
  {
    type: "Personal Brand / Luxury",
    handle: "Premium lifestyle creator",
    result: "3× save rate after rebrand edit",
    detail:
      "Cinematic grade + slow-push pacing repositioned the account from mid-market to premium. Brand deal rate increased within 6 weeks.",
    before: "1.2%",
    after: "3.8%",
    metric: "Save rate per post",
    icon: Heart,
    accentStat: "3×",
  },
];

export default function CaseStudies() {
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
            Results
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Real numbers, <span className="text-gradient">real creators</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Not just vibes—specific before/after metrics from actual clients
            across different niches and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 group hover:bg-white/[0.06] transition-colors"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs text-accent-light font-semibold uppercase tracking-wider mb-1">
                    {c.type}
                  </p>
                  <p className="text-zinc-500 text-xs">{c.handle}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <c.icon className="w-5 h-5 text-accent-light" />
                </div>
              </div>

              {/* Big stat */}
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-1">
                {c.accentStat}
              </p>
              <p className="text-white font-semibold mb-3">{c.result}</p>

              {/* Before / after bar */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 bg-white/5 rounded-full px-3 py-1.5 text-center">
                  <p className="text-zinc-500 text-xs">Before</p>
                  <p className="text-zinc-300 text-sm font-bold">{c.before}</p>
                </div>
                <TrendingUp className="w-4 h-4 text-accent-light flex-shrink-0" />
                <div className="flex-1 bg-accent/10 rounded-full px-3 py-1.5 text-center">
                  <p className="text-accent-light text-xs">After</p>
                  <p className="text-white text-sm font-bold">{c.after}</p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 text-center mb-4">
                {c.metric}
              </p>

              {/* Detail */}
              <p className="text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
