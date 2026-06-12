import { useEffect, useState } from "react"

export const useVisibleSections = () => {
  const [visibleSections, setVisibleSections] = useState(new Set<string>())

  useEffect(() => {
    const sections = document.querySelectorAll('#section-container section[id]')

    const observer = new IntersectionObserver(entries => {
      setVisibleSections(prev => {
        const next = new Set(prev)

        entries.forEach(entry => {
          const sectionId = `#${entry.target.id}`
          if (entry.isIntersecting) {
            next.add(sectionId)
          } else {
            next.delete(sectionId)
          }
        })

        return next
      })
    }, {
      threshold: 0.8,
    })

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return visibleSections
}