import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'PROJECTS', href: '#projects' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <nav className="flex items-center gap-2 bg-white/80 dark:bg-[#1a1c1c]/80 backdrop-blur-xl border border-gray-200 dark:border-[#334155] rounded-full px-3 py-2 shadow-[0_2px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_32px_rgba(0,0,0,0.2)]">
        <a href="#home" className="flex items-center gap-2 px-4 py-1.5 font-[family-name:var(--font-mono)] text-sm font-medium text-black dark:text-white tracking-wider">
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
          JKG.
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-[family-name:var(--font-mono)] font-medium text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#334155] transition-colors text-[#4c4546] dark:text-[#94a3b8]"
          aria-label="Toggle theme"
        >
          <span className="material-symbols-outlined text-[20px]">
            {theme === 'light' ? 'dark_mode' : 'light_mode'}
          </span>
        </button>

        <a
          href="#contact"
          className="hidden md:flex px-5 py-2 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold font-[family-name:var(--font-mono)] tracking-wider rounded-full hover:opacity-80 transition-opacity"
        >
          CONTACT
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#334155] transition-colors text-[#4c4546] dark:text-[#94a3b8]"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[20px]">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-full mt-2 left-6 right-6 bg-white/95 dark:bg-[#1a1c1c]/95 backdrop-blur-xl border border-gray-200 dark:border-[#334155] rounded-2xl shadow-lg dark:shadow-black/20">
          <ul className="flex flex-col items-center py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-6 py-3 text-sm font-[family-name:var(--font-mono)] font-medium text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#334155] transition-colors tracking-widest"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full px-6 pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold font-[family-name:var(--font-mono)] tracking-wider rounded-full"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
