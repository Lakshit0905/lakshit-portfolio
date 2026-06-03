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
      "Architected a scalable Playwright + TypeScript automation framework: Automated 450+ UI and API regression scenarios, reduced flaky test failures from nearly 12% to below 4% by introducing retry-aware reporting, stable locator strategies, and isolated test state all monitored through Allure dashboards across sprints deployments.", 
      "Optimized CI/CD Automation Execution: Implemented GitHub Actions pipelines with Dockerized Playwright runs and parallel execution, reducing regression runtime from 3.5 hours to under 1 hour across sprint deployments.",
      "Built Robust API Automation Layer: Tested 200+ endpoints across 12 microservices using Playwright’s API client, adding Pact contract tests and SQL data validation to catch 30% of backend defects left before they reached manual QA.",
      "Provisioned reliable test infrastructure: Ran scheduled Playwright suites on auto-provisioned AWS EC2 environments with seeded data, giving each sprint a consistent baseline and cutting environment-related false failures by 10%",
      "Streamlined defect reporting: Built a TypeScript utility that parsed CI failures,auto-filed Jira tickets with logs,screenshots, and routed to owners based on recent code changes ,cutting defect-reporting time from 20 minutes to under 3"
    ],
    techStack: [
      "Playwright",
      "TypeScript",
      "SQL",
      "GitHub Actions",
      "Docker",
      "Parallel test execution",
      "AWS(EC2)",
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
      "Created Automated API Validation Suite: Implemented Postman-based API automation for a mortgage application, covering 50+ APIs, improving backend validation coverage,reducing manual API testing effort by 55% across releases.", 
    ],
    techStack: [
      "Python",
      "Pytest",
      "Selenium",
      "Postman",
      "UI regression automation",
      "API validation/automation",
      "shift-left QA"
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
      "Automated 120+ regression test cases using Java, Selenium WebDriver, TestNG, and Maven, reducing manual testing effort by 45% across sprint release cycles and improving test execution consistency",
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
    role: "Test Engineering Analyst",
    period: "Mar 2016 – Jul 2019",
    location: "Pune, IN",
    description:
      "Worked on large-scale banking and payments systems, building automation frameworks, performance testing pipelines, and data validation systems.",
    achievements: [
      "Built and scaled a Cucumber/Gherkin BDD framework that automated 1,000+ regression test cases across a Barclays payment platform; saved 148 engineer-hours per monthly release cycle and shortened sprint testing lifecycle by 2 days — recognized with Accenture Excellence in Software Testing Award (Q1 2019).",
      "Optimized 350+ complex SQL queries for automated data validation against Mainframe DB2 and SQL Server, converting entirely manual data verification workflows into scheduled automated pipelines.",
      "Designed end-to-end test plans across 5 release phases for high-volume payment processing system, reducing critical bugs in UAT by 20% and production defects from 5 to under 2 per release.",
      "Executed manual and exploratory testing across functional, regression, and UAT cycles for a banking application, uncovering critical application issues through detailed validation and contributing to a 95% on time release rate.",
      "dentified and reported 60+ defects across agile sprints in HP QC by documenting clear reproduction steps, environment details, and severity levels, resulting in faster issue resolution and reduced developer follow ups."
    ],
    techStack: [
      "Cucumber",
      "Gherkin",
      "Selenium",
      "Java",
      "Mainframe DB2,",
      "SQL",
      "HP QC",
      "Regression Testing"
    ],
  },
];