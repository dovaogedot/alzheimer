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
      className="inline-flex justify-between items-center gap-6 hover:text-yellow-300 transition-all outline-none focus:text-yellow-300"
    >
      <span className="text-yellow-300">{name}</span>
      <span>{urn}</span>
    </a>
  </>
}
