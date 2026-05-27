import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, BarChart2 } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Dashboards', href: '#dashboards' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { threshold: 0.4 },
    )
    links.forEach((l) => {
      const el = document.querySelector(l.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <BarChart2 size={16} className="text-white" />
          </span>
          <span className="gradient-text">DataPortfolio</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link px-3 py-1.5 text-sm font-medium rounded-md transition-colors hover:text-primary ${
                  active === l.href ? 'text-primary active' : 'text-muted-foreground'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-indigo-500" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          <button
            className="lg:hidden w-9 h-9 rounded-full glass-card flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass border-t border-border">
          <ul className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
