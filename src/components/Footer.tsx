import clsx from "clsx"

type FooterProps = {
  className?: string
}

/**
 * Simple footer with year, name an copyright.
 */
export const Footer = ({ className }: FooterProps) => {
  return <>
    <div className={clsx(className, "text-xs text-zinc-800 font-mono")}>
      © {new Date().getFullYear()} dovaogedot<br />
      All Rights Reserved
    </div>
  </>
}
