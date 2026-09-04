import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { name: 'work', path: '/work' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="grid size-7 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45">
            <span className="text-[10px] font-bold">K</span>
          </span>
          <span>ketan damle</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1 backdrop-blur-md md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-1.5 font-mono text-[13px] lowercase tracking-tight transition-colors ${
                  isActive
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <a
          href="mailto:koriigami@gmail.com"
          className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 font-mono text-[13px] text-background transition-all duration-200 hover:-translate-y-px hover:shadow-lg active:translate-y-0"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          available for work
        </a>
      </div>
    </header>
  )
}
