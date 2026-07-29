import { useEffect, useRef } from 'react'
import { education, certifications } from '../data/stats'

export default function ResumeSection() {
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
    <section id="resume" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
            Resume
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight">
            Qualifications &{' '}
            <span className="text-[#0058be] dark:text-[#60a5fa]">education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal space-y-8">
            <div>
              <h3 className="text-lg font-[family-name:var(--font-mono)] text-[#0058be] dark:text-[#60a5fa] tracking-wider uppercase mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-xl"
                  >
                    <p className="text-sm text-[#7e7576] dark:text-[#94a3b8] font-[family-name:var(--font-mono)] tracking-wider mb-1">
                      {edu.period}
                    </p>
                    <h4 className="text-lg font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-[#4c4546] dark:text-[#94a3b8]">
                      {edu.school}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-[family-name:var(--font-mono)] text-[#0058be] dark:text-[#60a5fa] tracking-wider uppercase mb-6">
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-xl"
                  >
                    <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-[18px] mt-0.5">verified</span>
                    <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm leading-relaxed">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="sticky top-32 p-8 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl text-center">
              <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-4xl mb-4 block">
                description
              </span>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-3">
                Download My Resume
              </h3>
              <p className="text-[#4c4546] dark:text-[#94a3b8] mb-6 leading-relaxed">
                Get a complete overview of my education, experience, certifications, and technical skills.
              </p>
              <p className="text-xs text-[#7e7576] dark:text-[#94a3b8] font-[family-name:var(--font-mono)] mb-6 tracking-wider">
                Last updated: July 2026
              </p>
              <a
                href="/Resume-JohnKenGerodias.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                DOWNLOAD RESUME (PDF)
              </a>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-[#334155]">
                <p className="text-xs text-[#7e7576] dark:text-[#4c4546] font-[family-name:var(--font-mono)] tracking-wider">
                  Available for internship and entry-level opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
