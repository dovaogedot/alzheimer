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
      <h1 className="text-3xl font-extrabold uppercase text-yellow-300 tracking-widest">
        <a href='#about' className="xl:hidden flex justify-between gap-4">
          <div className="leading-8">{name}</div>
        </a>
        <a href='#about' className="hidden xl:flex flex-col">
          {nameParts.map((part) => (
            <div key={part} className="leading-8">{part}</div>
          ))}
        </a>
      </h1>
      <p className="uppercase font-medium tracking-widest text-zinc-400 mt-2">{title}</p>
    </header>
  </>
}
