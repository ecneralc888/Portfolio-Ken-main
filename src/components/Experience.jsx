import { useEffect, useRef } from 'react'
import { experience, organizations } from '../data/experience'

export default function Experience() {
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
    <section id="experience" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="reveal group bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl p-8 hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 bg-[#0058be]/10 dark:bg-[#60a5fa]/10 text-[#0058be] dark:text-[#60a5fa] font-[family-name:var(--font-mono)] text-[10px] tracking-wider rounded-full uppercase">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-[#4c4546] dark:text-[#94a3b8] font-medium">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-[#7e7576] dark:text-[#94a3b8] font-[family-name:var(--font-mono)] tracking-wider whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              <p className="text-[#4c4546] dark:text-[#94a3b8] mb-4 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4c4546] dark:text-[#94a3b8]">
                    <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-[16px] mt-0.5">arrow_right</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {organizations.map((org, index) => (
            <div
              key={org.title}
              className="reveal group bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl p-8 hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300"
              style={{ animationDelay: `${(experience.length + index) * 0.15}s` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-[#334155] text-[#4c4546] dark:text-[#94a3b8] font-[family-name:var(--font-mono)] text-[10px] tracking-wider rounded-full uppercase inline-block mb-2">
                    Academic
                  </span>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white">
                    {org.title}
                  </h3>
                  <p className="text-[#4c4546] dark:text-[#94a3b8] font-medium">
                    {org.organization}
                  </p>
                </div>
                <p className="text-sm text-[#7e7576] dark:text-[#94a3b8] font-[family-name:var(--font-mono)] tracking-wider whitespace-nowrap">
                  {org.period}
                </p>
              </div>
              <p className="text-[#4c4546] dark:text-[#94a3b8] mt-4 leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
