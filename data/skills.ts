import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "automation",
    label: "Automation & Frameworks",
    skills: [
      { name: "Playwright", level: 95 },
      { name: "Cypress", level: 88 },
      { name: "Selenium", level: 90 },
      { name: "Appium", level: 80 },
      { name: "Pytest", level: 92 },
      { name: "TestNG", level: 82 },
      { name: "REST Assured", level: 88 },
      { name: "Pact", level: 84 },
      { name: "Karate", level: 78 },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 95 },
      { name: "Java", level: 88 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    id: "api-performance",
    label: "API & Performance Testing",
    skills: [
      { name: "Postman", level: 90 },
      { name: "Contract Testing", level: 85 },
      { name: "Load Testing", level: 85 },
      { name: "JMeter", level: 80 },
    ],
  },
];

// was `cloudTools` — renamed to match content
export const infraAndCI: string[] = [
  "GitHub Actions", "CircleCI", "Jenkins", "Docker",
  "AWS (EC2, S3, Lambda)",
];

// was `aiTools` — you listed no AI tools, so this now holds data & methodologies
export const dataAndMethodologies: string[] = [
  "PostgreSQL", "MongoDB", "DynamoDB", "ETL Validation",
  "Shift-Left Testing", "BDD", "Agile/SAFe",
];

export const cloudTools: string[] = [
  ...infraAndCI,
];

export const aiTools: string[] = dataAndMethodologies;
