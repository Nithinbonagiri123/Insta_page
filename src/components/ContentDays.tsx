"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Clapperboard,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const benefits = [
  {
    icon: Camera,
    title: "On-brand capture, zero performance anxiety",
    desc: "Direction and setup so you look like you on your best day—not a generic “shoot day.”",
  },
  {
    icon: Clapperboard,
    title: "Same-day assembly, zero backlog",
    desc: "Momentum beats motivation. Leave with finished cuts, not a hard drive of guilt.",
  },
  {
    icon: Video,
    title: "Native formats, not lazy crops",
    desc: "Hooks and pacing tuned per surface so feeds get what they want without diluting your brand.",
  },
  {
    icon: Clock,
    title: "Cadence you can actually sustain",
    desc: "Enough strong posts to protect reach while you run the business behind the brand.",
  },
  {
    icon: Users,
    title: "Built for personal brands with a POV",
    desc: "We translate your POV into watchable structure—no template-creator energy.",
  },
  {
    icon: Sparkles,
    title: "Shot plan before we roll",
    desc: "Angles, beats, and transitions mapped to trends that fit your niche—not random viral noise.",
  },
];

export default function ContentDays() {
  return (
    <section id="content-days" className="relative py-20 px-5 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Content Days
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-bold"
          >
            One day in.{" "}
            <span className="text-gradient">A month of momentum out.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base md:text-lg"
          >
            A single intensive day built for consistency and compounding: we
            handle capture and cut so you leave with platform-native assets—not
            footage to figure out later. You stay in your zone of genius; we
            protect your voice, visual standard, and posting cadence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 group hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold text-lg shadow-lg shadow-accent/25"
          >
            <Camera className="w-5 h-5" />
            Book a Content Day
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
