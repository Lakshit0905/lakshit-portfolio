import type { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "gpt4-test-generation",
    title: "How I used GPT-4 to generate 3,000 test cases in 20 minutes",
    excerpt:
      "A practical walkthrough of the LLM-powered test generation pipeline I built at Google — from prompt engineering to Playwright integration and CI deployment.",
    tag: "AI Testing",
    tagColor: "indigo",
    readTime: "8 min read",
    views: "12.4K views",
    date: "Mar 2024",
    url: "https://medium.com",
  },
  {
    id: "flaky-test-anatomy",
    title: "The anatomy of a flaky test: detection, prevention, and ML-based prediction",
    excerpt:
      "Deep-dive into root causes of flakiness in distributed system tests, and how I built an ML classifier to predict them before they hit CI.",
    tag: "Architecture",
    tagColor: "zinc",
    readTime: "12 min read",
    views: "8.1K views",
    date: "Jan 2024",
    url: "https://medium.com",
  },
  {
    id: "load-testing-2m-rps",
    title: "Load testing at 2M RPS: lessons from testing DynamoDB's SDK",
    excerpt:
      "How we designed, executed, and analyzed load tests at extreme scale using k6, custom Go scripts, and real-time Grafana dashboards at AWS.",
    tag: "Performance",
    tagColor: "cyan",
    readTime: "10 min read",
    views: "6.7K views",
    date: "Sep 2023",
    url: "https://medium.com",
  },
  {
    id: "sdet-to-staff",
    title: "From SDET to staff engineer: the skills nobody tells you about",
    excerpt:
      "What it actually takes to grow beyond IC SDET — system design thinking, cross-functional influence, and building engineering culture around quality.",
    tag: "Career",
    tagColor: "emerald",
    readTime: "6 min read",
    views: "21K views",
    date: "Jul 2023",
    url: "https://medium.com",
  },
];
