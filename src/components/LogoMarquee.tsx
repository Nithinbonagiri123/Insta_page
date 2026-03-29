"use client";

const logos = [
  "YouTube",
  "TikTok",
  "Instagram",
  "Twitch",
  "Spotify",
  "Netflix",
  "Adobe",
  "Vimeo",
];

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden py-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="mx-8 flex-shrink-0 glass rounded-xl px-6 py-3 text-zinc-500 font-semibold text-sm tracking-wider uppercase hover:text-accent-light transition-colors"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
