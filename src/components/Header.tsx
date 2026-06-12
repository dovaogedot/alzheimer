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
      <h1 className="text-3xl leading-8 font-extrabold uppercase text-yellow-300 tracking-widest">
        <a href='#about' className="xl:hidden text-[max(min(6dvw,3.5rem),1.5rem)]">
          {name}
        </a>
        <a href='#about' className="hidden xl:flex flex-col">
          {nameParts.map((part, idx) => (
            <div key={idx}>{part}</div>
          ))}
        </a>
      </h1>
      <p className="uppercase font-medium tracking-widest text-zinc-400 mt-2">{title}</p>
    </header>
  </>
}
