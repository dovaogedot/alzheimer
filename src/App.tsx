import { data } from "./data"
import { Project } from "./Project"
import { Sidebar, SidebarGroup, SidebarItem } from "./Sidebar"

type HeaderProps = {
  name: string
  title: string
}

export const Header = ({ name, title }: HeaderProps) => {
  return <>
    <header>
      <h1 className="text-2xl font-extrabold tracking-tighter uppercase">
        <a href='#about' className="text-yellow-300 tracking-widest">{name}</a>
      </h1>
      <p className="text-sm uppercase tracking-widest opacity-40 mt">{title}</p>
    </header>
  </>
}

/**
 * The root application component containing navigation and main content.
 */
export const App = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-zinc-950 text-zinc-200">

      <nav className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 md:fixed md:h-screen p-8 md:p-10 flex flex-col justify-between md:overflow-y-auto">
        <div className="space-y-12">
          <Header name={data.name} title={data.title} />

          <Sidebar>
            <SidebarGroup label="Basics">
              <SidebarItem href="#about">About</SidebarItem>
              <SidebarItem href="#skills">Skills</SidebarItem>
              <SidebarItem href="#contacts">Contacts</SidebarItem>
            </SidebarGroup>

            <SidebarGroup label="Projects">
              {data.projects.map(p => <>
                <SidebarItem key={p.id} href={'#' + p.id}>{p.name}</SidebarItem>
              </>)}
            </SidebarGroup>
          </Sidebar>

        </div>

        <div className="hidden md:block text-[10px] opacity-20 font-mono mt-12">
          © {new Date().getFullYear()} Portfolio<br />
          All Rights Reserved
        </div>
      </nav >

      <main className="flex-1 p-8 md:p-16 md:ml-64 pb-32">
        <div className="max-w-4xl">

          <section id="about" className="mb-32 scroll-mt-24">
            <h2 className="text-[10px] bg-border-dark px-2 py-1 inline-block text-text-main opacity-50 mb-8 uppercase tracking-widest font-mono">About</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl opacity-80">
              {data.about}
            </p>
          </section>

          <section id="skills" className="mb-32 scroll-mt-24 max-w-2xl">
            <h2 className="text-[10px] bg-border-dark px-2 py-1 inline-block text-text-main opacity-50 mb-8 uppercase tracking-widest font-mono">Skills</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8 font-mono text-sm opacity-90">
              {data.skills.map(skill => (
                <div key={skill} className="flex items-center gap-4">
                  <span className="text-accent">$</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="contacts" className="mb-32 scroll-mt-24 max-w-2xl">
            <h2 className="text-[10px] bg-border-dark px-2 py-1 inline-block text-text-main opacity-50 mb-8 uppercase tracking-widest font-mono">Contacts</h2>
            <div className="flex flex-col gap-6 font-mono text-sm opacity-90">
              <a href={`mailto:${data.contacts.email}`} className="inline-flex items-center gap-6 nav-item outline-none w-fit">
                <span className="text-accent">Mail</span>
                <span>{data.contacts.email}</span>
              </a>
              <a href={`https://${data.contacts.github}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 nav-item outline-none w-fit">
                <span className="text-accent">Github</span>
                <span>{data.contacts.github}</span>
              </a>
              <a href={`https://${data.contacts.linkedin}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-6 nav-item outline-none w-fit">
                <span className="text-accent">LinkedIn</span>
                <span>{data.contacts.linkedin}</span>
              </a>
            </div>
          </section>

          <div className="mb-16 scroll-mt-24 max-w-2xl">
            <h2 className="text-[10px] bg-border-dark px-2 py-1 inline-block text-text-main opacity-50 uppercase tracking-widest font-mono">Projects</h2>
          </div>

          <div className="flex flex-col gap-8">
            {data.projects.map((project, index) => (
              <Project key={project.id} project={project} index={index} />
            ))}
          </div>

        </div>
      </main>

    </div >
  )
}