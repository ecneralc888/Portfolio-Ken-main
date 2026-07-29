import { useEffect, useRef } from 'react'

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
      <div className="max-w-[720px] mx-auto">
        <div className="reveal space-y-6">
          <p className="text-sm font-bold text-[#38bdf8] tracking-wider uppercase">
            About
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Turning ideas into{' '}
            <span className="text-[#38bdf8]">clean, functional</span> web experiences
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#e2e8f0]">
            <p>
              I'm a BSIT student at STI College Balagtas, graduating in 2026. My journey into frontend development started with curiosity about how websites work — and turned into a passion for building clean, responsive interfaces that people enjoy using.
            </p>
            <p>
              During my internship at Boon Pharma Corp, I worked on front-end features for an e-commerce platform, where I learned what it takes to build for real users in a professional environment. I'm currently expanding my skills in modern frameworks and best practices.
            </p>
            <p>
              My goal is to join a team where I can contribute to production web applications, learn from experienced developers, and grow into a confident frontend engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
