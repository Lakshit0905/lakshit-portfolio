import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "automation",
    label: "Automation & Frameworks",
    skills: [
      { name: "Playwright", level: 95 },
      { name: "Selenium", level: 90 },
      { name: "Appium", level: 80 },
      { name: "Pytest", level: 92 },
      { name: "TestNG", level: 82 },
      { name: "Cucumber/Gherkin", level: 86 },
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
      { name: "Playwright API", level: 90 },
      { name: "Postman", level: 90 },
      { name: "REST Assured", level: 88 },
      { name: "REST APIs", level: 88 },
      { name: "Pact Contract Testing", level: 84 },
      { name: "JMeter", level: 80 },
    ],
  },
];

// was `cloudTools` — renamed to match content
export const infraAndCI: string[] = [
  "GitHub Actions", "Jenkins", "Docker",
  "AWS EC2", "Allure Reports", "Jira",
];

// was `aiTools` — you listed no AI tools, so this now holds data & methodologies
export const dataAndMethodologies: string[] = [
  "SQL Server", "Mainframe DB2", "PostgreSQL", "Data Validation",
  "Shift-Left Testing", "BDD", "Agile", "UAT",
];

export const cloudTools: string[] = [
  ...infraAndCI,
];

export const aiTools: string[] = dataAndMethodologies;
