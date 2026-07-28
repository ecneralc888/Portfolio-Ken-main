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
      className="min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-[#334155] bg-white dark:bg-[#1a1c1c] mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-soft" />
              <span className="text-xs font-[family-name:var(--font-mono)] text-[#4c4546] dark:text-[#94a3b8] tracking-wider">
                AVAILABLE FOR WORK
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight mb-6">
              Hi, I'm John Ken.{' '}
              <span className="text-[#0058be] dark:text-[#60a5fa]">
                Front End Developer.
              </span>
            </h1>

            <p className="text-lg text-[#4c4546] dark:text-[#94a3b8] leading-relaxed max-w-lg mb-10">
              Passionate about crafting clean, user-friendly digital experiences.
              I bring ideas to life through code and creative design.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-gray-300 dark:border-[#334155] text-[#4c4546] dark:text-[#94a3b8] hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg transition-colors"
              >
                CONTACT ME
              </a>
            </div>
          </div>

          <div className="relative reveal flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] border border-gray-200 dark:border-[#334155] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/10 to-transparent" />
              <svg
                className="w-28 h-28 text-gray-400 dark:text-[#4c4546] relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            <div className="absolute -top-4 -right-4 bg-white dark:bg-[#1a1c1c] backdrop-blur-xl border border-gray-200 dark:border-[#334155] rounded-xl px-4 py-3 shadow-lg dark:shadow-black/20 animate-float">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[#4c4546] dark:text-[#94a3b8]">
                React.js & Tailwind
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#1a1c1c] dark:bg-black border border-[#334155] dark:border-[#334155] rounded-xl px-4 py-3 shadow-lg dark:shadow-black/30 animate-float" style={{ animationDelay: '2s' }}>
              <p className="font-[family-name:var(--font-mono)] text-xs text-gray-300">
                <span className="text-[#0058be]">const</span>{' '}
                <span className="text-green-400">dev</span> ={' '}
                <span className="text-yellow-300">"creative"</span>;
              </p>
            </div>

            <div className="absolute top-1/2 -right-6 bg-white dark:bg-[#1a1c1c] backdrop-blur-xl border border-gray-200 dark:border-[#334155] rounded-xl w-12 h-12 flex items-center justify-center shadow-lg dark:shadow-black/20 animate-float" style={{ animationDelay: '4s' }}>
              <svg className="w-6 h-6 text-[#4c4546] dark:text-[#94a3b8]" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C24.2467 28.5 28.5 24.2467 28.5 19C28.5 13.7533 24.2467 9.5 19 9.5C13.7533 9.5 9.5 13.7533 9.5 19C9.5 24.2467 13.7533 28.5 19 28.5Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M9.5 19H28.5" stroke="currentColor" strokeWidth="2"/>
                <path d="M19 9.5V28.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
