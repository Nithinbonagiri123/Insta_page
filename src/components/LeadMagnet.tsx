"use client";

import { motion } from "framer-motion";
import { Map, ListChecks, CalendarDays, Mail } from "lucide-react";

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

const inside = [
  {
    icon: Map,
    title: "9-beat retention map",
    bullets: [
      "Hook types that still earn holds in 2026—by niche, not guesswork.",
      "Where to place the twist, proof, and CTA without sounding salesy.",
    ],
  },
  {
    icon: ListChecks,
    title: "Voice & POV audit",
    bullets: [
      "A checklist for tone, taboo topics, and “sounds like me” QA.",
      "What to hand an editor so the first cut lands closer to final.",
    ],
  },
  {
    icon: CalendarDays,
    title: "Content Day + cadence",
    bullets: [
      "Shot angles that yield 30+ usable clips in one intensive day.",
      "3 / 5 / 7-day posting rhythms for founders who can’t live in the app.",
    ],
  },
];

const mailHref =
  "mailto:Poonamyt0821@gmail.com?subject=" +
  encodeURIComponent("2026 Reel Retention Map — PS Edits") +
  "&body=" +
  encodeURIComponent(
    "Hi PS Edits,\n\nPlease send the 2026 Reel Retention Map.\n\n— "
  );

export default function LeadMagnet() {
  return (
    <section
      id="retention-map"
      className="relative py-20 px-5 bg-transparent scroll-mt-24"
    >
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
            Free resource
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-bold"
          >
            The 2026 Reel{" "}
            <span className="text-gradient">Retention Map</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base md:text-lg"
          >
            The nine-beat structure top personal brands use to lift average
            watch time—without diluting voice. Stop posting harder; post with a
            system.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {inside.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-8 text-left hover:bg-white/[0.06] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <block.icon className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{block.title}</h3>
              <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                {block.bullets.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-accent-light shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent-light" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={mailHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold text-lg shadow-lg shadow-accent/25 min-h-[56px]"
          >
            <Mail className="w-5 h-5" />
            Email me the map
          </motion.a>
          <p className="text-zinc-600 text-xs mt-4 max-w-md mx-auto">
            We’ll reply from Poonamyt0821@gmail.com with the PDF. No fluff—just the
            map and how to use it on your next batch of Reels.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
