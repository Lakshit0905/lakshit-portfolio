"use client";

import {
  Zap, Rocket, TrendingUp, Bot,
  Database, Activity, Wand2, BrainCircuit, Terminal, ShieldCheck,
} from "lucide-react";
import {
  SiTypescript, SiSelenium, SiPytest, SiAppium,
  SiGithubactions, SiDocker, SiJenkins, SiCircleci, SiGrafana,
  SiApachejmeter, SiK6, SiPostgresql, SiJira, SiOpenai,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { ComponentType } from "react";

type Chip = {
  name: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  text: string; bg: string; border: string;
  hoverBorder: string; hoverBg: string; hoverText: string;
};

function PlaywrightIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.85" />
      <circle cx="22" cy="22" r="8" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

function PactIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export const expertiseCards: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  iconColor: string; iconBg: string;
  accentFrom: string; accentTo: string;
  cardHoverBorder: string; cardGlow: string;
  chips: Chip[];
  footer: string; footerText: string; footerBg: string; footerBorder: string;
}[] = [
  {
    icon: Zap,
    title: "Automation & Testing",
    iconColor: "text-violet-400", iconBg: "bg-violet-500/10",
    accentFrom: "from-violet-500", accentTo: "to-indigo-500",
    cardHoverBorder: "hover:border-violet-500/40",
    cardGlow: "hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]",
    chips: [
      { name: "Playwright",   Icon: PlaywrightIcon, text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/60", hoverBg: "hover:bg-violet-500/20", hoverText: "hover:text-violet-200" },
      { name: "TypeScript",   Icon: SiTypescript,   text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    hoverBorder: "hover:border-sky-400/60",    hoverBg: "hover:bg-sky-500/20",    hoverText: "hover:text-sky-200" },
      { name: "Selenium",     Icon: SiSelenium,     text: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/20",  hoverBorder: "hover:border-amber-400/60",  hoverBg: "hover:bg-amber-500/20",  hoverText: "hover:text-amber-200" },
      { name: "Pytest",       Icon: SiPytest,       text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    hoverBorder: "hover:border-sky-400/60",    hoverBg: "hover:bg-sky-500/20",    hoverText: "hover:text-sky-200" },
      { name: "REST Assured", Icon: ShieldCheck,    text: "text-emerald-300",bg: "bg-emerald-500/10",border: "border-emerald-500/20",hoverBorder: "hover:border-emerald-400/60",hoverBg: "hover:bg-emerald-500/20",hoverText: "hover:text-emerald-200" },
      { name: "Appium",       Icon: SiAppium,       text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/60", hoverBg: "hover:bg-violet-500/20", hoverText: "hover:text-violet-200" },
      { name: "Pact",         Icon: PactIcon,       text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/20", hoverBorder: "hover:border-indigo-400/60", hoverBg: "hover:bg-indigo-500/20", hoverText: "hover:text-indigo-200" },
    ],
    footer: "UI • API • Mobile • Contract Testing",
    footerText: "text-violet-400", footerBg: "bg-violet-500/8", footerBorder: "border-violet-500/20",
  },
  {
    icon: Rocket,
    title: "CI/CD & DevOps",
    iconColor: "text-sky-400", iconBg: "bg-sky-500/10",
    accentFrom: "from-sky-500", accentTo: "to-cyan-500",
    cardHoverBorder: "hover:border-sky-500/40",
    cardGlow: "hover:shadow-[0_0_40px_-12px_rgba(14,165,233,0.35)]",
    chips: [
      { name: "GitHub Actions", Icon: SiGithubactions, text: "text-zinc-200",   bg: "bg-zinc-500/10",   border: "border-zinc-500/20",   hoverBorder: "hover:border-zinc-400/60",   hoverBg: "hover:bg-zinc-500/20",   hoverText: "hover:text-white" },
      { name: "Docker",         Icon: SiDocker,        text: "text-cyan-300",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   hoverBorder: "hover:border-cyan-400/60",   hoverBg: "hover:bg-cyan-500/20",   hoverText: "hover:text-cyan-200" },
      { name: "Jenkins",        Icon: SiJenkins,       text: "text-rose-300",   bg: "bg-rose-500/10",   border: "border-rose-500/20",   hoverBorder: "hover:border-rose-400/60",   hoverBg: "hover:bg-rose-500/20",   hoverText: "hover:text-rose-200" },
      { name: "AWS",            Icon: FaAws,           text: "text-orange-300", bg: "bg-orange-500/10", border: "border-orange-500/20", hoverBorder: "hover:border-orange-400/60", hoverBg: "hover:bg-orange-500/20", hoverText: "hover:text-orange-200" },
      { name: "CircleCI",       Icon: SiCircleci,      text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    hoverBorder: "hover:border-sky-400/60",    hoverBg: "hover:bg-sky-500/20",    hoverText: "hover:text-sky-200" },
      { name: "Grafana",        Icon: SiGrafana,       text: "text-amber-300",  bg: "bg-amber-500/10",  border: "border-amber-500/20",  hoverBorder: "hover:border-amber-400/60",  hoverBg: "hover:bg-amber-500/20",  hoverText: "hover:text-amber-200" },
    ],
    footer: "Automated quality gates and deployment validation",
    footerText: "text-sky-400", footerBg: "bg-sky-500/8", footerBorder: "border-sky-500/20",
  },
  {
    icon: TrendingUp,
    title: "Performance & Quality Engineering",
    iconColor: "text-emerald-400", iconBg: "bg-emerald-500/10",
    accentFrom: "from-emerald-500", accentTo: "to-teal-500",
    cardHoverBorder: "hover:border-emerald-500/40",
    cardGlow: "hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]",
    chips: [
      { name: "JMeter",              Icon: SiApachejmeter, text: "text-rose-300",    bg: "bg-rose-500/10",    border: "border-rose-500/20",    hoverBorder: "hover:border-rose-400/60",    hoverBg: "hover:bg-rose-500/20",    hoverText: "hover:text-rose-200" },
      { name: "k6",                  Icon: SiK6,           text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-400/60", hoverBg: "hover:bg-emerald-500/20", hoverText: "hover:text-emerald-200" },
      { name: "SQL Validation",      Icon: SiPostgresql,   text: "text-teal-300",    bg: "bg-teal-500/10",    border: "border-teal-500/20",    hoverBorder: "hover:border-teal-400/60",    hoverBg: "hover:bg-teal-500/20",    hoverText: "hover:text-teal-200" },
      { name: "Performance Testing", Icon: Activity,       text: "text-amber-300",   bg: "bg-amber-500/10",   border: "border-amber-500/20",   hoverBorder: "hover:border-amber-400/60",   hoverBg: "hover:bg-amber-500/20",   hoverText: "hover:text-amber-200" },
      { name: "Load Testing",        Icon: TrendingUp,     text: "text-rose-300",    bg: "bg-rose-500/10",    border: "border-rose-500/20",    hoverBorder: "hover:border-rose-400/60",    hoverBg: "hover:bg-rose-500/20",    hoverText: "hover:text-rose-200" },
      { name: "Data Quality",        Icon: Database,       text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hoverBorder: "hover:border-emerald-400/60", hoverBg: "hover:bg-emerald-500/20", hoverText: "hover:text-emerald-200" },
    ],
    footer: "Shift-left quality and reliability engineering",
    footerText: "text-emerald-400", footerBg: "bg-emerald-500/8", footerBorder: "border-emerald-500/20",
  },
  {
    icon: Bot,
    title: "AI-Powered QA",
    iconColor: "text-indigo-400", iconBg: "bg-indigo-500/10",
    accentFrom: "from-indigo-500", accentTo: "to-violet-500",
    cardHoverBorder: "hover:border-indigo-500/40",
    cardGlow: "hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.35)]",
    chips: [
      { name: "LLM Workflows",           Icon: SiOpenai,     text: "text-zinc-200",   bg: "bg-zinc-500/10",   border: "border-zinc-500/20",   hoverBorder: "hover:border-zinc-400/60",   hoverBg: "hover:bg-zinc-500/20",   hoverText: "hover:text-white" },
      { name: "Test Generation",          Icon: Wand2,        text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/60", hoverBg: "hover:bg-violet-500/20", hoverText: "hover:text-violet-200" },
      { name: "Self-Healing Automation",  Icon: Zap,          text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    hoverBorder: "hover:border-sky-400/60",    hoverBg: "hover:bg-sky-500/20",    hoverText: "hover:text-sky-200" },
      { name: "Defect Intelligence",      Icon: BrainCircuit, text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-500/20", hoverBorder: "hover:border-indigo-400/60", hoverBg: "hover:bg-indigo-500/20", hoverText: "hover:text-indigo-200" },
      { name: "Jira Automation",          Icon: SiJira,       text: "text-sky-300",    bg: "bg-sky-500/10",    border: "border-sky-500/20",    hoverBorder: "hover:border-sky-400/60",    hoverBg: "hover:bg-sky-500/20",    hoverText: "hover:text-sky-200" },
      { name: "Prompt Engineering",       Icon: Terminal,     text: "text-violet-300", bg: "bg-violet-500/10", border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/60", hoverBg: "hover:bg-violet-500/20", hoverText: "hover:text-violet-200" },
    ],
    footer: "Built and deployed AI-driven QA solutions",
    footerText: "text-indigo-400", footerBg: "bg-indigo-500/8", footerBorder: "border-indigo-500/20",
  },
];

export function SkillCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {expertiseCards.map((card) => (
        <div
          key={card.title}
          className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 ${card.cardHoverBorder} ${card.cardGlow}`}
        >
          {/* Gradient streak */}
          <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${card.accentFrom} ${card.accentTo} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.07]`} />

          {/* Header */}
          <div className="mb-5 flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 ${card.iconBg}`}>
              <card.icon size={18} className={card.iconColor} />
            </div>
            <h3 className="text-sm font-semibold text-white">{card.title}</h3>
          </div>

          {/* Chips */}
          <div className="flex flex-1 flex-wrap gap-2">
            {card.chips.map(({ name, Icon, text, bg, border, hoverBorder, hoverBg, hoverText }) => (
              <span
                key={name}
                className={`inline-flex cursor-default items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-[1.04] ${text} ${bg} ${border} ${hoverBorder} ${hoverBg} ${hoverText}`}
              >
                <Icon size={12} />
                {name}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className={`mt-5 rounded-lg border px-3 py-2 text-xs font-medium ${card.footerText} ${card.footerBg} ${card.footerBorder}`}>
            {card.footer}
          </div>
        </div>
      ))}
    </div>
  );
}
