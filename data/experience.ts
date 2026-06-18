import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "silverxis-current",
    company: "SilverXis Inc (Contract Client: Cardinal Health)",
    companyInitial: "S",
    role: "Senior Software Development Engineer in Test",
    period: "Dec 2022 – Present",
    location: "Irving, TX",
    current: true,
    description:
      "Architected scalable automation for order management, inventory, and pharmacy distribution workflows, improving CI/CD quality gates and release feedback loops.",
    achievements: [
      "Architected a scalable Playwright + TypeScript automation framework: Automated UI and API regression scenarios for order management, inventory, and pharmacy distribution workflows, reducing flaky failures from nearly 12% to below 4% through stable locator strategies, retry-aware reporting, isolated test data, and Allure-based failure tracking.",
      "Improved CI/CD test execution: Integrated Dockerized Playwright runs into GitHub Actions with parallel execution, cutting regression runtime from 3.5 hours to under 1 hour and giving teams faster feedback during sprint releases.",
      "Built API automation coverage for order and inventory services: Validated 200+ endpoints across 12 microservices using Playwright API testing, Pact contract tests, and SQL checks, helping reduce backend defect leakage by 30%.",
      "Stabilized test environments: Ran scheduled Playwright suites on AWS EC2 environments with seeded supply chain test data, creating a reliable baseline for sprint testing and reducing environment-related false failures by 10%.",
      "Automated defect triage: Built a TypeScript utility that captured failed test details, logs, and screenshots, auto-created Jira tickets, and routed issues to code owners, reducing reporting time from 20 minutes to under 3 minutes."
    ],
    techStack: [
      "Playwright",
      "TypeScript",
      "SQL",
      "GitHub Actions",
      "Docker",
      "Parallel test execution",
      "AWS (EC2)",
      "Allure",
      "Playwright API client",
      "CI/CD",
      "Microservices",
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
      "Rebuilt Mortgage Test Automation: Replaced manual testing with a Pytest-based UI automation framework for a mortgage web application, automating 40+ regression scenarios and reducing manual QA effort by 60% per sprint.",
      "Created Automated API Validation Suite: Implemented Postman-based API automation for a mortgage application, covering 50+ APIs, improving backend validation coverage and reducing manual API testing effort by 55% across releases.",
    ],
    techStack: [
      "Python",
      "Pytest",
      "Selenium",
      "Postman",
      "UI regression automation",
      "API validation/automation",
      "Shift-left QA"
    ],
  },
  {
    id: "silverxis-previous",
    company: "SilverXis Inc Intern",
    companyInitial: "S",
    role: "Test Engineer",
    period: "Jun 2021 – Dec 2021",
    location: "Irving, TX",
    description:
      "Developed foundational automation frameworks and performance testing systems for enterprise QA modernization initiatives.",
    achievements: [
      "Automated 120+ regression test cases using Java, Selenium WebDriver, TestNG, and Maven, reducing manual testing effort by 45% across sprint release cycles and improving test execution consistency.",
      "Built iOS mobile test suite using Appium with dynamic element locators and XCUITest integration; increased mobile regression coverage by 60% and reduced escape defect rate for mobile releases.",
      "Executed JMeter performance benchmarks simulating 5,000 concurrent users; identified 2 critical bottlenecks causing response time degradation under peak load, resolved by engineering team pre-launch.",
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
    role: "Sr. Test Engineering Analyst / Associate Test Analyst",
    period: "Mar 2016 – Jul 2019",
    location: "Pune, IN",
    description:
      "Worked on large-scale Barclays banking and payments systems, building BDD automation, data validation, regression, UAT, and defect management practices across release cycles.",
    achievements: [
      "Built and scaled a Cucumber/Gherkin BDD framework that automated 1,000+ regression test cases across a Barclays payment platform; saved 148 engineer-hours per monthly release cycle and shortened sprint testing lifecycle by 2 days, recognized with Accenture Excellence in Software Testing Award (Q1 2019).",
      "Optimized 350+ complex SQL queries for automated data validation against Mainframe DB2 and SQL Server, converting entirely manual data verification workflows into scheduled automated pipelines.",
      "Drove regression and UAT coverage for 4 consecutive on-schedule Barclays payment releases, validating critical transaction flows and maintaining a defect escape rate low enough to eliminate post-release rollbacks.",
      "Executed manual and exploratory testing across functional, regression, and UAT cycles for a banking application, uncovering critical application issues through detailed validation and contributing to a 95% on time release rate.",
      "Identified and reported 60+ defects across agile sprints in HP QC by documenting clear reproduction steps, environment details, and severity levels, resulting in faster issue resolution and reduced developer follow ups."
    ],
    techStack: [
      "Cucumber",
      "Gherkin",
      "Selenium",
      "Java",
      "Mainframe DB2",
      "SQL",
      "HP QC",
      "Regression Testing"
    ],
  },
];
