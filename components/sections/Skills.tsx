"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories, cloudTools, aiTools } from "@/data/skills";
import { ANIMATION_VARIANTS } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useScrollReveal();

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-zinc-300 transition-colors group-hover:text-white">{name}</span>
        <span className="text-xs text-zinc-600">{level}%</span>
      </div>
      <div className="h-[3px] overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="skill-bar h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Technical skills"
          title="Expertise across"
          titleHighlight="the full QE stack"
          subtitle="From browser automation to distributed load testing — proficient across every layer of the quality engineering toolchain."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: tabbed skill bars */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-2xl border border-white/6 bg-white/2 p-6"
          >
            {/* Tabs */}
            <div className="mb-6 flex flex-wrap gap-1.5">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    activeTab === cat.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-5">
              {activeCategory.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: tool grids */}
          <div className="flex flex-col gap-5">
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-white/6 bg-white/2 p-5"
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-500" />
                Cloud & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {cloudTools.map((tool) => (
                  <span key={tool} className="tech-badge cursor-default">{tool}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-5"
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
                AI & ML Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Methodology badges */}
            <motion.div
              variants={ANIMATION_VARIANTS.fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-white/6 bg-white/2 p-5"
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "TDD", "BDD", "Shift-left testing", "Contract testing",
                  "Chaos engineering", "Property-based testing", "Mutation testing",
                  "A/B testing", "Canary deployments",
                ].map((m) => (
                  <span key={m} className="tech-badge cursor-default">{m}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
