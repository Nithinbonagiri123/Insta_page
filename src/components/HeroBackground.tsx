"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Respect reduced motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* ── Layer 1: Video (swap src when your AI-generated clip is ready) ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlayThrough={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
          videoLoaded ? "opacity-30" : "opacity-0"
        }`}
        poster="/hero-poster.webp"
      >
        {/* Place your AI-generated video in /public/hero-reel.mp4 */}
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 2: CSS-only animated fallback (shows while video loads, or if no video) ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Bokeh spheres — pearlescent floating orbs with shallow DOF blur */}
        <div className="bokeh-field absolute inset-0">
          <div className="bokeh-orb bokeh-orb-1" />
          <div className="bokeh-orb bokeh-orb-2" />
          <div className="bokeh-orb bokeh-orb-3" />
          <div className="bokeh-orb bokeh-orb-4" />
          <div className="bokeh-orb bokeh-orb-5" />
          <div className="bokeh-orb bokeh-orb-6" />
          <div className="bokeh-orb bokeh-orb-7" />
        </div>

        {/* Silk ripple overlay */}
        <div className="absolute inset-0 silk-ripple opacity-20" />
      </div>

      {/* ── Layer 3: Gradient overlays for depth & text contrast ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 via-[#09090b]/70 to-[#09090b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(168,85,247,0.12),transparent_55%)]" />

      {/* ── Layer 4: Subtle noise texture for cinematic grain ── */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-40" />
    </div>
  );
}
