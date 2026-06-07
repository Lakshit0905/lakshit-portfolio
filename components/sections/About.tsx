"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Zap, Shield, GitBranch, TestTube, ShieldCheck, Database } from "lucide-react";
import {
  SiTypescript, SiSelenium, SiPython, SiGithubactions,
  SiDocker, SiJenkins, SiPostman, SiApachejmeter, SiAppium,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ANIMATION_VARIANTS } from "@/lib/utils";

function PlaywrightIcon({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.85" />
      <circle cx="22" cy="22" r="8" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function PactIcon({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const quickFacts = [
  { icon: MapPin, text: "Dallas, TX", color: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: Briefcase, text: "Open to remote · hybrid · on-site", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: GraduationCap, text: "MS, IT & Management — UT Dallas · 2022", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: GraduationCap, text: "BE, Electronics & Instrumentation — VTU · 2015", color: "text-violet-400", bg: "bg-violet-500/10" },
];

const strengths = [
  { icon: Zap, label: "Fast feedback loops", desc: "Sub-1hr regression suites in CI", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Shield, label: "Shift-left quality", desc: "Catching bugs before they ship", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: GitBranch, label: "CI/CD integration", desc: "GitHub Actions, Docker, Jenkins", color: "text-sky-400", bg: "bg-sky-500/10" },
  { icon: TestTube, label: "Full-stack testing", desc: "UI · API · contract · performance", color: "text-indigo-400", bg: "bg-indigo-500/10" },
];

const coreTechnologies = [
  { name: "Playwright",     icon: PlaywrightIcon, text: "text-violet-400",  border: "border-violet-500/25",  bg: "bg-violet-500/10",  hover: "hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-violet-300" },
  { name: "TypeScript",     icon: SiTypescript,   text: "text-sky-400",     border: "border-sky-500/25",     bg: "bg-sky-500/10",     hover: "hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-sky-300" },
  { name: "Selenium",       icon: SiSelenium,     text: "text-amber-400",   border: "border-amber-500/25",   bg: "bg-amber-500/10",   hover: "hover:border-amber-400/50 hover:bg-amber-500/20 hover:text-amber-300" },
  { name: "Python",         icon: SiPython,       text: "text-sky-400",     border: "border-sky-500/25",     bg: "bg-sky-500/10",     hover: "hover:border-sky-400/50 hover:bg-sky-500/20 hover:text-sky-300" },
  { name: "GitHub Actions", icon: SiGithubactions,text: "text-zinc-300",    border: "border-zinc-500/25",    bg: "bg-zinc-500/10",    hover: "hover:border-zinc-400/50 hover:bg-zinc-500/20 hover:text-white" },
  { name: "Docker",         icon: SiDocker,       text: "text-cyan-400",    border: "border-cyan-500/25",    bg: "bg-cyan-500/10",    hover: "hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-300" },
  { name: "AWS",            icon: FaAws,          text: "text-orange-400",  border: "border-orange-500/25",  bg: "bg-orange-500/10",  hover: "hover:border-orange-400/50 hover:bg-orange-500/20 hover:text-orange-300" },
  { name: "Jenkins",        icon: SiJenkins,      text: "text-rose-400",    border: "border-rose-500/25",    bg: "bg-rose-500/10",    hover: "hover:border-rose-400/50 hover:bg-rose-500/20 hover:text-rose-300" },
  { name: "REST Assured",   icon: ShieldCheck,    text: "text-emerald-400", border: "border-emerald-500/25", bg: "bg-emerald-500/10", hover: "hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:text-emerald-300" },
  { name: "Pact",           icon: PactIcon,       text: "text-indigo-400",  border: "border-indigo-500/25",  bg: "bg-indigo-500/10",  hover: "hover:border-indigo-400/50 hover:bg-indigo-500/20 hover:text-indigo-300" },
  { name: "Postman",        icon: SiPostman,      text: "text-orange-400",  border: "border-orange-500/25",  bg: "bg-orange-500/10",  hover: "hover:border-orange-400/50 hover:bg-orange-500/20 hover:text-orange-300" },
  { name: "SQL",            icon: Database,       text: "text-teal-400",    border: "border-teal-500/25",    bg: "bg-teal-500/10",    hover: "hover:border-teal-400/50 hover:bg-teal-500/20 hover:text-teal-300" },
  { name: "JMeter",         icon: SiApachejmeter, text: "text-rose-400",    border: "border-rose-500/25",    bg: "bg-rose-500/10",    hover: "hover:border-rose-400/50 hover:bg-rose-500/20 hover:text-rose-300" },
  { name: "Appium",         icon: SiAppium,       text: "text-violet-400",  border: "border-violet-500/25",  bg: "bg-violet-500/10",  hover: "hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-violet-300" },
];


export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About me"
          title="I build automation systems"
          titleHighlight="that make releases safer"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            <div>
              <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-3 text-base leading-relaxed text-zinc-400">
                I am a Senior SDET with <span className="text-white font-medium">7+ years</span> of experience across fintech, enterprise SaaS,
                mortgage platforms, and data-driven applications. I focus on building practical
                automation frameworks that help teams release faster with fewer surprises.
              </motion.p>
              <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-3 text-base leading-relaxed text-zinc-400">
                My recent work includes <span className="text-indigo-400 font-medium">Playwright + TypeScript</span> UI/API automation, GitHub Actions
                pipelines, Dockerized test execution, API validation, Pact contract testing, SQL
                checks, and Allure reporting. I care about stable locators, isolated test data,
                clear defect signals, and automation that developers actually trust.
              </motion.p>
              <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="text-base leading-relaxed text-zinc-400">
                Worked with <span className="text-white font-medium">SilverXis, ServiceLink, and Accenture</span> — hands-on across
                Playwright, Selenium, Pytest, Appium, Postman, REST Assured, JMeter, AWS, Docker,
                Jenkins, and modern CI/CD quality gates.
              </motion.p>
            </div>

            {/* Core Technologies */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
            >
              <div className="grid grid-cols-3 gap-2">
                {coreTechnologies.map(({ name, icon: Icon, text, border, bg, hover }) => (
                  <div
                    key={name}
                    className={`flex cursor-default items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-medium transition-all duration-200 ${text} ${border} ${bg} ${hover}`}
                  >
                    <Icon size={12} />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Quick facts */}
            <motion.div
              variants={ANIMATION_VARIANTS.scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">Quick facts</h3>
              <div className="flex flex-col gap-3">
                {quickFacts.map(({ icon: Icon, text, color, bg }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${bg}`}>
                      <Icon size={15} className={color} />
                    </div>
                    <span className="text-sm text-zinc-300">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              variants={ANIMATION_VARIANTS.scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-zinc-500">What I bring</h3>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map(({ icon: Icon, label, desc, color, bg }) => (
                  <div key={label} className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${bg}`}>
                      <Icon size={14} className={color} />
                    </div>
                    <p className="text-xs font-semibold text-white">{label}</p>
                    <p className="text-xs text-zinc-500">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
