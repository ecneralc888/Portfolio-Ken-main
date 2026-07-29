import { useEffect, useRef } from 'react'
import { stats } from '../data/stats'

export default function About() {
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
    <section id="about" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight max-w-3xl">
            Turning ideas into{' '}
            <span className="text-[#0058be] dark:text-[#60a5fa]">clean, functional</span> web experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-24">
          <div className="reveal">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] border border-gray-200 dark:border-[#334155] overflow-hidden flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="About John Ken Gerodias"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed mb-6 text-lg">
              I'm a BSIT student at STI College Balagtas, graduating in 2026. My journey into frontend development started with curiosity about how websites work  and turned into a passion for building clean, responsive interfaces that people enjoy using.
            </p>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed mb-6">
              During my internship at Boon Pharma Corp, I worked on front-end features for an e-commerce platform, where I learned what it takes to build for real users in a professional environment. I'm currently expanding my skills in modern frameworks and best practices.
            </p>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed mb-10">
              My goal is to join a team where I can contribute to production web applications, learn from experienced developers, and grow into a confident frontend engineer.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-xl"
                >
                  <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#0058be] dark:text-[#60a5fa]">
                    {stat.value}
                  </p>
                  <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm mt-1 font-[family-name:var(--font-mono)] text-xs tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
