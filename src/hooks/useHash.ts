import { useEffect, useState } from "react"

export const useHash = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([])

  useEffect(() => {
    const sections = document.querySelectorAll('#section-container section[id]')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const sectionId = '#' + entry.target.id
        if (entry.isIntersecting) {
          setVisibleSections(prev => [...prev, sectionId])
        } else {
          setVisibleSections(prev => prev.filter(s => s !== sectionId))
        }
      })
    }, {
      threshold: 0.8,
    })

    sections.forEach(section => observer.observe(section))
  }, [])

  return visibleSections
}