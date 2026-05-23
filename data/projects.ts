import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-test-generation-engine",
    title: "AI Test Generation Engine",
    description:
      "Built a LangChain + Claude API pipeline that ingests OpenAPI 3.0 specs and generates executable Playwright test skeletons with assertion logic, reducing test authoring time per endpoint from 45 minutes to under 8 minutes.",
    techStack: ["LangChain", "Claude API", "OpenAPI 3.0", "Playwright", "TypeScript"],
    githubUrl: "https://github.com",
  },
  {
    id: "llm-regression-testing-framework",
    title: "LLM Regression Testing Framework",
    description:
      "Designed an evaluation harness using pytest and custom scoring functions to detect prompt regressions, output drift, and quality degradation across model versions, applied to internal GenAI feature releases.",
    techStack: ["Python", "pytest", "LLM Evaluation", "Scoring Functions", "GenAI"],
    githubUrl: "https://github.com",
  },
  {
    id: "autonomous-flakiness-detector",
    title: "Autonomous Flakiness Detector",
    description:
      "Engineered a Python-based CI analytics tool that analyzes test run history, applies statistical anomaly detection, and auto-quarantines flaky tests with Slack alerting, reducing CI flakiness noise by 87%.",
    techStack: ["Python", "CI/CD", "Statistical Analysis", "Slack API", "GitHub Actions"],
    githubUrl: "https://github.com",
  },
  {
    id: "quality-intelligence-dashboard",
    title: "Quality Intelligence Dashboard",
    description:
      "Built a Grafana dashboard consuming GitHub Actions test telemetry, surfacing release confidence scores, coverage deltas, and SLO burn rates for engineering leadership.",
    techStack: ["Grafana", "GitHub Actions", "Prometheus", "Data Visualization"],
    githubUrl: "https://github.com",
  },
];