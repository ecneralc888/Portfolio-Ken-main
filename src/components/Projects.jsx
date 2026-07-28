import { useEffect, useRef } from 'react'

const featuredProject = {
  title: 'E-Commerce Platform',
  description:
    'A full-stack e-commerce website with product listings, cart functionality, and secure checkout integration. Built with modern technologies for a seamless shopping experience.',
  tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
  live: '#',
  code: '#',
}

const secondaryProjects = [
  {
    title: 'Task Management App',
    description:
      'A sleek productivity app that lets users create, organize, and track tasks with drag-and-drop boards.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    live: '#',
    code: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A real-time weather application displaying current conditions and forecasts using a third-party API.',
    tags: ['JavaScript', 'REST API', 'CSS3'],
    live: '#',
    code: '#',
  },
]

export default function Projects() {
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
    <section id="projects" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
            Selected Works / 2024
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight">
            Built with architectural{' '}
            <span className="text-[#0058be] dark:text-[#60a5fa]">precision</span>
          </h2>
        </div>

        <div className="reveal mb-8">
          <div className="group grid grid-cols-1 md:grid-cols-5 gap-0 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl overflow-hidden hover:shadow-[0_2px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_32px_rgba(0,0,0,0.3)] hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300">
            <div className="md:col-span-3 h-48 sm:h-64 md:h-auto bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/5 to-transparent group-hover:from-[#0058be]/10 transition-all duration-500" />
              <svg
                className="w-16 h-16 text-gray-400 dark:text-[#4c4546] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors duration-300 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>

            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-[#334155] font-[family-name:var(--font-mono)] text-[10px] text-[#4c4546] dark:text-[#94a3b8] tracking-wider rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-3 group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              <a
                href={featuredProject.live}
                className="inline-flex items-center gap-2 text-sm font-semibold text-black dark:text-white hover:text-[#0058be] dark:hover:text-[#60a5fa] transition-colors font-[family-name:var(--font-mono)] tracking-wider"
              >
                VIEW CASE STUDY
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {secondaryProjects.map((project, index) => (
            <div
              key={index}
              className="reveal group bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl overflow-hidden hover:shadow-[0_2px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_32px_rgba(0,0,0,0.3)] hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0058be]/5 to-cyan-500/5 group-hover:from-[#0058be]/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                <svg
                  className="w-16 h-16 text-gray-400 dark:text-[#4c4546] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors duration-300 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-[#334155] font-[family-name:var(--font-mono)] text-[10px] text-[#4c4546] dark:text-[#94a3b8] tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-2 group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] transition-colors font-[family-name:var(--font-mono)] flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] transition-colors font-[family-name:var(--font-mono)] flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal p-6 sm:p-10 bg-black dark:bg-white rounded-2xl text-center">
          <p className="text-base sm:text-lg text-gray-400 dark:text-[#4c4546] mb-2 font-[family-name:var(--font-display)]">
            Have a vision in mind?
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white dark:text-black mb-6">
            LET'S BUILD TOGETHER
          </h3>
          <a
            href="#contact"
            className="inline-flex px-8 py-3 bg-white dark:bg-black text-black dark:text-white font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  )
}
