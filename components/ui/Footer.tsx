"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, BookOpen, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-600 text-xs font-bold text-white">
                {siteConfig.initials}
              </div>
              <span className="font-semibold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-xs text-zinc-500">{siteConfig.title} · {siteConfig.location}</p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: siteConfig.github, icon: Github, label: "GitHub" },
              { href: siteConfig.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: siteConfig.medium, icon: BookOpen, label: "Medium" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 text-zinc-500 transition-all hover:border-white/20 hover:text-zinc-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js 15, TypeScript & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
