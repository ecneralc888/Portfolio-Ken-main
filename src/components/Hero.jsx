import { useEffect, useRef } from 'react'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const el = sectionRef.current
    if (el) {
      const reveals = el.querySelectorAll('.reveal')
      reveals.forEach((r) => observer.observe(r))
      return () => reveals.forEach((r) => observer.unobserve(r))
    }
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,88,190,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,88,190,0.05),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(96,165,250,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-[#334155] bg-white dark:bg-[#1a1c1c] mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
              <span className="text-xs font-[family-name:var(--font-mono)] text-[#4c4546] dark:text-[#94a3b8] tracking-wider">
                AVAILABLE FOR INTERNSHIP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight mb-4">
              John Ken{' '}
              <span className="text-[#0058be] dark:text-[#60a5fa]">
                Gerodias
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4c4546] dark:text-[#94a3b8] font-medium mb-3">
              Frontend Developer & BSIT Student
            </p>

            <p className="text-base text-[#4c4546] dark:text-[#94a3b8] leading-relaxed max-w-lg mb-8">
              I build responsive, accessible, and modern web applications using React, JavaScript, and Tailwind CSS. I enjoy transforming ideas into clean, user-friendly digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity"
              >
                VIEW PROJECTS
              </a>
              <a
                href="/Resume-JohnKenGerodias.pdf"
                download
                className="px-8 py-3 border border-gray-300 dark:border-[#334155] text-[#4c4546] dark:text-[#94a3b8] hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                DOWNLOAD RESUME
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] hover:bg-gray-200 dark:hover:bg-[#475569] transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] hover:bg-gray-200 dark:hover:bg-[#475569] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] hover:bg-gray-200 dark:hover:bg-[#475569] transition-all duration-300"
                aria-label="GitHub profile"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>

          <div className="relative reveal flex justify-center">
            <div className="relative">
              <div className="w-full max-w-[280px] h-[280px] sm:max-w-80 sm:h-80 md:max-w-85 md:h-96 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] border border-gray-200 dark:border-[#334155] overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="John Ken Gerodias"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#0058be]/10 dark:bg-[#60a5fa]/10 rounded-full blur-2xl" />
              <div className="absolute -top-3 -left-3 w-32 h-32 bg-[#0058be]/10 dark:bg-[#60a5fa]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
