import clsx from "clsx"
import { ArrowRight } from "lucide-react"
import { useContext, createContext } from "react"
import { useHash } from "@hooks"

const HashContext = createContext('')

type SidebarProps = {
  className?: string
  children?: React.ReactNode
}

/**
 * Simple sidebar that tracks current location hash.
 */
export const Sidebar = ({ className, children }: SidebarProps) => {
  const currentHash = useHash()

  return <>
    <HashContext.Provider value={currentHash}>
      <ul className={clsx(className, "flex flex-col gap-8")}>
        {children}
      </ul>
    </HashContext.Provider>
  </>
}

type SidebarGroupProps = {
  label: string
  children?: React.ReactNode
}

/**
 * Groups sidebar items with a label above.
 */
export const SidebarGroup = ({ label, children }: SidebarGroupProps) => {
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
        "text-lg tracking-widest uppercase outline-none h-8 flex items-center hover:text-yellow-300 transition-all focus-within:text-yellow-300",
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
