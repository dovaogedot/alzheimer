/**
 * Defines the static data for the portfolio.
 */
export const data: PortfolioData = {
  name: "Vladyslav Harvilov",
  title: "Software Engineer",
  about: `I am a software engineer who has experience with *backend*, *frontend*, and *full-stack* work, mostly with *Java*, *TypeScript*, *React*, and *C#*.
  Over the years, I have worked on *business systems*, *web apps*, and side projects of my own. Some of those were serious production systems, like *flight cost calculating* and *online betting platforms*. Others were just built because I wanted to try an idea, learn something new, or make a tool that solves a small personal problem in a better way.
  I have also spent a lot of time with *Scala* and *Rust* because I like their functional side. I prefer writing code in functional style but have no problems with adapting to any existing style.
  I like code that is clear, modular, and easy to expand. I enjoy learning by building, and I usually care more about making something useful than making it look fancy.`,
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
      name: { short: "Migraine" },
      role: "Creator",
      years: "2026",
      description: "Migraine is a CLI tool that restores pixel art from upscaled and compressed state into its original form using algorithms from signal processing and data science to infer color palette and dimensions.",
      keywords: ["rust", "signal processing", "data science"],
      links: [
        { label: "Source", url: "https://github.com/dovaogedot/migraine" },
      ],
      usage: `
        |# fully automatic restore
        |$ migraine ./image.jpg
        |
        |# provide guidance to achieve even better results
        |$ migraine ./image.jpg --width 140 --height 120 --colors
      `
    },
    {
      id: "alzheimer",
      name: { short: "Alzheimer" },
      role: "Creator",
      years: "2026",
      description: "Compact and beautiful personal website for showcasing your portfolio. Statically generated HTML at build time. Optimized for search engines.",
      keywords: ["TypeScript", "React", "Vike", "SSG", "SEO"],
      links: [
        { label: "Source", url: "https://codeberg.org/dovaogedot/alzheimer" },
        { label: "Demo", url: "https://dovaogedot.online" }
      ],
    },
    {
      id: "match-me",
      name: { short: "Ride2gether" },
      role: "Backend Developer",
      years: "2026",
      description: "A mobile-friendly web application that matches drivers and passengers based on travel preferences, personality, and proximity. Users can connect with compatible matches and communicate through real-time chat.",
      keywords: ["Java", "Spring", "Docker"],
      links: [
        { label: "Source", url: "https://github.com/dovaogedot/match-me" }
      ]
    },
    {
      id: "kood",
      name: {
        short: "//kood",
        long: "//kood projects",
      },
      companies: [{
        name: "//kood",
        url: "https://kood.tech",
      }],
      role: "Student",
      years: "2025 - 2026",
      description: "An awesome school that gives you a platform for making new friends, finding ideas for new projects and simultaneously improving your coding skills under a heavy time pressure. Can't say that I have put my soul into these projects but it is a cool experience nonetheless.",
      keywords: ["Java", "Spring", "TypeScript", "React", "REST", "WebSocket"],
      links: [
        { label: "Movie API", url: "https://github.com/dovaogedot/movie-api" },
        { label: "Info Screens", url: "https://github.com/dovaogedot/info-screens" },
        { label: "Notes", url: "https://github.com/dovaogedot/notes-tool" },
        { label: "Itinerary", url: "https://github.com/dovaogedot/itinerary" },
      ],
    },
    {
      id: "path-rider",
      name: { short: "Path Rider" },
      role: "Co-Creator",
      years: "2025",
      description: "A 3D game made in 48 hours in Unity for a Game Jam. 2nd place.",
      keywords: ["Unity", "C#", "Blender"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ANU.ForkedPathRider" },
        { label: "Apple Store", url: "https://apps.apple.com/us/app/path-rider-offline-car-game/id6757637294" },
      ]
    },
    {
      id: "efbet",
      name: { short: "Efbet" },
      companies: [
        {
          name: "Efbet",
          url: "https://www.linkedin.com/company/efbet-casino-and-sport"
        },
        {
          name: "GlobalLogic",
          url: "https://www.globallogic.com/"
        },
        {
          name: "Sportradar",
          url: "https://sportradar.com/"
        }
      ],
      role: "Full Stack Developer",
      years: "2020-2023",
      description: "Online casino and match betting website maintenance.",
      keywords: ["knockout.js", "JavaScript", "C#", "Jenkins", "Drupal", "Jira", "IIS"]
    },
    {
      id: "flight-calculator",
      name: {
        short: "ACC",
        long: "Antonov Commercial Calculator",
      },
      companies: [{
        name: "Antonov Airlines",
        url: "https://antonov-airlines.aero/",
      }],
      role: "Developer",
      years: "2018-2020",
      description: "Worked on a commercial flight cost calculation system for Antonov Airlines. Developed a user collaboration module that helped logistics, operations, and finance teams work together in one place, share information, track requests, and make the process of planning cargo flights and calculating transportation costs easier.",
      keywords: ["C#", ".NET", "WPF", "WCF", "IIS", "EF"],
    },
    {
      id: "key-logger",
      name: { short: "Key Logger" },
      role: "Creator",
      years: "2018",
      description: "Not my proudest achievement. But one of the first programs that I wrote. Very simple keylogger that writes keystrokes to a local file and sends it to FTP server.",
      keywords: ["Java", "FTP", "Cyber Security"],
      links: [
        { label: "Source", url: "https://github.com/dovaogedot/dKeyLogger" }
      ]
    },
  ]
} as const
