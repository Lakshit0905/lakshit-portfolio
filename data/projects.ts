import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "llm-regression-testing-framework",
    title: "LLM Regression Testing Framework",
    description:
      "Designed an evaluation harness using pytest and custom scoring functions to detect prompt regressions, output drift, and quality degradation across model versions, applied to internal GenAI feature releases.",
    techStack: ["Python", "pytest", "LLM Evaluation", "Scoring Functions", "GenAI"],
    githubUrl: "https://github.com/Lakshit0905/llm-regression-framework",
  },
  {
    id: "autonomous-flakiness-detector",
    title: "Autonomous Flakiness Detector",
    description:
      "Engineered a Python-based CI analytics tool that analyzes test run history, applies statistical anomaly detection, and auto-quarantines flaky tests with Slack alerting, reducing CI flakiness noise by 87%.",
    techStack: ["Python", "CI/CD", "Statistical Analysis", "Slack API", "GitHub Actions"],
    githubUrl: "https://github.com",
  },
];