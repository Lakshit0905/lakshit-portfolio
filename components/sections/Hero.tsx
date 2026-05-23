"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";

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
      {/* Ambient background */}
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div
        className="ambient-orb"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #6366f1, transparent 70%)",
          top: "-100px",
          right: "-100px",
          animationDelay: "0s",
        }}
      />
      <div
        className="ambient-orb"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          bottom: "10%",
          left: "-80px",
          animationDelay: "3s",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.75fr] lg:px-8">
        <div>
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available for Senior SDET / QE Architect roles
              </span>
            </div>
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5"
          >
            <span className="section-label">Senior SDET · 8 Years · FAANG-Ready</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building quality systems
            <br />
            that ship at <span className="text-gradient">{displayed}</span>
            <span className="typewriter-cursor" />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400"
          >
            I architect test infrastructure for distributed systems at Google-scale. Playwright ·
            Selenium · k6 · AI-powered defect detection. Reduced production incidents by{" "}
            <span className="font-semibold text-zinc-200">73%</span> across 3 orgs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 active:scale-[0.98]"
            >
              View my work
              <ArrowRight size={16} />
            </button>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-[0.98]"
              >
                <Download size={16} />
                Download resume
              </a>
            )}

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { href: siteConfig.github, icon: Github, label: "GitHub" },
                { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: siteConfig.medium, icon: BookOpen, label: "Medium" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-500 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-8"
          >
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-white">
                    {stat.value}
                    <span className="text-xl text-indigo-400">{stat.suffix}</span>
                  </div>
                  <div className="mt-0.5 text-xs text-zinc-500">{stat.label}</div>
                </div>
                {i < siteConfig.stats.length - 1 && (
                  <div className="h-8 w-px bg-white/8" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 border-t border-white/5 pt-10"
          >
            <p className="mb-5 text-xs text-zinc-600 uppercase tracking-widest">Previously at</p>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {siteConfig.previousCompanies.map((company) => (
                <span key={company} className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-400">
                  {company}
                </span>
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
    </section>
  );
}
