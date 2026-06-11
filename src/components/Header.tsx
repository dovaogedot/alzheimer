type HeaderProps = {
  name: string
  title: string
}

/**
 * Header with person's name and title.
 */
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
