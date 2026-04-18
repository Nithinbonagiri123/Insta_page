"use client";

import { motion } from "framer-motion";
import {
  Play,
  ArrowDown,
  Camera,
  Video,
  Globe,
  Sparkles,
  Wand2,
  Film,
  Send,
  MessageCircle,
  Mail,
} from "lucide-react";
import PricingTiers from "@/components/PricingTiers";
import Testimonials from "@/components/Testimonials";
import LogoMarquee from "@/components/LogoMarquee";
import StickyCTA from "@/components/StickyCTA";
import ContentDays from "@/components/ContentDays";
import LeadMagnet from "@/components/LeadMagnet";
import VibeSelector from "@/components/VibeSelector";
import BrandTrust from "@/components/BrandTrust";
import HeroBackground from "@/components/HeroBackground";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQ from "@/components/FAQ";
import ComparisonTable from "@/components/ComparisonTable";
import CaseStudies from "@/components/CaseStudies";
import InstagramFeed from "@/components/InstagramFeed";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import PlatformResults from "@/components/PlatformResults";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stats = [
  { value: "500+", label: "Videos delivered" },
  { value: "48h", label: "Median turnaround" },
  { value: "Voice-first", label: "Briefing workflow" },
];

const process = [
  {
    icon: Send,
    title: "Brief & upload",
    desc: "Voice notes, reference reels, and raws via a secure link—so the first cut sounds like you.",
  },
  {
    icon: Wand2,
    title: "Cut, grade, motion",
    desc: "Retention-first pacing, cinematic grade, SFX, and supers—scoped to your package and deadline.",
  },
  {
    icon: Film,
    title: "Revise & deliver",
    desc: "Structured revision rounds, then delivery in native aspect ratios—ready to schedule, not re-edit.",
  },
];

const portfolioPieces = [
  { title: "Product launch / hook test", subtitle: "3 hooks · one offer" },
  { title: "Founder story / docu cut", subtitle: "Long hold · trust build" },
  { title: "Personal brand / luxury pace", subtitle: "Slow push · voice-led" },
  { title: "Evergreen edu / Shorts", subtitle: "Pattern break · clarity" },
  { title: "Event day / same-day turnaround", subtitle: "Momentum content" },
  { title: "Content Day batch", subtitle: "30+ clips · multi-platform" },
];

export default function Home() {
  return (
    <main className="relative z-10 overflow-hidden text-white">
      {/* ───────── FIXED FULL-PAGE VIDEO BACKGROUND ───────── */}
      <HeroBackground />

      <StickyCTA />

      {/* ───────── HERO ───────── */}
      <section className="relative min-h-screen flex items-center justify-center px-5">

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 glass-premium rounded-full px-4 py-2 text-sm text-zinc-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for new projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              Reels that hold attention.
              <br />
              <span className="text-gradient">Feeds that compound.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1.5}
              className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto -mt-2 text-balance font-medium"
            >
              Cinematic editing + Content Days for creators who treat content
              like an asset—not a chore.
            </motion.p>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto text-balance"
            >
              Stop trading your calendar for the algorithm. PS Edits turns raw
              footage into retention-first cuts—paced for watch time, styled
              for authority, and delivered on a timeline that respects how you
              work.{" "}
              <span className="text-white font-semibold block sm:inline mt-2 sm:mt-0">
                From €150 / 5 edits—ship a week of high-trust posts without a
                full-time editor.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold text-lg shadow-lg shadow-accent/25 min-h-[56px]"
              >
                <Sparkles className="w-5 h-5" />
                View packages
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold text-lg min-h-[56px] hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5" />
                See the work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex items-center justify-center gap-8 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-zinc-500 text-xs md:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-zinc-600" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───────── AS SEEN ON ───────── */}
      <section className="relative py-16 bg-transparent">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-xs uppercase tracking-[0.3em] mb-6"
        >
          Native formats we cut for
        </motion.p>
        <LogoMarquee />
      </section>

      {/* ───────── PORTFOLIO / WORK ───────── */}
      <section id="work" className="relative py-20 px-5 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold"
            >
              Recent <span className="text-gradient">Work</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioPieces.map((piece, idx) => (
              <motion.div
                key={piece.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 1) * 0.08 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative aspect-[9/16] sm:aspect-video rounded-2xl overflow-hidden glass cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/30 group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white leading-tight">
                    {piece.title}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">{piece.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section className="relative py-20 px-5 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold"
            >
              How It <span className="text-gradient">Works</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass rounded-2xl p-8 text-center group hover:bg-white/[0.06] transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-6 h-6 text-accent-light" />
                </div>
                <p className="text-xs text-accent-light font-bold mb-2">
                  STEP {i + 1}
                </p>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BrandTrust />

      {/* ───────── BEFORE / AFTER SLIDER ───────── */}
      <BeforeAfterSlider />

      {/* ───────── CASE STUDIES ───────── */}
      <CaseStudies />

      {/* ───────── PLATFORM RESULTS ───────── */}
      <PlatformResults />

      {/* ───────── CONTENT DAYS ───────── */}
      <ContentDays />

      <VibeSelector />

      {/* ───────── COMPARISON TABLE ───────── */}
      <ComparisonTable />

      {/* ───────── PRICING ───────── */}
      <section id="pricing" className="relative py-20 px-5 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Pricing
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold"
            >
              Pick Your <span className="text-gradient">Package</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-zinc-300 mt-4 max-w-lg mx-auto"
            >
              Transparent scopes and delivery windows—so you know what ships,
              when, and how revisions work before you book.
            </motion.p>
          </motion.div>

          <PricingTiers />
        </div>
      </section>

      <LeadMagnet />

      {/* ───────── INSTAGRAM FEED ───────── */}
      <InstagramFeed />

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="relative py-20 px-5 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl md:text-5xl font-bold"
            >
              Client <span className="text-gradient">results</span>
            </motion.h2>
          </motion.div>

          <Testimonials />
        </div>
      </section>

      {/* ───────── CALENDLY BOOKING ───────── */}
      <CalendlyEmbed />

      {/* ───────── FAQ ───────── */}
      <FAQ />

      {/* ───────── CONTACT / CTA ───────── */}
      <section id="contact" className="relative py-20 px-5 bg-transparent">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-dark/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <MessageCircle className="w-10 h-10 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Ready to <span className="text-gradient">compound</span>?
              </h2>
              <p className="text-zinc-300 mb-8 max-w-md mx-auto">
                Tell us your next drop, your voice constraints, and your
                deadline—we&apos;ll reply with a clear scope and start date.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="https://instagram.com/teawith_tiaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white font-bold text-lg min-h-[56px] shadow-lg shadow-accent/25"
                >
                  <Camera className="w-5 h-5" />
                  DM on Instagram
                </motion.a>
                <motion.a
                  href="mailto:Poonamyt0821@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass text-white font-semibold text-lg min-h-[56px] hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="relative py-10 px-5 border-t border-white/5 bg-transparent">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; 2026 PS Edits. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Camera, Video, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-zinc-500 hover:text-accent-light hover:bg-white/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
