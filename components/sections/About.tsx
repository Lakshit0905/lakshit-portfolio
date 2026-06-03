"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ANIMATION_VARIANTS } from "@/lib/utils";


const quickFacts = [
  { icon: MapPin, text: "Dallas, TX" },
  { icon: Briefcase, text: "Open to remote · hybrid · on-site" },
  { icon: GraduationCap, text: "MS, IT & Management, UT Dallas · Jun 2022" },
  { icon: GraduationCap, text: "BE, Electronics & Instrumentation, VTU · Jun 2015" },
];


const specializations = [
  "Playwright automation", "API testing", "CI/CD quality gates", "Contract testing",
  "Performance testing", "AI-powered QA",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About me"
          title="I build automation systems"
          titleHighlight="that make releases safer"
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
              I am a Senior SDET with 8+ years of experience across fintech, enterprise SaaS,
              mortgage platforms, and data-driven applications. I focus on building practical
              automation frameworks that help teams release faster with fewer surprises.
            </motion.p>
            <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-4 text-base leading-relaxed text-zinc-400">
              My recent work includes Playwright + TypeScript UI/API automation, GitHub Actions
              pipelines, Dockerized test execution, API validation, Pact contract testing, SQL
              checks, and Allure reporting. I care about stable locators, isolated test data,
              clear defect signals, and automation that developers actually trust.
            </motion.p>
            <motion.p variants={ANIMATION_VARIANTS.fadeInUp} className="mb-8 text-base leading-relaxed text-zinc-400">
              I have worked with SilverXis, ServiceLink, and Accenture, with hands-on experience
              in Playwright, Selenium, Pytest, Appium, Postman, REST Assured, JMeter, AWS, Docker,
              Jenkins, and modern CI/CD quality gates.
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

          </div>
        </div>
      </div>
    </section>
  );
}
