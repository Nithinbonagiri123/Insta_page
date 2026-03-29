"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="glass-strong rounded-2xl p-3">
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold text-base shadow-lg shadow-accent/25 active:scale-[0.98] transition-transform"
            >
              <Sparkles className="w-5 h-5" />
              See Packages — From €150
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
