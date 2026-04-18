"use client";

import { motion } from "framer-motion";
import { Play, Heart, Eye, ExternalLink } from "lucide-react";

const posts = [
  { views: "61K", likes: "2.4K", type: "reel", hue: "from-violet-900/60 to-purple-800/40" },
  { views: "38K", likes: "1.8K", type: "reel", hue: "from-purple-900/60 to-indigo-800/40" },
  { views: "92K", likes: "4.1K", type: "reel", hue: "from-fuchsia-900/60 to-violet-800/40" },
  { views: "24K", likes: "1.1K", type: "reel", hue: "from-indigo-900/60 to-purple-800/40" },
  { views: "55K", likes: "3.2K", type: "reel", hue: "from-violet-800/60 to-fuchsia-900/40" },
  { views: "47K", likes: "2.9K", type: "reel", hue: "from-purple-800/60 to-violet-900/40" },
];

export default function InstagramFeed() {
  return (
    <section className="relative py-20 px-5 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Live work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Follow the <span className="text-gradient">feed</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Recent reels we&apos;ve cut—live on Instagram. Every post is a retention
            test in the wild.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/teawith_tiaaa"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className={`group relative aspect-[9/16] sm:aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${post.hue} cursor-pointer`}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </div>
              </div>

              {/* Reel tag */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider">
                  Reel
                </span>
              </div>

              {/* Stats bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                <div className="flex items-center gap-3 text-white text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {post.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5" />
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://instagram.com/teawith_tiaaa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-accent-light" />
            View full feed on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
