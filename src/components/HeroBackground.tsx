"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* ── Video Background — covers entire page ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ zIndex: 1 }}
      >
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* ── Bokeh fallback (shows if video fails to load) ── */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="bokeh-field absolute inset-0">
          <div className="bokeh-orb bokeh-orb-1" />
          <div className="bokeh-orb bokeh-orb-2" />
          <div className="bokeh-orb bokeh-orb-3" />
          <div className="bokeh-orb bokeh-orb-4" />
          <div className="bokeh-orb bokeh-orb-5" />
          <div className="bokeh-orb bokeh-orb-6" />
          <div className="bokeh-orb bokeh-orb-7" />
        </div>
        <div className="absolute inset-0 silk-ripple opacity-20" />
      </div>

      {/* ── Dark overlay for text readability across all sections ── */}
      <div
        className="absolute inset-0 bg-[#09090b]/60"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(168,85,247,0.1),transparent_55%)]"
        style={{ zIndex: 2 }}
      />
    </div>
  );
}
