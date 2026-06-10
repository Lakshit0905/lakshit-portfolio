export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  companyInitial: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  stars?: number;
  featured?: boolean;
  badge?: string;
  inProgress?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  tagColor: "indigo" | "cyan" | "emerald" | "zinc";
  readTime: string;
  views: string;
  date: string;
  url: string;
}

export interface AiCapability {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  accentColor: string;
}

export interface SectionProps {
  className?: string;
}
