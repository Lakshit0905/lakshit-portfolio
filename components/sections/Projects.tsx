"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { ANIMATION_VARIANTS } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Featured projects"
          title="Open source &"
          titleHighlight="personal engineering"
          subtitle="Battle-tested tools used by engineering teams worldwide. Every project solves a real problem I encountered building quality infrastructure at scale."
        />

        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={ANIMATION_VARIANTS.scaleIn}
              className={`project-card group relative flex flex-col rounded-2xl border p-5 transition-all ${
                project.featured
                  ? "border-indigo-500/30 bg-indigo-500/5"
                  : "border-white/6 bg-white/2"
              }`}
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.badge && (
                    <span className="rounded-full border border-indigo-500/30 bg-indigo-500/15 px-2 py-0.5 text-xs font-semibold text-indigo-400">
                      {project.badge}
                    </span>
                  )}
                </div>
                {project.stars != null && (
                  <div className="flex items-center gap-1 text-xs text-zinc-500">
                    <Star size={12} />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Title & description */}
              <h3 className="mb-2 text-base font-semibold text-white">{project.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              {/* Tech stack */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
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
                    <Github size={13} />
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
          ))}
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-6 py-3 text-sm font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-200"
          >
            <Github size={15} />
            View all 15+ projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
