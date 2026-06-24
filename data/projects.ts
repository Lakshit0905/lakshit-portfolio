import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "llm-regression-testing-framework",
    title: "LLM Regression Testing Framework",
    description:
      "Built a pytest-based evaluation harness to compare LLM outputs across prompt and model changes, using scoring functions to detect regressions, output drift, and quality degradation.",
    techStack: ["Python", "pytest", "LLM Evaluation", "Scoring Functions", "GenAI"],
    githubUrl: "https://github.com/Lakshit0905/llm-regression-framework",
  },
  {
    id: "autonomous-flakiness-detector",
    title: "Autonomous Flakiness Detector",
    description:
      "Built a Python-based CI analytics tool to analyze historical test failures, identify recurring flaky patterns, quarantine unstable tests, and send Slack alerts to reduce repeated CI investigation effort.",
    techStack: ["Python", "CI/CD", "Statistical Analysis", "Slack API", "GitHub Actions"],
    githubUrl: "https://github.com/Lakshit0905/autonomous-flakiness-detector",
  },
];
