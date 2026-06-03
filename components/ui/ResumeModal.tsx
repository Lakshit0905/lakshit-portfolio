"use client";

import { useState } from "react";
import { X, Download, MapPin, Mail, Github, Linkedin, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/site";
import { experiences } from "@/data/experience";
import { skillCategories, infraAndCI, observability, dataAndMethodologies } from "@/data/skills";

export function ResumeModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-[0.98]"
      >
        View Resume
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-4 py-10">
          <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60">
            {/* Toolbar */}
            <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl border-b border-white/8 bg-zinc-950/95 px-6 py-3 backdrop-blur">
              <span className="text-sm font-semibold text-white">Resume — {siteConfig.name}</span>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500"
                >
                  <Download size={13} />
                  Download PDF
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Resume content */}
            <div className="p-8 sm:p-10">
              {/* Header */}
              <div className="mb-8 border-b border-white/8 pb-8">
                <h1 className="text-3xl font-bold tracking-tight text-white">{siteConfig.name}</h1>
                <p className="mt-1 text-lg font-medium text-indigo-400">{siteConfig.title} · Test Automation Architect</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><MapPin size={12} />{siteConfig.location}</span>
                  <span className="flex items-center gap-1"><Mail size={12} />{siteConfig.email}</span>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-300">
                    <Linkedin size={12} />LinkedIn
                  </a>
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-300">
                    <Github size={12} />GitHub
                  </a>
                  <a href={siteConfig.medium} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-zinc-300">
                    <BookOpen size={12} />Medium
                  </a>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{siteConfig.description}</p>
              </div>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-indigo-400">Experience</h2>
                <div className="flex flex-col gap-7">
                  {experiences.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                          <p className="text-xs text-zinc-400">{exp.company} · {exp.location}</p>
                        </div>
                        <span className="text-xs text-zinc-500">{exp.period}</span>
                      </div>
                      <ul className="mt-2 flex flex-col gap-1">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex gap-2 text-xs leading-relaxed text-zinc-400">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-400" />
                            {a}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {exp.techStack.map((t) => (
                          <span key={t} className="rounded-full border border-white/8 bg-white/4 px-2 py-0.5 text-xs text-zinc-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-indigo-400">Skills</h2>
                <div className="flex flex-col gap-4">
                  {skillCategories.map((cat) => (
                    <div key={cat.id}>
                      <p className="mb-2 text-xs font-medium text-zinc-300">{cat.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((s) => (
                          <span key={s.name} className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-300">
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div>
                    <p className="mb-2 text-xs font-medium text-zinc-300">CI/CD & Infrastructure</p>
                    <div className="flex flex-wrap gap-1.5">
                      {infraAndCI.map((s) => (
                        <span key={s} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-zinc-300">Observability</p>
                    <div className="flex flex-wrap gap-1.5">
                      {observability.map((s) => (
                        <span key={s} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-300">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-zinc-300">Data & Methodologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dataAndMethodologies.map((s) => (
                        <span key={s} className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Key metrics */}
              <section>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">Key Metrics</h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {siteConfig.stats.map((stat, i) => (
                    <div key={i} className="rounded-xl border border-white/8 bg-white/3 p-3 text-center">
                      <div className="text-xl font-bold text-white">{stat.value}<span className="text-indigo-400">{stat.suffix}</span></div>
                      <div className="mt-0.5 text-xs text-zinc-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
