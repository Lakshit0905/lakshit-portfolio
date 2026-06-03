"use client";

import { motion } from "framer-motion";
import { Clock, ExternalLink, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles } from "@/data/articles";
import { ANIMATION_VARIANTS, getTagColorClasses } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export function Articles() {
  return (
    <section id="articles" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FROM THE BLOG"
          title="How I Think"
        />

        <motion.div
          variants={ANIMATION_VARIANTS.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={ANIMATION_VARIANTS.fadeInUp}
              className="group flex flex-col gap-3 rounded-2xl border border-white/6 bg-white/2 p-5 transition-all hover:border-white/12 hover:bg-white/4 sm:flex-row sm:items-start"
            >
              {/* Index */}
              <div className="hidden shrink-0 items-center justify-center w-8 h-8 rounded-lg bg-white/4 text-xs font-bold text-zinc-600 sm:flex">
                0{index + 1}
              </div>

              <div className="flex-1 min-w-0">
                {/* Meta row */}
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs font-medium ${getTagColorClasses(
                      article.tagColor
                    )}`}
                  >
                    {article.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-zinc-600">
                    <Clock size={11} />
                    <span>{article.readTime}</span>
                  </div>
                  <span className="text-xs text-zinc-600">·</span>
                  <span className="text-xs text-zinc-600">{article.views}</span>
                  <span className="ml-auto text-xs text-zinc-600">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-sm font-semibold text-white transition-colors group-hover:text-indigo-300 sm:text-base">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500">{article.excerpt}</p>
              </div>

              {/* External link icon */}
              <div className="hidden shrink-0 items-center text-zinc-700 transition-colors group-hover:text-indigo-400 sm:flex">
                <ExternalLink size={15} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Medium CTA */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={siteConfig.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 px-6 py-3 text-sm font-medium text-zinc-400 transition-all hover:border-white/20 hover:text-zinc-200"
          >
            <BookOpen size={15} />
            Read all 40+ articles on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}
