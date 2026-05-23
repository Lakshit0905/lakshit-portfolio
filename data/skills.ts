import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "automation",
    label: "Test Automation",
    skills: [
      { name: "Playwright", level: 95 },
      { name: "Selenium WebDriver", level: 93 },
      { name: "Cypress", level: 85 },
      { name: "Appium (iOS/Android)", level: 80 },
      { name: "WebdriverIO", level: 72 },
    ],
  },
  {
    id: "performance",
    label: "Performance Testing",
    skills: [
      { name: "k6", level: 92 },
      { name: "Gatling", level: 82 },
      { name: "JMeter", level: 78 },
      { name: "Locust", level: 68 },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Go", level: 78 },
      { name: "Bash / Shell", level: 82 },
    ],
  },
  {
    id: "api",
    label: "API & Integration",
    skills: [
      { name: "REST Assured", level: 90 },
      { name: "Postman / Newman", level: 88 },
      { name: "Pact (Contract Testing)", level: 85 },
      { name: "gRPC testing", level: 80 },
      { name: "GraphQL testing", level: 75 },
    ],
  },
];

export const cloudTools: string[] = [
  "GCP", "AWS", "Kubernetes", "Docker", "GitHub Actions",
  "Jenkins", "Terraform", "ArgoCD", "Datadog APM", "Prometheus",
  "Grafana", "Spinnaker", "InfluxDB", "OpenTelemetry", "Helm",
];

export const aiTools: string[] = [
  "LangChain", "OpenAI API", "PyTorch", "scikit-learn",
  "BigQuery ML", "Healenium", "Percy", "OpenCV", "TensorFlow",
];
