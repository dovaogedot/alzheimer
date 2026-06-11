type Project = {
  id: string
  name: string
  role: string
  years: string
  tags: string[]
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
  skills: string[]
  contacts: {
    email: string
    github: string
    linkedin: string
  }
  projects: Project[]
}