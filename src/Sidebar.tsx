import clsx from "clsx"
import { ArrowRight } from "lucide-react"
import { useContext, useState, useEffect, createContext } from "react"

const HashContext = createContext('')

type SidebarProps = {
  children?: React.ReactNode
}

/**
 * Simple sidebar that tracks current location hash.
 */
export const Sidebar = ({ children }: SidebarProps) => {
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
  }, [])

  return <>
    <HashContext.Provider value={currentHash}>
      <ul className="flex flex-col gap-8">
        {children}
      </ul>
    </HashContext.Provider>
  </>
}

type SidebarGroup = {
  label: string
  children?: React.ReactNode
}

export const SidebarGroup = ({ label, children }: SidebarGroup) => {
  return <>
    <li>
      <div className="mb-2 flex gap-3 items-center">
        <h2 className="text-sm uppercase tracking-widest text-zinc-700">{label}</h2>
        <span className="grow border-b border-zinc-800"></span>
      </div>
      <ul>
        {children}
      </ul>
    </li>
  </>
}

type SidebarItemProps = {
  href: string
  current?: boolean
  children?: React.ReactNode
}

export const SidebarItem = ({ href, children }: SidebarItemProps) => {
  const currentHash = useContext(HashContext)
  const selected = currentHash === href

  return <>
    <li>
      <a href={href} className={clsx(
        "text-lg tracking-widest uppercase outline-none h-8 flex items-center hover:text-yellow-300 transition-all",
        selected ? "font-bold text-yellow-300 gap-2" : undefined
      )}>
        <ArrowRight className={clsx(
          "transition-all",
          selected ? "size-3.5" : "size-0"
        )} />
        {children}
      </a>
    </li>
  </>
}
