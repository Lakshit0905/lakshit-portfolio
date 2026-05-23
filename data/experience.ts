import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "silverxis-current",
    company: "SilverXis Inc",
    companyInitial: "S",
    role: "Senior Software Development Engineer in Test",
    period: "Dec 2022 – Present",
    location: "Irving, TX",
    current: true,
    description:
      "Architected enterprise-grade QA automation ecosystem for large-scale web and API platforms, modernizing CI/CD quality engineering practices and enabling high-velocity releases across Agile squads.",
    achievements: [
      "Architected Enterprise QA Automation Platform: Replaced a legacy Cypress framework with a scalable Playwright + TypeScript test ecosystem, enabling 3,000+ automated web/API test flows, reducing flaky failures from 22% to under 2%, and accelerating regression cycles by 65% through CI/CD-driven quality engineering.",
      "Engineered Intelligent CI/CD Quality Gates: Implemented GitHub Actions-based pipelines with Dockerized execution environments and distributed Playwright test sharding, reducing pipeline execution time from 3.5 hours to under 50 minutes while improving test stability and deployment confidence across Agile release cycles.",
      "Built Robust API Automation Layer: Designed REST Assured / Playwright-based API testing framework with SQL validation and contract testing, improving backend defect detection rate and enabling early shift-left validation across microservices-based architecture.",
      "Designed Decentralized Quality Engineering Model: Standardized SDET guardrails across 6 cross-functional Agile squads, accelerating feature delivery velocity by 20% and mitigating regression risks by 15% through upstream defect detection.",
      "Scaled High-Velocity QA Automation Ecosystem: Spearheaded integration of AI failure analysis and test generation into CI/CD pipelines, optimizing 3,000+ test cases, reclaiming 40% manual triage effort and driving a 35% gain in signal accuracy."
    ],
    techStack: [
      "Playwright",
      "TypeScript",
      "GitHub Actions",
      "Docker",
      "REST Assured",
      "SQL",
      "CI/CD",
      "Microservices",
      "Java"
    ],
  },
  {
    id: "servicelink",
    company: "ServiceLink (Fidelity National Financial)",
    companyInitial: "S",
    role: "Software Engineer in Test",
    period: "Jun 2022 – Nov 2022",
    location: "Irving, TX",
    description:
      "Built and scaled automated QA systems for enterprise transaction platforms handling high-volume financial workflows, improving regression efficiency and release reliability.",
    achievements: [
      "Rebuilt End-to-End Test Automation: Replaced manual testing with an automated UI framework for a platform handling 500K+ monthly transactions, cutting manual QA effort by 80% and saving 320 engineering hours every month.",
      "Built Automated API Test Suite: Designed a modular testing system for 140+ REST endpoints, reaching 94% coverage and ensuring every code merge is automatically checked for bugs.",
      "Streamlined Release and Compliance Workflows: Implemented a BDD framework with clear documentation, enabling instant validation by product and compliance teams and cutting a 2-week release bottleneck.",
      "Led Data Migration Testing Strategy: Managed validation of data migration across 3 legacy systems into a unified database, writing 200+ validation scripts to prevent data loss and schema inconsistencies."
    ],
    techStack: [
      "Selenium",
      "Java",
      "REST Assured",
      "BDD",
      "Cucumber",
      "SQL",
      "Jenkins"
    ],
  },
  {
    id: "silverxis-previous",
    company: "SilverXis Inc",
    companyInitial: "S",
    role: "Test Engineer",
    period: "Jun 2021 – Dec 2021",
    location: "Irving, TX",
    description:
      "Developed foundational automation frameworks and performance testing systems for enterprise QA modernization initiatives.",
    achievements: [
      "Designed Java/Selenium/TestNG/Maven automation framework from scratch using Page Object Model and data-driven patterns, eliminating 2+ hours of daily manual regression and achieving 78% automation coverage within 6 months.",
      "Optimized Jenkins CI/CD pipelines for parallel execution across 4 agents, reducing deployment validation time by 30% and accelerating release cadence from bi-weekly to weekly.",
      "Built iOS mobile automation suite using Appium with dynamic locators and XCUITest integration, increasing mobile regression coverage by 60% and reducing escape defects.",
      "Conducted JMeter and LoadRunner performance testing for APIs under 5,000 concurrent users, identifying critical bottlenecks and preventing an estimated 40% revenue impact."
    ],
    techStack: [
      "Java",
      "Selenium",
      "TestNG",
      "Maven",
      "Appium",
      "Jenkins",
      "JMeter",
      "LoadRunner"
    ],
  },
  {
    id: "accenture",
    company: "Accenture",
    companyInitial: "A",
    role: "Test Engineering Analyst",
    period: "Mar 2016 – Jul 2019",
    location: "Pune, IN",
    description:
      "Worked on large-scale banking and payments systems, building automation frameworks, performance testing pipelines, and data validation systems.",
    achievements: [
      "Built and scaled Cucumber/Gherkin BDD framework automating 1,000+ regression test cases for a Barclays payment platform, saving 148 engineer-hours per release cycle and reducing testing cycle by 2 days; awarded Accenture Excellence in Software Testing Award.",
      "Optimized 350+ SQL queries for automated data validation across DB2 and SQL Server, converting manual verification workflows into automated pipelines.",
      "Designed end-to-end test plans across 5 release phases for high-volume payment processing system, reducing critical bugs in UAT by 20% and production defects from 5 to under 2 per release.",
      "Improved transaction processing performance from 4 hours to under 100 seconds (99.6% reduction) using targeted load testing and bottleneck analysis with HP-QC.",
      "Led automation training sessions for 15-member team and received ‘Star of the Month’ twice for delivery excellence and enablement impact."
    ],
    techStack: [
      "Cucumber",
      "Gherkin",
      "Selenium",
      "Java",
      "SQL",
      "DB2",
      "HP QC",
      "Performance Testing"
    ],
  },
];