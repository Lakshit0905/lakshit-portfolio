"use client";

import Link from "next/link";

export function ResumeModal() {
  return (
    <Link
      href="/resume"
      className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-500/10 px-7 py-3.5 text-sm font-semibold text-violet-300 transition-all duration-200 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-violet-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-[0.97]"
    >
      View Resume
    </Link>
  );
}
