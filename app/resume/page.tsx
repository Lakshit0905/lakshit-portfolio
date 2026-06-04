"use client";

import Link from "next/link";
import { ArrowLeft, Download, MapPin, Mail, Linkedin, Github, BookOpen, GraduationCap, Award, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { SkillCards } from "@/components/ui/SkillCards";

const education = [
  {
    degree: "Master of Science — Information Technology & Management",
    school: "The University of Texas at Dallas",
    location: "Dallas, TX",
    year: "2022",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    degree: "Bachelor of Engineering — Electronics & Instrumentation",
    school: "Visvesvaraya Technological University",
    location: "Bangalore, IN",
    year: "2015",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
];

const recognition = [
  {
    title: "Excellence in Software Testing Award",
    issuer: "Accenture",
    year: "Q1 2019",
    description:
      "Recognised for building and scaling a Cucumber/Gherkin BDD framework that automated 1,000+ regression test cases for a Barclays payment platform, saving 148 engineer-hours per monthly release cycle.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    title: "Star of the Month — Automation Impact",
    issuer: "Barclays / Accenture",
    year: "Jul 2017 · ×2 across tenure",
    description:
      "Awarded twice during the Barclays engagement for outstanding contribution to test automation, accelerating sprint delivery and reducing manual regression effort through scalable framework improvements.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];


const expThemes: Record<string, { accent: string; border: string; dot: string }> = {
  "silverxis-current":  { accent: "text-violet-400",  border: "border-violet-500/25",  dot: "bg-violet-400" },
  "servicelink":        { accent: "text-sky-400",      border: "border-sky-500/25",      dot: "bg-sky-400" },
  "silverxis-previous": { accent: "text-indigo-400",   border: "border-indigo-500/25",   dot: "bg-indigo-400" },
  "accenture":          { accent: "text-emerald-400",  border: "border-emerald-500/25",  dot: "bg-emerald-400" },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#080910]">
      {/* Sticky toolbar */}
      <div className="sticky top-0 z-50 border-b border-white/8 bg-[#080910]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to portfolio
          </Link>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-10 border-b border-white/8 pb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white">{siteConfig.name}</h1>
          <p className="mt-1 text-lg font-medium text-indigo-400">{siteConfig.title} · Test Automation Architect</p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5"><MapPin size={12} />{siteConfig.location}</span>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 transition-colors hover:text-zinc-300">
              <Mail size={12} />{siteConfig.email}
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#0A66C2] hover:text-[#0A66C2]/80">
              <Linkedin size={12} />LinkedIn
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-zinc-300">
              <Github size={12} />GitHub
            </a>
            <a href={siteConfig.medium} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-green-500 hover:text-green-400">
              <BookOpen size={12} />Medium
            </a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{siteConfig.description}</p>
        </div>

        {/* ── Key Metrics ─────────────────────────────────────── */}
        <section className="mb-10">
          <SectionTitle>Key Metrics</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="rounded-xl border border-white/8 bg-white/3 p-3 text-center">
                <div className="text-xl font-bold text-white">
                  {stat.value}<span className="text-indigo-400">{stat.suffix}</span>
                </div>
                <div className="mt-0.5 text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ──────────────────────────────────────── */}
        <section className="mb-10">
          <SectionTitle>Experience</SectionTitle>
          <div className="flex flex-col gap-7">
            {experiences.map((exp) => {
              const theme = expThemes[exp.id] ?? expThemes["accenture"];
              return (
                <div key={exp.id} className={`rounded-2xl border p-5 ${theme.border} bg-white/[0.02]`}>
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                      <p className={`text-xs font-medium ${theme.accent}`}>{exp.company} · {exp.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                          Current
                        </span>
                      )}
                      <span className="text-xs text-zinc-500">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-zinc-400">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${theme.dot}`} />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.techStack.map((t) => (
                      <span key={t} className="rounded-full border border-white/8 bg-white/4 px-2 py-0.5 text-xs text-zinc-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Projects ────────────────────────────────────────── */}
        <section className="mb-10">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project, i) => {
              const c = i % 2 === 0
                ? { border: "border-violet-500/20", bg: "bg-violet-500/[0.04]", accent: "text-violet-300", chipBorder: "border-violet-500/20", chipBg: "bg-violet-500/10" }
                : { border: "border-sky-500/20",    bg: "bg-sky-500/[0.04]",    accent: "text-sky-300",    chipBorder: "border-sky-500/20",    chipBg: "bg-sky-500/10" };
              return (
                <div key={project.id} className={`rounded-2xl border p-5 ${c.border} ${c.bg}`}>
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="text-zinc-500 transition-colors hover:text-zinc-300">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <p className="mb-3 text-xs leading-relaxed text-zinc-400">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((t) => (
                      <span key={t} className={`rounded-full border px-2 py-0.5 text-xs ${c.accent} ${c.chipBorder} ${c.chipBg}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Education ───────────────────────────────────────── */}
        <section className="mb-10">
          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div key={edu.degree} className={`flex items-start gap-4 rounded-2xl border p-5 ${edu.border} bg-white/[0.02]`}>
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${edu.bg}`}>
                  <GraduationCap size={18} className={edu.color} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{edu.degree}</p>
                  <p className={`mt-0.5 text-xs font-medium ${edu.color}`}>{edu.school}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{edu.location} · {edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Recognition ─────────────────────────────────────── */}
        <section className="mb-10">
          <SectionTitle>Recognition</SectionTitle>
          <div className="flex flex-col gap-4">
            {recognition.map((award) => (
              <div key={award.title} className={`flex items-start gap-4 rounded-2xl border p-5 ${award.border} bg-white/[0.02]`}>
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${award.bg}`}>
                  <Award size={18} className={award.color} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-white">{award.title}</p>
                    <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${award.border} ${award.bg} ${award.color}`}>
                      {award.year}
                    </span>
                  </div>
                  <p className={`mt-0.5 text-xs font-medium ${award.color}`}>{award.issuer}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────────── */}
        <section className="mb-10">
          <SectionTitle>Skills</SectionTitle>
          <SkillCards />
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
      <span className="h-px flex-1 bg-indigo-500/20" />
      {children}
      <span className="h-px flex-1 bg-indigo-500/20" />
    </h2>
  );
}
