export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-[#334155]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a href="#home" className="font-[family-name:var(--font-mono)] text-sm font-medium text-black dark:text-white tracking-wider">
              Home
            </a>
            <div className="flex items-center gap-4">
              <a href="#projects" className="text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors">
                Projects
              </a>
              <a href="#about" className="text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors">
                About
              </a>
              <a href="#resume" className="text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors">
                Resume
              </a>
              <a href="#contact" className="text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <p className="text-xs text-[#7e7576] dark:text-[#4c4546] font-[family-name:var(--font-mono)] tracking-wider">
            &copy; {new Date().getFullYear()} Designed and developed by John Ken Gerodias
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-[#334155] text-center">
          <p className="text-[10px] text-[#7e7576] dark:text-[#4c4546] font-[family-name:var(--font-mono)] tracking-wider">
            Built with React, Tailwind CSS, and Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
