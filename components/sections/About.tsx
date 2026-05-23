"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ANIMATION_VARIANTS } from "@/lib/utils";


const quickFacts = [
  { icon: MapPin, text: "Dallas, TX" },
  { icon: Briefcase, text: "Open to remote · hybrid · on-site" },
  { icon: GraduationCap, text: "MS, IT & Management, UT Dallas · Jun 2022" },
  { icon: GraduationCap, text: "BS, Electronics & Instrumentation, RN Shetty · Jun 2015" },
  { icon: Award, text: "Dean's Scholar, Top 20% · Data Science Club President" },
  { icon: BookOpen, text: "Top Student Mentor · 800+ questions, 70+ students coached" },
];

const quickStats = [
  { value: "15+", label: "Projects shipped" },
  { value: "4", label: "FAANG orgs" },
  { value: "12", label: "Engineers led" },
  { value: "40+", label: "Articles published" },
];

const specializations = [
  "Distributed systems", "Test architecture", "AI/ML testing", "Shift-left QE",
  "Performance engineering", "Chaos engineering",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About me"
          title="I don&#39;t just test software —"
          titleHighlight="I engineer confidence"
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <motion.div
            variants={ANIMATION_VARIANTS.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-4 text-base leading-relaxed text-zinc-400">
              With 8 years building quality systems at companies like Servicelink and Accenture, I specialize in
              designing test infrastructure that enables teams to ship faster without sacrificing reliability.
            </motion.p>
            <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-4 text-base leading-relaxed text-zinc-400">
              My approach combines shift-left testing philosophy with AI-powered automation — catching
              defects at the speed of development, not after. I've led QE orgs of up to 12 engineers and
              defined testing strategy for platforms serving{" "}
              <span className="font-semibold text-zinc-200">200M+ users</span>.
            </motion.p>
            <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-8 text-base leading-relaxed text-zinc-400">
              Currently focused on intelligent test generation, flaky test elimination, and building the
              next generation of autonomous QA systems.
            </motion.p>
            <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400"
                >
                  {spec}
                </span>
              ))}
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
              className="rounded-2xl border border-white/6 bg-white/3 p-6"
            >
              <h3 className="mb-5 text-sm font-semibold text-white">Quick facts</h3>
              <div className="flex flex-col gap-3.5">
                {quickFacts.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                      <Icon size={14} className="text-indigo-400" />
                    </div>
                    <span className="text-sm text-zinc-400">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mini stats grid */}
            <motion.div
              variants={ANIMATION_VARIANTS.staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-3"
            >
              {quickStats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={ANIMATION_VARIANTS.scaleIn}
                  className="rounded-xl border border-white/6 bg-white/3 p-4 text-center"
                >
                  <div className="text-2xl font-bold tracking-tight text-white">{value}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
