"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Bot, Activity, TrendingUp, BarChart3, Network } from "lucide-react";
import {
  SiPython,
  SiPytest,
  SiOpenai,
  SiSlack,
  SiGithubactions,
  SiGithub,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiClaude,
} from "react-icons/si";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { ANIMATION_VARIANTS } from "@/lib/utils";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const techIconMap: Record<string, { Icon: IconComponent; text: string; bg: string; border: string }> = {
  "Python":              { Icon: SiPython,        text: "text-sky-300",    bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "pytest":              { Icon: SiPytest,         text: "text-amber-300",  bg: "bg-amber-500/10",   border: "border-amber-500/20" },
  "LLM Evaluation":      { Icon: SiOpenai,         text: "text-zinc-200",   bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "Scoring Functions":   { Icon: BarChart3,         text: "text-violet-300", bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "GenAI":               { Icon: Bot,               text: "text-indigo-300", bg: "bg-indigo-500/10",  border: "border-indigo-500/20" },
  "CI/CD":               { Icon: SiGithubactions,   text: "text-zinc-200",   bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "Statistical Analysis":{ Icon: TrendingUp,         text: "text-emerald-300",bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "Slack API":           { Icon: SiSlack,            text: "text-rose-300",   bg: "bg-rose-500/10",    border: "border-rose-500/20" },
  "GitHub Actions":      { Icon: SiGithubactions,    text: "text-zinc-200",   bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "Next.js":             { Icon: SiNextdotjs,        text: "text-zinc-200",   bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "TypeScript":          { Icon: SiTypescript,       text: "text-blue-300",   bg: "bg-blue-500/10",    border: "border-blue-500/20" },
  "PostgreSQL":          { Icon: SiPostgresql,       text: "text-sky-300",    bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "Prisma":              { Icon: SiPrisma,           text: "text-zinc-200",   bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "OpenAI API":          { Icon: SiOpenai,           text: "text-emerald-300",bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "Claude API":          { Icon: SiClaude,           text: "text-orange-300", bg: "bg-orange-500/10",  border: "border-orange-500/20" },
  "RAG":                 { Icon: Network,            text: "text-fuchsia-300",bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
  "AI Agents":           { Icon: Bot,                text: "text-indigo-300", bg: "bg-indigo-500/10",  border: "border-indigo-500/20" },
};

const fallbackIcon = { Icon: Activity, text: "text-zinc-300", bg: "bg-zinc-500/10", border: "border-zinc-500/20" };

const cardThemes = [
  {
    border: "border-violet-500/25",
    hoverBorder: "hover:border-violet-400/50",
    bg: "bg-violet-500/[0.04]",
    hoverBg: "hover:bg-violet-500/[0.07]",
    glow: "hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    badgeBorder: "border-violet-500/30",
    badgeBg: "bg-violet-500/15",
    badgeText: "text-violet-300",
    streak: "from-violet-500 to-indigo-500",
  },
  {
    border: "border-sky-500/25",
    hoverBorder: "hover:border-sky-400/50",
    bg: "bg-sky-500/[0.04]",
    hoverBg: "hover:bg-sky-500/[0.07]",
    glow: "hover:shadow-[0_0_40px_-12px_rgba(14,165,233,0.35)]",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    badgeBorder: "border-sky-500/30",
    badgeBg: "bg-sky-500/15",
    badgeText: "text-sky-300",
    streak: "from-sky-500 to-cyan-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="-mb-6">
          <SectionHeader
            label="Featured projects"
            title="Open source &"
            titleHighlight="personal engineering"
          />
        </div>

        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {projects.map((project, i) => {
            const theme = cardThemes[i % cardThemes.length];
            return (
              <motion.div
                key={project.id}
                variants={ANIMATION_VARIANTS.scaleIn}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${theme.border} ${theme.hoverBorder} ${theme.bg} ${theme.hoverBg} ${theme.glow}`}
              >
                {/* Glow streak */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${theme.streak} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]`} />

                {/* Badge row */}
                <div className="mb-4 flex items-center justify-between">
                  {project.inProgress ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Currently working on
                    </span>
                  ) : project.badge ? (
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${theme.badgeBorder} ${theme.badgeBg} ${theme.badgeText}`}>
                      {project.badge}
                    </span>
                  ) : (
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${theme.badgeBorder} ${theme.badgeBg} ${theme.badgeText}`}>
                      Open Source
                    </span>
                  )}
                </div>

                {/* Title & description */}
                <h3 className="mb-2 text-base font-semibold text-white">{project.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                {/* Tech stack with icons */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => {
                    const { Icon, text, bg, border } = techIconMap[tech] ?? fallbackIcon;
                    return (
                      <span
                        key={tech}
                        className={`inline-flex cursor-default items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-[1.04] ${text} ${bg} ${border}`}
                      >
                        <Icon size={11} />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-200"
                    >
                      <SiGithub size={13} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-indigo-500"
                    >
                      <ExternalLink size={13} />
                      Live demo
                    </a>
                  )}
                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-200"
                    >
                      <BookOpen size={13} />
                      Docs
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Lakshit0905"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-6 py-3 text-sm font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-200"
          >
            <SiGithub size={15} />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
