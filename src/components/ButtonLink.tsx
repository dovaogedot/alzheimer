import clsx from "clsx"

type ButtonLinkProps = {
  type?: 'yellow' | 'black'
  text: string
  href: string
  className?: string
}

export const ButtonLink = ({ type, text, href, className }: ButtonLinkProps) => {
  return (
    <a href={href} className={clsx(
      className,
      "px-4 py-3 text-xs font-bold uppercase tracking-widest text-nowrap",
      type === 'yellow'
        ? "border border-yellow-300 text-zinc-950 bg-yellow-300 hover:bg-zinc-950 hover:text-yellow-300 transition-colors"
        : "border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors"
    )}>
      {text}
    </a>
  )
}
