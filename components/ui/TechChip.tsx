"use client";

import {
  Database, Rocket, BrainCircuit, Bot, Activity, Zap,
  ShieldCheck, Code2, GitBranch, Coffee, Terminal,
} from "lucide-react";
import {
  SiTypescript, SiSelenium, SiPytest, SiAppium,
  SiGithubactions, SiDocker, SiJenkins, SiGrafana,
  SiApachejmeter, SiPostgresql, SiJira, SiOpenai,
  SiPython, SiPostman, SiApachemaven, SiCucumber, SiSlack,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { ComponentType } from "react";

type TechDef = {
  Icon: ComponentType<{ size?: number; className?: string }>;
  text: string;
  bg: string;
  border: string;
};

function PlaywrightIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.85" />
      <circle cx="22" cy="22" r="8" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

const techMap: Record<string, TechDef> = {
  "Playwright":             { Icon: PlaywrightIcon, text: "text-violet-300",  bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "Playwright API client":  { Icon: PlaywrightIcon, text: "text-violet-300",  bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "TypeScript":             { Icon: SiTypescript,   text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "Python":                 { Icon: SiPython,       text: "text-yellow-300",  bg: "bg-yellow-500/10",  border: "border-yellow-500/20" },
  "Java":                   { Icon: Coffee,         text: "text-orange-300",  bg: "bg-orange-500/10",  border: "border-orange-500/20" },
  "Selenium":               { Icon: SiSelenium,     text: "text-amber-300",   bg: "bg-amber-500/10",   border: "border-amber-500/20" },
  "Pytest":                 { Icon: SiPytest,       text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "pytest":                 { Icon: SiPytest,       text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "GitHub Actions":         { Icon: SiGithubactions, text: "text-zinc-200",   bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "Docker":                 { Icon: SiDocker,       text: "text-cyan-300",    bg: "bg-cyan-500/10",    border: "border-cyan-500/20" },
  "AWS(EC2)":               { Icon: FaAws,          text: "text-orange-300",  bg: "bg-orange-500/10",  border: "border-orange-500/20" },
  "Jenkins":                { Icon: SiJenkins,      text: "text-rose-300",    bg: "bg-rose-500/10",    border: "border-rose-500/20" },
  "JMeter":                 { Icon: SiApachejmeter, text: "text-rose-300",    bg: "bg-rose-500/10",    border: "border-rose-500/20" },
  "Maven":                  { Icon: SiApachemaven,  text: "text-red-300",     bg: "bg-red-500/10",     border: "border-red-500/20" },
  "Appium":                 { Icon: SiAppium,       text: "text-violet-300",  bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "Postman":                { Icon: SiPostman,      text: "text-orange-300",  bg: "bg-orange-500/10",  border: "border-orange-500/20" },
  "SQL":                    { Icon: Database,       text: "text-teal-300",    bg: "bg-teal-500/10",    border: "border-teal-500/20" },
  "Cucumber":               { Icon: SiCucumber,     text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "Gherkin":                { Icon: SiCucumber,     text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "Grafana":                { Icon: SiGrafana,      text: "text-amber-300",   bg: "bg-amber-500/10",   border: "border-amber-500/20" },
  "Jira":                   { Icon: SiJira,         text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "Allure":                 { Icon: Activity,       text: "text-amber-300",   bg: "bg-amber-500/10",   border: "border-amber-500/20" },
  "TestNG":                 { Icon: ShieldCheck,    text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "CI/CD":                  { Icon: Rocket,         text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "LLM Evaluation":         { Icon: BrainCircuit,   text: "text-indigo-300",  bg: "bg-indigo-500/10",  border: "border-indigo-500/20" },
  "GenAI":                  { Icon: Bot,            text: "text-indigo-300",  bg: "bg-indigo-500/10",  border: "border-indigo-500/20" },
  "Slack API":              { Icon: SiSlack,        text: "text-violet-300",  bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "Scoring Functions":      { Icon: Zap,            text: "text-violet-300",  bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "Statistical Analysis":   { Icon: Activity,       text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "Microservices":          { Icon: GitBranch,      text: "text-zinc-200",    bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "LoadRunner":             { Icon: Activity,       text: "text-rose-300",    bg: "bg-rose-500/10",    border: "border-rose-500/20" },
  "HP QC":                  { Icon: ShieldCheck,    text: "text-zinc-300",    bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "Regression Testing":     { Icon: ShieldCheck,    text: "text-zinc-300",    bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
  "Mainframe DB2":          { Icon: Database,       text: "text-teal-300",    bg: "bg-teal-500/10",    border: "border-teal-500/20" },
  "Parallel test execution":{ Icon: Zap,            text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "UI regression automation":{ Icon: ShieldCheck,   text: "text-violet-300",  bg: "bg-violet-500/10",  border: "border-violet-500/20" },
  "API validation/automation":{ Icon: Terminal,     text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  "shift-left QA":          { Icon: Zap,            text: "text-sky-300",     bg: "bg-sky-500/10",     border: "border-sky-500/20" },
  "OpenAI":                 { Icon: SiOpenai,       text: "text-zinc-200",    bg: "bg-zinc-500/10",    border: "border-zinc-500/20" },
};

const fallback: TechDef = { Icon: Code2, text: "text-zinc-400", bg: "bg-zinc-500/10", border: "border-zinc-500/20" };

export function TechChip({ name }: { name: string }) {
  const cleanName = name.trim().replace(/,$/, "");
  const def = techMap[cleanName] ?? fallback;
  const { Icon, text, bg, border } = def;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium ${text} ${bg} ${border}`}>
      <Icon size={11} />
      {cleanName}
    </span>
  );
}
