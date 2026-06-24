"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Zap, Target, Link2, BarChart2, Clock,
  Layers, Shield, Database, TestTube, Package, Coffee,
} from "lucide-react";
import {
  SiTypescript, SiSelenium, SiPytest, SiAppium,
  SiGithubactions, SiDocker, SiJenkins, SiApachejmeter,
  SiPostgresql, SiJira, SiPython, SiPostman, SiCucumber,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experience";
import { ANIMATION_VARIANTS } from "@/lib/utils";
import type { ComponentType } from "react";

type IconComp = ComponentType<{ size?: number; className?: string }>;

const PlaywrightIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="7" cy="12" r="3.5" />
    <circle cx="17" cy="8" r="3.5" />
    <circle cx="17" cy="16" r="3.5" />
  </svg>
);

const PactIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M9 7h6M9 11h6M9 15h4" />
  </svg>
);

type Theme = {
  accent: string; border: string; hoverBorder: string;
  dotColor: string; dotGlow: string;
  badgeText: string; badgeBg: string; badgeBorder: string;
  streak: string; glow: string; bulletBg: string;
};

const themes: Record<string, Theme> = {
  "silverxis-current": {
    accent: "text-violet-400", border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/40",
    dotColor: "#8b5cf6", dotGlow: "0 0 0 3px rgba(139,92,246,0.25)",
    badgeText: "text-violet-300", badgeBg: "bg-violet-500/15", badgeBorder: "border-violet-500/30",
    streak: "from-violet-500 to-indigo-500", glow: "hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.3)]",
    bulletBg: "bg-violet-400",
  },
  "servicelink": {
    accent: "text-sky-400", border: "border-sky-500/20", hoverBorder: "hover:border-sky-400/40",
    dotColor: "#38bdf8", dotGlow: "0 0 0 3px rgba(56,189,248,0.2)",
    badgeText: "text-sky-300", badgeBg: "bg-sky-500/15", badgeBorder: "border-sky-500/30",
    streak: "from-sky-500 to-cyan-500", glow: "hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.25)]",
    bulletBg: "bg-sky-400",
  },
  "silverxis-previous": {
    accent: "text-indigo-400", border: "border-indigo-500/20", hoverBorder: "hover:border-indigo-400/40",
    dotColor: "#6366f1", dotGlow: "0 0 0 3px rgba(99,102,241,0.2)",
    badgeText: "text-indigo-300", badgeBg: "bg-indigo-500/15", badgeBorder: "border-indigo-500/30",
    streak: "from-indigo-500 to-violet-500", glow: "hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.25)]",
    bulletBg: "bg-indigo-400",
  },
  "accenture": {
    accent: "text-emerald-400", border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-400/40",
    dotColor: "#34d399", dotGlow: "0 0 0 3px rgba(52,211,153,0.2)",
    badgeText: "text-emerald-300", badgeBg: "bg-emerald-500/15", badgeBorder: "border-emerald-500/30",
    streak: "from-emerald-500 to-teal-500", glow: "hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.25)]",
    bulletBg: "bg-emerald-400",
  },
};

type Metric = { icon: IconComp; value: string; label: string; color: string; bg: string; border: string };

