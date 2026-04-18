"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const slides = [
  {
    label: "Product Hook Edit",
    sub: "Raw iPhone footage → retention-cut reel",
  },
  {
    label: "Founder Story Cut",
    sub: "Unscripted walkthrough → cinematic docu",
  },
  {
    label: "Lifestyle / Brand Reel",
    sub: "B-roll dump → luxury-paced brand piece",
  },
];

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const move = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
      setPosition(pct);
    },
    []
  );

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    move(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    move(e.clientX);
  };
  const onMouseUp = () => setDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    move(e.touches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    move(e.touches[0].clientX);
  };
  const onTouchEnd = () => setDragging(false);

  return (
    <section className="relative py-20 px-5 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            The transformation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Raw vs <span className="text-gradient">Edited</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Drag the handle to see what retention-first editing actually looks
            like—before and after.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === i
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "glass text-zinc-400 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          ref={containerRef}
          className="relative aspect-video rounded-2xl overflow-hidden cursor-col-resize select-none touch-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* RAW side (full width, shown on right) */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 flex items-center justify-center">
            <div className="text-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6 text-zinc-500 ml-0.5" />
              </div>
              <p className="text-zinc-500 text-sm font-medium">Raw footage</p>
              <p className="text-zinc-600 text-xs mt-1">Ungraded · no music · no pacing</p>
            </div>
          </div>

          {/* EDITED side (clips to left of position) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ width: `${(100 / position) * 100}%`, maxWidth: `${10000 / position}%` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-violet-900/80 via-purple-900/60 to-zinc-900 flex items-center justify-center">
                <div className="text-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3 ring-2 ring-accent/40">
                    <Play className="w-6 h-6 text-accent-light ml-0.5" />
                  </div>
                  <p className="text-white text-sm font-semibold">Edited cut</p>
                  <p className="text-accent-light text-xs mt-1">Graded · scored · retention-paced</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10 pointer-events-none"
            style={{ left: `${position}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center gap-0.5">
              <span className="text-zinc-800 text-xs font-bold">◀▶</span>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
            <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold">
              EDITED
            </span>
          </div>
          <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
            <span className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-zinc-400 text-xs font-semibold">
              RAW
            </span>
          </div>
        </motion.div>

        {/* Slide info */}
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-zinc-500 text-sm mt-4"
        >
          {slides[active].sub}
        </motion.p>
      </div>
    </section>
  );
}
