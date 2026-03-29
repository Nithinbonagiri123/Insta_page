"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    avatar: "SC",
    text: "My engagement literally doubled after switching to these edits. The transitions and color grading are *chef's kiss*. Worth every single cent.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    handle: "@marcusfit",
    avatar: "MR",
    text: "I was spending 8 hours editing each video myself. Now I just film, send, and get back cinematic content in 2 days. Game changer for my fitness brand.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    handle: "@aishatravel",
    avatar: "AP",
    text: "The quality you get for €150 for FIVE videos is insane. I've paid triple this for a single video from agencies. This is my secret weapon.",
    rating: 5,
  },
  {
    name: "Jake Morrison",
    handle: "@jakethemaker",
    avatar: "JM",
    text: "Finally found an editor who actually understands the YouTube/TikTok aesthetic. The pacing, the hooks, the energy — everything is dialed in perfectly.",
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
            {/* Stars */}
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

            {/* Quote */}
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            {/* Author */}
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

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => paginate(-1)}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
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
