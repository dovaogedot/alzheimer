import { useEffect, useState } from "react"

export const useHash = () => {
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach(section => {
        const sectionTop = window.scrollY + section.getBoundingClientRect().top
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute('id') || ''
        }
      })

      // If at the bottom of the page, activate the very last section
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.documentElement.scrollHeight - 10) {
        const lastSection = sections[sections.length - 1]
        if (lastSection) {
          current = lastSection.getAttribute('id') || ''
        }
      }

      if (current) {
        setCurrentHash(`#${current}`)
      } else if (sections.length > 0) {
        setCurrentHash(`#${sections[0].getAttribute('id')}`)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentHash])

  return currentHash
}