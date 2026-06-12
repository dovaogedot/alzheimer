type ContactProps = {
  name: string
  proto: string
  urn: string
}

/**
 * Contact type and link.
 */
export const Contact = ({ name, proto, urn }: ContactProps) => {
  return <>
    <a href={proto + urn} target="_blank" rel="noreferrer"
      className="w-full flex items-center hover:text-yellow-300 transition-colors outline-none focus:text-yellow-300"
    >
      <span className="text-yellow-300 min-w-24 shrink-0">{name}</span>
      <span className="truncate">{urn}</span>
    </a>
  </>
}
