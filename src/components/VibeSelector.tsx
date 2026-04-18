"use client";

import { motion } from "framer-motion";
import { Zap, Gem, Clapperboard } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const vibes = [
  {
    icon: Zap,
    name: "The Hormozi — High energy",
    feel: "Urgent, punchy, pay attention now.",
    visual: "Hard cuts, bold supers, high contrast, pattern interrupts every 1–2s.",
    sound: "Driving beat, sting-heavy transitions, sidechain-friendly mix.",
    text: "Short, contrarian, number-led hooks.",
    bestFor: "Offers, frameworks, hot takes, monetization-adjacent creators.",
    promise: "Stops the scroll in the first line—built for saves and shares.",
  },
  {
    icon: Gem,
    name: "Minimalist luxury",
    feel: "Calm confidence, expensive restraint.",
    visual: "Negative space, slow push-ins, subtle grain, restrained grade.",
    sound: "Ambient bed, minimal SFX—voice leads the story.",
    text: "Sparse type; one idea per beat.",
    bestFor: "Personal brands, coaches, fashion, premium services.",
    promise: "Reads high-ticket without shouting—authority through taste.",
  },
  {
    icon: Clapperboard,
    name: "Documentary storyteller",
    feel: "Intimate, human—you're letting them in.",
    visual: "Natural light, vérité B-roll, J/L cuts, handheld warmth.",
    sound: "Room tone, light swells, emotional pacing.",
    text: "Longer on-screen beats; chapter-like structure.",
    bestFor: "Day-in-the-life, founder story, transformation arcs.",
    promise: "Builds parasocial trust—people stay for the person.",
  },
];

export default function VibeSelector() {
  return (
    <section id="vibes" className="relative py-20 px-5 bg-transparent">
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
            Editing aesthetics
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-bold"
          >
            Choose the vibe.{" "}
            <span className="text-gradient">We engineer retention.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base md:text-lg"
          >
            Same story, three authority signals—pick what your audience should
            feel in the first second. We match pacing, grade, and type to the
            feed—not generic templates.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {vibes.map((v, i) => (
            <motion.article
              key={v.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 flex flex-col h-full hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-lg font-bold mb-2">{v.name}</h3>
              <p className="text-zinc-400 text-sm italic mb-4 border-l-2 border-accent/40 pl-3">
                {v.feel}
              </p>
              <dl className="space-y-3 text-sm text-zinc-300 flex-1">
                <div>
                  <dt className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">
                    Visual
                  </dt>
                  <dd>{v.visual}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">
                    Sound
                  </dt>
                  <dd>{v.sound}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">
                    On-screen text
                  </dt>
                  <dd>{v.text}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 text-xs uppercase tracking-wider mb-0.5">
                    Best for
                  </dt>
                  <dd>{v.bestFor}</dd>
                </div>
              </dl>
              <p className="mt-6 pt-4 border-t border-white/10 text-accent-light text-sm font-semibold leading-snug">
                {v.promise}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 text-sm mt-10"
        >
          Onboarding ask: which vibe is closest to your brand? We calibrate the
          cut in the first briefing—not after round three.
        </motion.p>
      </div>
    </section>
  );
}
