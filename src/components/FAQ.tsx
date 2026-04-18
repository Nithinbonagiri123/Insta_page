"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What's the turnaround time?",
    a: "Standard edits ship within 48 hours of receiving your footage. Content Day batches (30+ clips) are delivered within 5 business days. Rush slots are available on the Growth and Studio packages.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every package includes structured revision rounds—not vague 'unlimited' promises. Starter gets 1 round, Growth gets 2, and Studio gets 3 plus a dedicated voice-lock pass before the first cut even starts. Scope is defined upfront so there are no surprises.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept everything: iPhone ProRes, Sony/Canon/DJI footage, screen recordings, Zoom calls, and GoPro clips. Upload via our secure transfer link—no Dropbox account required. We deliver in native aspect ratios (9:16, 1:1, 16:9) optimised for each platform.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes. An NDA is available on request for all packages. Discretion is our default—your raw footage and unreleased content are never shared, referenced publicly, or used as portfolio without written permission.",
  },
  {
    q: "How do you learn my voice and style?",
    a: "Before your first cut we run a voice-lock briefing: you send reference reels, tone notes, words you'd never say, and any taboo topics. We map your pacing and personality into every edit. The first revision round is also dedicated to how you sound, not just how it looks.",
  },
  {
    q: "Can I upgrade my package mid-month?",
    a: "Yes. If you shoot more than expected, you can add clips at the per-edit rate for your tier or upgrade to the next package. We'll invoice the difference—no need to restart.",
  },
  {
    q: "What's the payment structure?",
    a: "50% upfront to secure your slot, 50% on delivery. Studio retainer clients are billed monthly at the start of each cycle. We accept bank transfer and major cards.",
  },
  {
    q: "I've never worked with a video editor before—is this complicated?",
    a: "Not at all. You record, we handle everything else. The brief is a short voice note or a few bullet points—no scripts, no shot lists required. Most clients are fully onboarded and receiving their first cut within 24 hours of signing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-5 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Questions <span className="text-gradient">answered</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Everything you need to know before booking. Still have questions?
            DM us on Instagram.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-semibold text-white text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-accent-light" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
