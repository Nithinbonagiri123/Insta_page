"use client";

/** Platforms / surfaces we optimize cuts for — not implied endorsements. */
const platforms = [
  "Instagram Reels",
  "TikTok",
  "YouTube Shorts",
  "Stories",
  "LinkedIn video",
];

export default function LogoMarquee() {
  const row = [...platforms, ...platforms];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090b] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090b] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="mx-8 flex-shrink-0 glass rounded-xl px-6 py-3 text-zinc-500 font-semibold text-sm tracking-wider uppercase hover:text-accent-light transition-colors"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
