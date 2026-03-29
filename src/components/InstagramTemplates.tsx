"use client";

import { motion } from "framer-motion";
import { AtSign, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

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

const templates = [
  {
    label: "The Permission Slip",
    handle: "@yourbrand",
    caption: `You didn't start your business to spend Sunday nights planning Reels.

You started it because you had a vision. A product people need. A service that changes lives.

So why are you spending 6 hours a week staring at a caption cursor?

Here's your permission slip to hand it over. We'll make your brand impossible to scroll past — while you get back to actually running it.`,
    likes: "1,247",
    comments: "83",
  },
  {
    label: "The Hot Take",
    handle: "@yourbrand",
    caption: `Unpopular opinion: You don't have a content problem. You have a time problem.

Your brand is stunning. Your product speaks for itself. But between supplier calls, invoices, and life — content falls to the bottom of the list.

That's not a failure. That's called being a business owner.

What if one single day gave you a month's worth of scroll-stopping content? That's literally what we do.`,
    likes: "2,103",
    comments: "156",
  },
  {
    label: "The Transformation",
    handle: "@yourbrand",
    caption: `"I used to dread opening Instagram. Now my DMs are full of enquiries."

That's what happens when your content finally matches the quality of your business.

No more blurry phone photos. No more "what do I even post?" No more algorithm anxiety.

Just high-quality, strategic content — created in ONE day, designed to convert for weeks.`,
    likes: "1,891",
    comments: "124",
  },
];

export default function InstagramTemplates() {
  return (
    <section id="templates" className="relative py-20 px-5 bg-transparent">
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
            Free Resource
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-5xl font-bold"
          >
            Caption Templates That{" "}
            <span className="text-gradient">Convert</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-zinc-300 mt-4 max-w-2xl mx-auto text-base md:text-lg"
          >
            Steal these scroll-stopping Instagram caption frameworks. Proven to
            engage, connect, and convert your audience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass rounded-2xl overflow-hidden group hover:bg-white/[0.06] transition-colors"
            >
              {/* Mock Instagram Header */}
              <div className="flex items-center gap-3 p-4 border-b border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                  <AtSign className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">
                    {template.handle}
                  </p>
                  <p className="text-accent-light text-[10px] font-medium uppercase tracking-wider">
                    {template.label}
                  </p>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line line-clamp-[12]">
                  {template.caption}
                </p>
              </div>

              {/* Mock Instagram Footer */}
              <div className="px-4 pb-4 pt-2 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{template.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs">{template.comments}</span>
                    </div>
                    <Send className="w-4 h-4 text-zinc-400" />
                  </div>
                  <Bookmark className="w-4 h-4 text-zinc-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
