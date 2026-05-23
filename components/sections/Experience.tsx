"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/data/experience";
import { ANIMATION_VARIANTS } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Work experience"
          title="8 years across"
          titleHighlight="industry-defining companies"
          subtitle="From early-stage startups to Google-scale distributed systems — building quality infrastructure that enables teams to ship confidently."
        />

        <div className="relative">
          {experiences.map((exp, index) => (
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
              <div className="flex flex-col items-center pt-1">
                <div
                  className="timeline-dot"
                  style={{
                    background: exp.current ? "#6366f1" : "#3f3f46",
                    boxShadow: exp.current ? "0 0 0 3px rgba(99,102,241,0.2)" : "none",
                  }}
                />
                {index < experiences.length - 1 && (
                  <div className="timeline-line w-px flex-1" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                {/* Header */}
                <div className="mb-4 flex flex-wrap items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-zinc-300">
                    {exp.companyInitial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <span className="text-zinc-500">·</span>
                      <span className="text-sm text-zinc-400">{exp.company}</span>
                      {exp.current && (
                        <Badge variant="success">Current</Badge>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/6 bg-white/2 p-5 transition-all hover:border-white/10 hover:bg-white/3">
                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">{exp.description}</p>

                  <ul className="mb-5 space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2.5">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-emerald-500"
                        />
                        <span className="text-sm text-zinc-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
