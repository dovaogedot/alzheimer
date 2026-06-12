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
    <section id={id} className="scroll-mt-16 flex flex-col">
      <h3 className="text-7xl font-extrabold mb-6">{title}</h3>
      <div className={className}>{children}</div>
    </section>
  </>
}
