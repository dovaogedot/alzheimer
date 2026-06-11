type HeaderProps = {
  name: string
  title: string
}

/**
 * Header with person's name and title.
 */
export const Header = ({ name, title }: HeaderProps) => {
  const nameParts = name.split(' ')
  return <>
    <header>
      <h1 className="text-4xl font-extrabold tracking-tighter uppercase">
        <a href='#about' className="text-zinc-200 tracking-widest">
          {nameParts.map((part) => (
            <div key={part} className="leading-8">{part}</div>
          ))}
        </a>
      </h1>
      <p className="uppercase font-medium tracking-widest text-zinc-600 mt-2">{title}</p>
    </header>
  </>
}
