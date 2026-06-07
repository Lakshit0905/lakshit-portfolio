"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, BookOpen, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ResumeModal } from "@/components/ui/ResumeModal";

const TYPEWRITER_ROLES = ["scale", "velocity", "confidence", "impact"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % TYPEWRITER_ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080910]" />
      <div className="dot-grid absolute inset-0 opacity-40" />
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.08),transparent)]" />
      <div
        className="ambient-orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(99,102,241,0.5), transparent 70%)",
          top: "-150px",
          right: "-120px",
          animationDelay: "0s",
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(56,189,248,0.4), transparent 70%)",
          bottom: "5%",
          left: "-80px",
          animationDelay: "3s",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.75fr]">
        <div>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5"
          >
            <span className="section-label">Senior SDET | Test Architect | Playwright & TypeScript Specialist</span>
          </motion.div>

          {/* Headline */}
          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building <span className="text-indigo-400">automation frameworks</span> and <span className="text-violet-400">quality systems</span> that <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">ship at scale</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#94a3b8]">
            7+ years of experience building scalable test automation frameworks, CI/CD quality
            gates, API testing solutions, contract testing platforms, and AI-powered QA systems
            for fintech and enterprise SaaS products.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] active:scale-[0.97]"
              style={{ boxShadow: "0 0 0 1px rgba(99,102,241,0.4), 0 4px 14px rgba(79,70,229,0.35)" }}
            >
              View my work
              <ArrowRight size={16} />
            </button>
            <ResumeModal />

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { href: siteConfig.github, icon: Github, label: "GitHub", color: "hover:border-zinc-400/40 hover:bg-zinc-400/10 hover:text-zinc-300", iconColor: "text-zinc-400" },
                { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]", iconColor: "text-[#0A66C2]" },
                { href: siteConfig.medium, icon: BookOpen, label: "Medium", color: "hover:border-green-400/40 hover:bg-green-400/10 hover:text-green-400", iconColor: "text-green-400" },
              ].map(({ href, icon: Icon, label, color, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition-all ${iconColor} ${color}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Availability badge */}
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available for Senior SDET / QE Architect roles
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-2xl shadow-indigo-950/40">
            {siteConfig.photoUrl ? (
              <img
                src={siteConfig.photoUrl}
                alt={`${siteConfig.name} portrait`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-500/20 via-zinc-900 to-cyan-500/10">
                <span className="text-7xl font-bold text-white/85">{siteConfig.initials}</span>
              </div>
            )}
          </div>
          <div className="mx-auto mt-4 h-px w-2/3 bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        </motion.div>
        </div>

        {/* Signature Outcomes — full width row */}
        <div className="mt-20">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-4 py-2">
            <Sparkles size={13} className="text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Signature Outcomes</span>
            <Sparkles size={13} className="text-emerald-400/50" />
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { ...siteConfig.stats[0], accent: "#818cf8", glow: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.18)" },
              { ...siteConfig.stats[1], accent: "#38bdf8", glow: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.18)" },
              { ...siteConfig.stats[2], accent: "#a78bfa", glow: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.18)" },
              { ...siteConfig.stats[3], accent: "#34d399", glow: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.18)" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl px-6 py-8 text-center transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, rgba(13,14,24,0.9) 0%, rgba(13,14,24,0.6) 100%)`,
                  border: `1px solid ${stat.border}`,
                  boxShadow: `0 4px 24px ${stat.glow}, inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                <div className="text-4xl font-bold tracking-tight" style={{ color: stat.accent }}>
                  {stat.value}
                  <span className="text-3xl">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-[#64748b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
