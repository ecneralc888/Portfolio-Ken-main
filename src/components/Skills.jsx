import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend Engineering',
    icon: 'terminal',
    span: 'col-span-12 md:col-span-8',
    skills: [
      { name: 'HTML5', icon: 'html', desc: 'Semantic markup & accessibility' },
      { name: 'CSS & Tailwind', icon: 'css', desc: 'Modern styling & utility-first CSS' },
      { name: 'ES6+ JavaScript', icon: 'javascript', desc: 'Modern JS features & patterns' },
      { name: 'React & Next.js', icon: 'react', desc: 'Component architecture & SPA', featured: true },
      { name: 'Motion', icon: 'animation', desc: 'Framer Motion & GSAP animations' },
    ],
  },
  {
    title: 'Creative Tools',
    icon: 'palette',
    span: 'col-span-12 md:col-span-4',
    skills: [
      { name: 'Figma', icon: 'draw', desc: 'UI/UX design & prototyping' },
      { name: 'UI Design', icon: 'design_services', desc: 'Visual design & systems' },
      { name: 'Wireframing', icon: 'crop_square', desc: 'Layout planning & structure' },
    ],
  },
  {
    title: 'Dev Ecosystem',
    icon: 'cloud',
    span: 'col-span-12 md:col-span-12',
    horizontal: true,
    skills: [
      { name: 'Git & GitHub', icon: 'fork_left', desc: 'Version control & collaboration' },
      { name: 'VS Code', icon: 'code', desc: 'Development environment' },
      { name: 'Vercel', icon: 'cloud_upload', desc: 'Deployment & hosting' },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight">
            My Digital Toolbox
          </h2>
          <p className="text-[#4c4546] dark:text-[#94a3b8] mt-4 max-w-xl text-lg">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`${category.span} reveal`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="h-full p-6 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-xl">
                <div className="flex items-center gap-2 mb-5">
                  <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-lg">
                    {category.icon}
                  </span>
                  <h3 className="font-[family-name:var(--font-mono)] text-xs text-[#4c4546] dark:text-[#94a3b8] tracking-[0.15em] uppercase">
                    {category.title}
                  </h3>
                </div>

                {category.horizontal ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative p-4 bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-[#334155] rounded-lg hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(0,88,190,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#4c4546] dark:text-[#94a3b8] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-all duration-300 text-xl">
                            {skill.icon}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-black dark:text-white">
                              {skill.name}
                            </p>
                            <p className="text-xs text-[#7e7576] dark:text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {skill.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative p-4 bg-gray-50 dark:bg-[#0f172a] border border-gray-100 dark:border-[#334155] rounded-lg hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(0,88,190,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          {skill.featured && (
                            <span className="inline-block px-2 py-0.5 bg-[#0058be]/10 dark:bg-[#60a5fa]/10 text-[#0058be] dark:text-[#60a5fa] font-[family-name:var(--font-mono)] text-[9px] tracking-wider rounded mb-2 uppercase">
                              Most Used
                            </span>
                          )}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-[#4c4546] dark:text-[#94a3b8] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-all duration-300 text-xl">
                              {skill.icon}
                            </span>
                            <p className="text-sm font-semibold text-black dark:text-white">
                              {skill.name}
                            </p>
                          </div>
                          <p className="text-xs text-[#7e7576] dark:text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 p-10 bg-gray-100 dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl text-center">
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#0058be] dark:text-[#60a5fa] tracking-[0.3em] uppercase mb-3">
            Constant Evolution
          </p>
          <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-2">
            Always Learning, Never Static.
          </h3>
        </div>
      </div>
    </section>
  )
}
