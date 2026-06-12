import './+Page.css'
import { data } from "@data"
import { Contact, Footer, Header, Project, Section, Sidebar, SidebarGroup, SidebarItem } from "@components"
/**
 * The root application component containing navigation and main content.
 */
export default function Page() {
  return (
    <div className="h-screen min-h-screen flex justify-center bg-zinc-950 text-zinc-200">
      <div className="flex flex-col xl:flex-row xl:max-w-fit w-full h-full items-stretch">
        {/* Left side / Navigation */}
        <nav className="px-8 py-4 xl:p-8 flex flex-col gap-12 border-b xl:border-r border-zinc-800">
          <Header name={data.name} title={data.title} />

          <Sidebar className="hidden xl:flex grow overflow-y-scroll">
            <SidebarGroup label="Basics">
              <SidebarItem href="#about">About</SidebarItem>
              <SidebarItem href="#skills">Skills</SidebarItem>
              <SidebarItem href="#contacts">Contacts</SidebarItem>
            </SidebarGroup>

            <SidebarGroup label="Projects">
              {data.projects.map(p => (
                <SidebarItem key={p.id} href={'#' + p.id}>{p.name.short}</SidebarItem>
              ))}
            </SidebarGroup>
          </Sidebar>

          <Footer className="hidden xl:flex" />
        </nav>

        {/* Right side / Content */}
        <main id="section-container" className="shrink-0 w-full xl:min-w-3xl xl:max-w-4xl h-full flex flex-col gap-16 xl:gap-32 p-4 xl:p-16 xl:pb-48 overflow-y-scroll scroll-smooth scrollbar-track-transparent">
          {/* About */}
          <Section id="about" title="About" className='flex flex-col gap-4'>
            {data.about.split('\n').map(p => { console.log(p); return p}).map((para, idx) => (
              <p key={idx} className="text-lg text-zinc-400" dangerouslySetInnerHTML={{
                __html: para
                  .replaceAll(/\*(.*?)\*/g, '<span class="text-yellow-500 font-bold">$1</span>')
                  .replaceAll(/^(I (\S*))/g, '<span class="text-zinc-100 font-bold">$1</span>')
              }} />
            ))}
          </Section>

          {/* Skills */}
          <Section id="skills" title="Skills">
            <ul className="flex justify-between gap-8 w-fit">
              {data.skills.map(category => (
                <li key={category.category} className="flex flex-col gap-2">
                  {/* Category Name */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-yellow-300 uppercase tracking-widest">{category.category}</span>
                  </div>
                  {/* List of skills */}
                  <ul className="flex flex-col">
                    {category.skills.map(skill => (
                      <li key={skill} className="text-lg text-zinc-400">{skill}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          {/* Contacts */}
          <Section id="contacts" title="Contacts">
            <ul className="flex flex-col text-lg text-zinc-400">
              {data.contacts.map(contact => (
                <li key={contact.name}>
                  <Contact name={contact.name} proto={contact.proto} urn={contact.urn} />
                </li>
              ))}
            </ul>
          </Section>

          {/* Projects */}
          {data.projects.map((project) => (
            <Section key={project.id} id={project.id} title={project.name.long ?? project.name.short}>
              <Project project={project} />
            </Section>
          ))}

          <Footer className="xl:hidden" />
        </main>
      </div>
    </div >
  )
}
