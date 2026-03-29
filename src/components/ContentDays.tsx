"use client";

import { motion } from "framer-motion";
import { Camera, Video, Clapperboard, Clock, Sparkles, Users } from "lucide-react";

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
    title: "Professional Shooting",
    desc: "We come to you with pro gear — lighting, audio, and cameras. You just show up and be yourself.",
  },
  {
    icon: Clapperboard,
    title: "Same-Day Editing",
    desc: "Your footage gets edited on the spot. Walk away with ready-to-post content by end of day.",
  },
  {
    icon: Video,
    title: "Multi-Platform Content",
    desc: "Reels, TikToks, YouTube Shorts, Stories — we shoot and format for every platform you need.",
  },
  {
    icon: Clock,
    title: "One Day, One Month of Content",
    desc: "A single Content Day gives you enough scroll-stopping content to fill your feed for weeks.",
  },
  {
    icon: Users,
    title: "For Any Brand",
    desc: "Whether you're a startup, influencer, creator, or established business — we tailor the day to you.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction Included",
    desc: "Not sure what to film? We plan the concepts, shots, and transitions before the day begins.",
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
            One Day. <span className="text-gradient">Endless Content.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base md:text-lg"
          >
            We show up, shoot, and edit — all in one day. You walk away with a
            month&apos;s worth of professional content ready to post.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
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

        {/* CTA */}
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
            Book Your Content Day
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
