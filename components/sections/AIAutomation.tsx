"use client";

import { motion } from "framer-motion";
import { Bot, Eye, Zap, Wrench, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ANIMATION_VARIANTS } from "@/lib/utils";

const capabilities = [
  {
    icon: Bot,
    title: "AI test generation",
    description:
      "LLM-powered test case synthesis from OpenAPI specs and user stories. GPT-4 + custom prompt engineering — 68% reduction in manual test authoring.",
    techStack: ["LangChain", "GPT-4", "OpenAI API"],
    accent: "indigo",
  },
  {
    icon: Eye,
    title: "Visual regression AI",
    description:
      "Computer vision pipeline (Percy + custom ML model) for pixel-perfect UI regression. 94% defect detection rate with 2% false-positive rate.",
    techStack: ["Percy", "PyTorch", "OpenCV"],
    accent: "cyan",
  },
  {
    icon: Zap,
    title: "Flaky test predictor",
    description:
      "ML classifier predicting test flakiness before merge. Trained on 3 years of CI data — 91% accuracy. Integrated into GitHub Actions pre-merge gate.",
    techStack: ["scikit-learn", "BigQuery ML"],
    accent: "emerald",
  },
  {
    icon: Wrench,
    title: "Self-healing framework",
    description:
      "Selenium + AI element locator that auto-repairs broken selectors using DOM diffing + ML confidence scoring. Zero manual selector maintenance.",
    techStack: ["Healenium", "TensorFlow", "Selenium"],
    accent: "violet",
  },
  {
    icon: BarChart3,
    title: "Observability-driven testing",
    description:
      "Test assertions driven by production metrics. If latency p99 degrades by 15%, automated regression triggers instantly — no human needed.",
    techStack: ["Datadog", "OpenTelemetry", "Python"],
    accent: "amber",
  },
];

const accentMap: Record<string, string> = {
  indigo: "border-indigo-500/20 bg-indigo-500/5",
  cyan: "border-cyan-500/20 bg-cyan-500/5",
  emerald: "border-emerald-500/20 bg-emerald-500/5",
  violet: "border-violet-500/20 bg-violet-500/5",
  amber: "border-amber-500/20 bg-amber-500/5",
};

const iconColorMap: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-500/10",
  cyan: "text-cyan-400 bg-cyan-500/10",
  emerald: "text-emerald-400 bg-emerald-500/10",
  violet: "text-violet-400 bg-violet-500/10",
  amber: "text-amber-400 bg-amber-500/10",
};

const badgeMap: Record<string, string> = {
  indigo: "border-indigo-500/20 bg-indigo-500/10 text-indigo-400",
  cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  violet: "border-violet-500/20 bg-violet-500/10 text-violet-400",
  amber: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

const impactMetrics = [
  { value: "68%", label: "Less manual test writing" },
  { value: "91%", label: "Flaky test prediction accuracy" },
  { value: "12x", label: "Faster defect detection" },
  { value: "2.4K", label: "Flaky tests eliminated" },
];

export function AIAutomation() {
  return (
    <section id="ai" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="AI + Automation"
          title="Autonomous quality"
          titleHighlight="engineering"
          subtitle="Building the next generation of test systems — where AI writes, fixes, and optimizes tests faster than any human team."
        />

        {/* Capability cards */}
        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={ANIMATION_VARIANTS.scaleIn}
                className={`group rounded-2xl border p-5 transition-all hover:scale-[1.01] ${accentMap[cap.accent]}`}
              >
                <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${iconColorMap[cap.accent]}`}>
                  <Icon size={18} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{cap.title}</h3>
                <p className="mb-3 text-xs leading-relaxed text-zinc-500">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${badgeMap[cap.accent]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Impact metrics */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-indigo-500/15 bg-indigo-500/5 p-6"
        >
          <p className="mb-5 text-center text-xs uppercase tracking-widest text-indigo-400">
            Measurable AI impact
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {impactMetrics.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {value}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
