/**
 * Very simple code highlighting.
 */
export const Code = ({ children }: { children: string }) => {
  const stripMargin = (text: string) =>
    text.trim()
      // remove everything up to margin marker ('|') on each line
      .replace(/^.*?\|/gm, '')

  return <>
    <code>
      {stripMargin(children)
        .split('\n')
        .map(row => {
          // comment
          if (row.startsWith('#'))
            return <span className="text-zinc-600">{row}</span>

          // command
          if (row.startsWith('$')) {
            const parts = row.split(' ')

            // remove prompt
            parts.shift()

            return <>
              <span className="text-yellow-300">{`$ `}</span>
              <span className="text-zinc-300">{`${parts.shift()} `}</span>
              <span className="text-zinc-400">{parts.join(' ')}</span>
            </>
          }

          // fallback
          return row
        })
        .reduce((acc, x) => <>{acc}<br></br>{x}</>)}
    </code>
  </>
}

/**
 * Renders an individual project detail view.
 */
export const Project = ({ project, index }: { project: Project, index: number }) => {
  const numString = (index + 1).toString().padStart(2, '0')

  return (
    <section id={project.id} className="mb-32 scroll-mt-24 pt-8">
      <div className="max-w-2xl">
        <div className="flex items-center space-x-4 mb-2">
          <span className="font-mono text-xs text-accent font-bold">{numString}</span>
          <span className="h-px w-12 bg-border-dark"></span>
          <span className="font-mono text-[10px] text-text-main opacity-50 uppercase tracking-widest">Active Project</span>
        </div>

        <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">{project.name}</h3>

        <div className="flex space-x-8 font-mono text-xs uppercase tracking-widest mb-10">
          <div className="space-y-1">
            <p className="opacity-40">Role</p>
            <p className="font-bold">{project.role}</p>
          </div>
          <div className="space-y-1">
            <p className="opacity-40">Years</p>
            <p className="font-bold">{project.years}</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed opacity-80 mb-8">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tech) => (
            <span key={tech} className="px-3 py-1 border border-border-light rounded-full text-[10px] font-mono uppercase">
              {tech}
            </span>
          ))}
        </div>

        {project.usage && (
          <div className="bg-bg-panel border-l-2 border-accent p-6 flex flex-col mb-10">
            <pre className="font-mono text-sm space-y-2 opacity-90 overflow-x-auto whitespace-pre-wrap">
              <Code>{project.usage}</Code>
            </pre>
          </div>
        )}

        <div className="flex gap-4">
          {project.links.map((link, idx) => (
            link.label.toLowerCase() === 'demo' ? (
              <a key={idx} href={link.url} className="bg-accent text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                {link.label}
              </a>
            ) : (
              <a key={idx} href={link.url} className="border border-accent text-accent px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-colors">
                {link.label}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  )
}