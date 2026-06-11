type Project = {
  id: string
  name: string
  role: string
  years: string
  keywords: string[]
  links: ProjectLink[]
  description: string
  usage: string
}

type ProjectLink = {
  label: string
  url: string
}

type PortfolioData = {
  name: string
  title: string
  about: string
  skills: { category: string, skills: string[] }[]
  contacts: {
    name: string, proto: string, urn: string
  }[]
  projects: Project[]
}