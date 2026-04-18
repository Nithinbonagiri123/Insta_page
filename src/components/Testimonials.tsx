"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates · Lifestyle",
    avatar: "SC",
    text: "Watch time and saves are up materially after we tightened hooks and pacing. The grade finally matches how premium the brand actually is.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    handle: "@marcusfit · Fitness",
    avatar: "MR",
    text: "I was losing half a day to the timeline per drop. Now I film, hand off, and get back cuts that feel native to Shorts and Reels—same voice, less noise.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    handle: "@aishatravel · Travel",
    avatar: "AP",
    text: "The five-pack is structured like a serious ops partner—brief, cut, revision, delivery. Quality I used to chase from bigger shops, without the runway.",
    rating: 5,
  },
  {
    name: "Jake Morrison",
    handle: "@jakethemaker · Maker / edu",
    avatar: "JM",
    text: "Finally an editor who reads retention, not just transitions. Hooks land in the first second; the rest of the reel earns the follow.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent(
        (prev) => (prev + dir + testimonials.length) % testimonials.length
      );
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="glass rounded-3xl p-8 md:p-10 min-h-[280px] flex flex-col justify-between overflow-hidden">
        <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/10" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                )
              )}
            </div>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white text-sm font-bold">
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {testimonials[current].name}
                </p>
                <p className="text-zinc-500 text-xs">
                  {testimonials[current].handle}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
