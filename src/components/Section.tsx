type SectionProps = {
  id: string
  title: string
  className?: string
  children?: React.ReactNode
}

/**
 * Major section of the page.
 */
export const Section = ({ id, title, className, children }: SectionProps) => {
  return <>
    <section id={id} className="xl:scroll-mt-16 flex flex-col">
      <h3 className="px-1 wrap-break-word text-5xl font-extrabold mb-6 text-zinc-950 bg-yellow-300 selection:text-yellow-300 selection:bg-zinc-950">{title}</h3>
      <div className={className}>{children}</div>
    </section>
  </>
}
