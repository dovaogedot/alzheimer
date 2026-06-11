/**
 * Defines the static data for the portfolio.
 */
export const data: PortfolioData = {
  name: "Vladyslav Harvilov",
  title: "Software Engineer",
  about: "Specialized in distributed systems and high-throughput network services. Practitioner of functional paradigms and minimalist architecture. Focused on shipping discrete, maintainable modules.",
  skills: [
    {
      category: "Languages",
      skills: ["Scala", "Rust", "Java", "TypeScript", "JavaScript", "C#"],
    },
    {
      category: "Frameworks",
      skills: ["Cats Effect", "Spring", "React"]
    },
    {
      category: "Infrastructure",
      skills: ["Docker", "PostgreSQL", "SQLite"]
    }
  ],
  contacts: [
    { name: "Email", proto: "mailto:", urn: "dovaogedot@gmail.com" },
    { name: "LinkedIn", proto: "https://", urn: "linkedin.com/in/dovaogedot" },
    { name: "Github", proto: "https://", urn: "github.com/dovaogedot" },
    { name: "Codeberg", proto: "https://", urn: "codeberg.org/dovaogedot" },
  ],
  projects: [
    {
      id: "migraine",
      name: "Migraine",
      role: "Creator",
      years: "2026",
      keywords: ["rust", "signal processing", "data science"],
      links: [
        { label: "Source", url: "https://github.com/dovaogedot/migraine" },
      ],
      description: "Migraine is a CLI tool that restores pixel art from upscaled and compressed state into its original form using algorithms from signal processing and data science to infer color palette and dimensions",
      usage: `
        |# fully automatic restore
        |$ migraine ./image.jpg
        |
        |# provide guidance to achieve even better results
        |$ migraine ./image.jpg --width 140 --height 120 --colors
      `
    },
    {
      id: "mesh-ops",
      name: "MeshOps",
      role: "Backend Developer",
      years: "2023 - 2024",
      keywords: ["Go", "Redis", "Protobuf"],
      links: [
        { label: "Source", url: "#" }
      ],
      description: "Distributed state synchronization for microservice clusters. Replaced legacy HTTP polling architecture with event-driven pub/sub over Redis scaling to 10k nodes.",
      usage: "$ make build\n$ ./meshops start background\nCluster synchronized."
    },
    {
      id: "term-ui",
      name: "TermUI",
      role: "Creator",
      years: "2022 - 2023",
      keywords: ["TypeScript", "Node.js", "CLI"],
      links: [
        { label: "Source", url: "#" },
        { label: "Demo", url: "#" }
      ],
      description: "TUI library for raw Node.js endpoints. Allows rendering complex dashboards directly in the terminal without external C++ bindings.",
      usage: "import { render } from 'term-ui';\nrender({ widgets: [cpuWidget, memWidget] });"
    }
  ]
}