const roleMetrics: Record<string, Metric[]> = {
  "silverxis-current": [
    { icon: Zap,      value: "500+",     label: "Regression Cases",    color: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    { icon: Clock,    value: "3.5h→<1h", label: "Regression Runtime",  color: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20" },
    { icon: Target,   value: "12%→<4%",  label: "Flaky Test Rate",     color: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    { icon: Link2,    value: "200+",     label: "APIs Tested",         color: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/20" },
  ],
  "servicelink": [
    { icon: Zap,      value: "40+",  label: "Regression Scenarios", color: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20" },
    { icon: BarChart2,value: "60%",  label: "Manual QA Reduced",    color: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    { icon: Link2,    value: "50+",  label: "APIs Automated",       color: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    { icon: Target,   value: "55%",  label: "API Effort Saved",     color: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/20" },
  ],
  "silverxis-previous": [
    { icon: Zap,      value: "120+",  label: "Regression Cases",        color: "text-indigo-300",bg: "bg-indigo-500/10",border: "border-indigo-500/20" },
    { icon: BarChart2,value: "45%",   label: "Manual Testing Reduced",  color: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    { icon: Layers,   value: "60%",   label: "Mobile Coverage ↑",       color: "text-sky-300",   bg: "bg-sky-500/10",   border: "border-sky-500/20" },
    { icon: Target,   value: "5,000", label: "Concurrent Users Tested", color: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  ],
  "accenture": [
    { icon: Zap,      value: "500+",   label: "Test Cases Automated",  color: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    { icon: Clock,    value: "2 days", label: "Testing Cycle Reduced", color: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20" },
    { icon: Database, value: "50+",    label: "SQL Queries Automated", color: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    { icon: Shield,   value: "95%",    label: "On-Time Release Rate",  color: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/20" },
  ],
};

type Skill = { name: string; Icon: IconComp; text: string; bg: string; border: string };
type SkillGroup = { label: string; skills: Skill[] };

const roleSkillGroups: Record<string, SkillGroup[]> = {
  "silverxis-current": [
    { label: "UI Automation", skills: [
      { name: "Playwright",     Icon: PlaywrightIcon, text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
      { name: "TypeScript",     Icon: SiTypescript,   text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20" },
    ]},
    { label: "API & Contract", skills: [
      { name: "Playwright API", Icon: PlaywrightIcon, text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
      { name: "Pact",           Icon: PactIcon,       text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    ]},
    { label: "CI/CD & DevOps", skills: [
      { name: "GitHub Actions", Icon: SiGithubactions, text: "text-zinc-200",   bg: "bg-zinc-500/10",   border: "border-zinc-500/20" },
      { name: "Docker",         Icon: SiDocker,        text: "text-cyan-300",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
      { name: "AWS EC2",        Icon: FaAws,           text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    ]},
    { label: "Reporting", skills: [
      { name: "Allure",         Icon: BarChart2,    text: "text-rose-300",  bg: "bg-rose-500/10",  border: "border-rose-500/20" },
      { name: "SQL",            Icon: SiPostgresql, text: "text-teal-300",  bg: "bg-teal-500/10",  border: "border-teal-500/20" },
      { name: "Jira",           Icon: SiJira,       text: "text-sky-300",   bg: "bg-sky-500/10",   border: "border-sky-500/20" },
    ]},
  ],
  "servicelink": [
    { label: "UI Automation", skills: [
      { name: "Python",   Icon: SiPython,   text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20" },
      { name: "Pytest",   Icon: SiPytest,   text: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/20" },
      { name: "Selenium", Icon: SiSelenium, text: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    ]},
    { label: "API Testing", skills: [
      { name: "Postman",  Icon: SiPostman,  text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    ]},
  ],
  "silverxis-previous": [
    { label: "UI Automation", skills: [
      { name: "Java",     Icon: Coffee,     text: "text-rose-300",   bg: "bg-rose-500/10",   border: "border-rose-500/20" },
      { name: "Selenium", Icon: SiSelenium, text: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
      { name: "TestNG",   Icon: TestTube,   text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
      { name: "Maven",    Icon: Package,    text: "text-rose-300",   bg: "bg-rose-500/10",   border: "border-rose-500/20" },
    ]},
    { label: "Mobile", skills: [
      { name: "Appium",   Icon: SiAppium,   text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    ]},
    { label: "CI/CD & Perf", skills: [
      { name: "Jenkins",  Icon: SiJenkins,      text: "text-rose-300",  bg: "bg-rose-500/10",  border: "border-rose-500/20" },
      { name: "JMeter",   Icon: SiApachejmeter, text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    ]},
  ],
  "accenture": [
    { label: "BDD & UI", skills: [
      { name: "Cucumber", Icon: SiCucumber, text: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
      { name: "Java",     Icon: Coffee,     text: "text-rose-300",   bg: "bg-rose-500/10",   border: "border-rose-500/20" },
      { name: "Selenium", Icon: SiSelenium, text: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    ]},
    { label: "Data & DB", skills: [
      { name: "SQL",  Icon: SiPostgresql, text: "text-teal-300",  bg: "bg-teal-500/10",  border: "border-teal-500/20" },
      { name: "DB2",  Icon: Database,     text: "text-zinc-300",  bg: "bg-zinc-500/10",  border: "border-zinc-500/20" },
    ]},
    { label: "Test Management", skills: [
      { name: "HP QC", Icon: Shield, text: "text-sky-300", bg: "bg-sky-500/10", border: "border-sky-500/20" },
    ]},
  ],
};

export function Experience() {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Work experience"
          title="7+ years across"
          titleHighlight="industry-defining companies"
        />

        <div className="relative">
          {experiences.map((exp, index) => {
            const theme = themes[exp.id] ?? themes["accenture"];
            const metrics = roleMetrics[exp.id] ?? [];
            const skillGroups = roleSkillGroups[exp.id] ?? [];
            const isOpen = openIds.includes(exp.id);

            return (
              <motion.div
                key={exp.id}
                variants={ANIMATION_VARIANTS.fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center pt-1.5">
                  <div
                    className="timeline-dot"
                    style={{ background: theme.dotColor, boxShadow: theme.dotGlow }}
                  />
                  {index < experiences.length - 1 && (
                    <div className="timeline-line w-px flex-1" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Header */}
                  <div className="mb-4 flex flex-wrap items-start gap-3">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border bg-white/5 text-sm font-bold ${theme.border} ${theme.accent}`}>
                      {exp.companyInitial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                        <span className="text-zinc-600">·</span>
                        <span className={`text-sm font-medium ${theme.accent}`}>{exp.company}</span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-zinc-500">
                        {exp.period} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-6 transition-all duration-300 ${theme.border} ${theme.hoverBorder} ${theme.glow}`}>
                    {/* Hover streak */}
                    <div className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gradient-to-br ${theme.streak} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.07]`} />

                    {/* Role summary */}
                    <p className="mb-6 text-sm leading-relaxed text-zinc-400">{exp.description}</p>

                    {/* Impact Metrics */}
                    <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {metrics.map(({ icon: Icon, value, label, color, bg, border }) => (
                        <div key={label} className={`flex flex-col gap-1.5 rounded-xl border p-3 ${bg} ${border}`}>
                          <Icon size={13} className={color} />
                          <div className={`text-base font-bold leading-tight tracking-tight ${color}`}>{value}</div>
                          <div className="text-[11px] leading-tight text-zinc-500">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="mb-5 h-px bg-white/5" />

                    {/* Tech Stack grouped */}
                    <div className="mb-5">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                        Tech Stack Used in This Role
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {skillGroups.map(({ label, skills }) => (
                          <div key={label} className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <span className="w-32 flex-shrink-0 text-[11px] font-medium text-zinc-600">{label}</span>
                            <div className="flex flex-wrap gap-1.5">
                              {skills.map(({ name, Icon, text, bg, border }) => (
                                <span
                                  key={name}
                                  className={`inline-flex cursor-default items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-[1.04] ${text} ${bg} ${border}`}
                                >
                                  <Icon size={11} />
                                  {name}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-4 h-px bg-white/5" />

                    {/* Expandable Key Contributions */}
                    <button
                      onClick={() => toggle(exp.id)}
                      className="flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      <span>Key Contributions</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={14} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="contributions"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 flex flex-col gap-2.5">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex gap-2.5">
                                <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${theme.bulletBg}`} />
                                <span className="text-sm leading-relaxed text-zinc-400">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
