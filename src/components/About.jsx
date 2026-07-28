import { useEffect, useRef } from 'react'

const roles = [
  {
    title: 'Developer',
    subtitle: 'Engineering',
    tags: ['Frontend', 'React', 'JavaScript', 'Responsive Design'],
    icon: 'code',
  },
  {
    title: 'Designer',
    subtitle: 'Creative',
    tags: ['UI Design', 'UX', 'Design Systems', 'Prototyping'],
    icon: 'palette',
  },
  {
    title: 'Student',
    subtitle: 'Academic',
    tags: ['BSIT Student', 'Tech Explorer', 'Continuous Learner'],
    icon: 'school',
  },
]

const stats = [
  { value: '5+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
]

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
            The Philosophy
          </p>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight max-w-3xl">
            I don't just build websites. I create digital experiences.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-32">
          <div className="md:col-span-7 reveal">
            <div className="w-full h-[500px] md:h-[600px] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] border border-gray-200 dark:border-[#334155] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/10 to-transparent" />
              <svg
                className="w-32 h-32 text-gray-400 dark:text-[#4c4546] relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4 reveal" style={{ animationDelay: '0.2s' }}>
            {roles.map((role) => (
              <div
                key={role.title}
                className="group p-6 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-xl hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300 hover:shadow-[0_2px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_32px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-xl">
                    {role.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-black dark:text-white font-[family-name:var(--font-display)]">
                      {role.title}
                    </h3>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7e7576] dark:text-[#94a3b8] tracking-wider uppercase">
                      {role.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-[#334155] font-[family-name:var(--font-mono)] text-[10px] text-[#4c4546] dark:text-[#94a3b8] tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
              The Story
            </p>
            <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-tight mb-6">
              A Passionate Developer Based in the Philippines
            </h3>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed mb-6">
              I'm a web developer with a strong passion for creating beautiful,
              functional, and user-centered digital experiences. I enjoy working
              with modern technologies and am always looking for new challenges
              that push my skills further.
            </p>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed mb-10">
              When I'm not coding, you can find me exploring new tools,
              learning about design trends, or collaborating with like-minded
              creatives. I believe great software is built with both technical
              precision and creative vision.
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
