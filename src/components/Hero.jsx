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

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight mb-6">
              Hi, I'm John Ken.{' '}
              <span className="text-[#0058be] dark:text-[#60a5fa]">
                Front End Developer.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4c4546] dark:text-[#94a3b8] leading-relaxed max-w-lg mb-10">
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
            <div className="w-full max-w-[280px] h-[280px] sm:max-w-80 sm:h-80 md:max-w-85 md:h-96 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] border border-gray-200 dark:border-[#334155] flex items-center justify-center relative overflow-hidden">
              <img
                src="/profile.jpg"
                alt="John Ken Gerodias"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
