import { Code } from "@components"

/**
 * Renders an individual project detail view.
 */
export const Project = ({ project }: { project: Project }) => {
  return <>
    {/* Role & Years */}
    <div className="flex flex-col gap-10">
      <div className="flex gap-8 text-xs uppercase tracking-widest">
        <div className="space-y-1">
          <p className="text-zinc-500">Role</p>
          <p className="font-bold">{project.role}</p>
        </div>
        <div className="space-y-1">
          <p className="text-zinc-500">Years</p>
          <p className="font-bold">{project.years}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-zinc-400">{project.description}</p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-4">
        {project.keywords.map((skill) => (
          <span key={skill} className="px-3 py-1 border border-zinc-500 text-xs uppercase">
            {skill}
          </span>
        ))}
      </div>

      {/* Usage */}
      {project.usage && (
        <div className="bg-zinc-900/40 border-l-2 border-yellow-300 px-6 py-4">
          <pre className="font-mono text-sm space-y-2 opacity-90 overflow-x-auto whitespace-pre-wrap">
            <Code>{project.usage}</Code>
          </pre>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {project.links.map((link, idx) => (
          link.label.toLowerCase() === 'demo' ? (
            <a key={idx} href={link.url} className="bg-yellow-300 text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
              {link.label}
            </a>
          ) : (
            <a key={idx} href={link.url} className="border border-yellow-300 text-yellow-300 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-yellow-300 hover:text-black transition-colors">
              {link.label}
            </a>
          )
        ))}
      </div>
    </div>
  </>
}
