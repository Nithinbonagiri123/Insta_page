"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MessageCircle } from "lucide-react";

// Replace with your actual Calendly URL
const CALENDLY_URL = "https://calendly.com/psedits/discovery";

const perks = [
  { icon: Clock, label: "15-minute call" },
  { icon: Calendar, label: "Pick your slot" },
  { icon: MessageCircle, label: "No hard sell" },
];

export default function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="book" className="relative py-20 px-5 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Book a call
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Grab a{" "}
            <span className="text-gradient">discovery slot</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
            Tell us your goals, your deadline, and your current content
            challenges. We&apos;ll tell you exactly what we&apos;d do and what it costs.
          </p>

          {/* Perks */}
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-zinc-400 text-sm">
                <Icon className="w-4 h-4 text-accent-light" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl overflow-hidden relative min-h-[600px] flex flex-col items-center justify-center"
        >
          {/* Loading state */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent/30 border-t-accent animate-spin mx-auto mb-4" />
                <p className="text-zinc-500 text-sm">Loading calendar…</p>
              </div>
            </div>
          )}

          {loaded && (
            <iframe
              ref={iframeRef}
              src={CALENDLY_URL}
              title="Book a discovery call"
              width="100%"
              height="650"
              frameBorder="0"
              className="rounded-3xl"
              onError={() => setLoaded(false)}
            />
          )}

          {/* Fallback if Calendly URL isn't set */}
          {loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm rounded-3xl pointer-events-none opacity-0 peer-[iframe[src='']]:opacity-100">
              <Calendar className="w-12 h-12 text-accent-light mb-4" />
              <p className="text-white font-bold text-lg mb-2">Booking opens soon</p>
              <p className="text-zinc-400 text-sm text-center max-w-xs">
                In the meantime, DM us on Instagram or send an email and we&apos;ll
                find a time that works.
              </p>
            </div>
          )}
        </motion.div>

        {/* Alternative CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-zinc-600 text-sm mt-6"
        >
          Prefer to skip the call?{" "}
          <a
            href="mailto:Poonamyt0821@gmail.com"
            className="text-accent-light hover:text-white transition-colors underline underline-offset-2"
          >
            Email us directly
          </a>{" "}
          with your brief.
        </motion.p>
      </div>
    </section>
  );
}
