"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCards } from "@/components/ui/SkillCards";
import { ANIMATION_VARIANTS } from "@/lib/utils";

const impactStats = [
  { value: "14+",       label: "Tools & Frameworks",  valueColor: "text-violet-300", border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/50", glow: "hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.4)]" },
  { value: "450+",      label: "Automated Scenarios", valueColor: "text-sky-300",    border: "border-sky-500/20",    hoverBorder: "hover:border-sky-400/50",    glow: "hover:shadow-[0_0_30px_-8px_rgba(14,165,233,0.4)]" },
  { value: "3.5h→<1h", label: "Regression Runtime",  valueColor: "text-emerald-300",border: "border-emerald-500/20",hoverBorder: "hover:border-emerald-400/50",glow: "hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.4)]" },
  { value: "18%→<5%",  label: "Flaky Test Rate",      valueColor: "text-amber-300",  border: "border-amber-500/20",  hoverBorder: "hover:border-amber-400/50",  glow: "hover:shadow-[0_0_30px_-8px_rgba(245,158,11,0.4)]" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="-mb-8">
          <SectionHeader
            label="Skills"
            title="Quality Engineering"
            titleHighlight="Expertise"
          />
        </div>

        {/* Impact strip */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {impactStats.map(({ value, label, valueColor, border, hoverBorder, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-xl border bg-zinc-900 px-4 py-5 text-center transition-all duration-300 hover:bg-zinc-800/80 ${border} ${hoverBorder} ${glow}`}
            >
              <p className={`text-2xl font-bold tracking-tight ${valueColor}`}>{value}</p>
              <p className="mt-1.5 text-xs font-medium text-zinc-300">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 2×2 expertise cards */}
        <SkillCards />
      </div>
    </section>
  );
}
