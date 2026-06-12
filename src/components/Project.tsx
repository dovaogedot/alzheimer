import { Code } from "@components"
import { Fragment } from "react/jsx-runtime"
import { ButtonLink } from "./ButtonLink"
import pathRiderImage from "@public/path-rider.png"

/**
 * Renders an individual project detail view.
 */
export const Project = ({ project }: { project: Project }) => {
  return <>
    <div className="flex flex-col gap-6">

      {/* Company */}
      {project.companies && (
        <div className="flex gap-2 xl:gap-6 items-center relative overflow-x-scroll">
          {project.companies.flatMap((company, idx) => (
            <Fragment key={company.name}>
              {idx > 0 && <div className="font-bold text-2xl text-zinc-600">::</div>}
              <div key={company.name} className="flex items-center bg-zinc-950 text-yellow-300 text-4xl font-extrabold z-10">
                {company.url
                  ? <a href={company.url}>{company.name}</a>
                  : <span>{company.name}</span>}
              </div>
            </Fragment>
          ))}
        </div>
      )}

      {/* Role & Years */}
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

      {project.id === 'path-rider' && <>
        <img src={pathRiderImage} alt="Path Rider: Offline Car Game" className="max-w-2xl"></img>
      </>}

      {/* Keywords */}
      <div className="flex gap-4 overflow-x-scroll">
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
      {project.links && <div className="flex gap-4 overflow-x-scroll">
        {project.links.map((link, idx) => (
          <ButtonLink key={idx} href={link.url} text={link.label} type={link.label.toLowerCase() === 'demo' ? 'yellow' : 'black'} />
        ))}
      </div>}

    </div>
  </>
}
