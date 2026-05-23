"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
}

export function SectionHeader({
  label,
  title,
  titleHighlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-16"
    >
      <motion.div variants={ANIMATION_VARIANTS.fadeInUp} className="mb-4">
        <span className="section-label">{label}</span>
      </motion.div>

      <motion.h2
        variants={ANIMATION_VARIANTS.fadeInUp}
        className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {titleHighlight ? (
          <>
            {title}{" "}
            <span className="text-gradient">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="max-w-2xl text-base text-zinc-400"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
