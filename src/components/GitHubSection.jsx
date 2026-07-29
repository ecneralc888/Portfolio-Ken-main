import { useEffect, useRef } from 'react'

export default function GitHubSection() {
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

  const ghUsername = 'ecneralc888'

  return (
    <section id="github" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
            Open Source
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight">
            GitHub{' '}
            <span className="text-[#0058be] dark:text-[#60a5fa]">activity</span>
          </h2>
          <p className="text-[#4c4546] dark:text-[#94a3b8] mt-4 max-w-xl text-lg">
            Explore my repositories and contributions.
          </p>
        </div>

        <div className="reveal grid md:grid-cols-3 gap-6 mb-12">
          <a
            href={`https://github.com/${ghUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300 text-center"
          >
            <svg className="w-12 h-12 mx-auto mb-4 text-[#4c4546] dark:text-[#94a3b8] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-1">
              GitHub Profile
            </h3>
            <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm font-[family-name:var(--font-mono)]">
              @{ghUsername}
            </p>
          </a>

          <a
            href={`https://github.com/${ghUsername}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300 text-center"
          >
            <span className="material-symbols-outlined text-5xl mb-4 block text-[#4c4546] dark:text-[#94a3b8] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors">folder_open</span>
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-1">
              Public Repositories
            </h3>
            <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm">
              View code, contribute, explore
            </p>
          </a>

          <a
            href={`https://github.com/${ghUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white dark:bg-[#1a1c1c] border border-gray-200 dark:border-[#334155] rounded-2xl hover:border-[#0058be] dark:hover:border-[#60a5fa] transition-all duration-300 text-center"
          >
            <span className="material-symbols-outlined text-5xl mb-4 block text-[#4c4546] dark:text-[#94a3b8] group-hover:text-[#0058be] dark:group-hover:text-[#60a5fa] transition-colors">code</span>
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-1">
              Top Languages
            </h3>
            <p className="text-[#4c4546] dark:text-[#94a3b8] text-sm">
              Java, JavaScript, HTML, CSS, PHP
            </p>
          </a>
        </div>

        <div className="reveal text-center">
          <a
            href={`https://github.com/${ghUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            VIEW GITHUB PROFILE
          </a>
        </div>
      </div>
    </section>
  )
}
