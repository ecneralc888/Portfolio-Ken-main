import { useParams, Link } from 'react-router-dom'
import { featuredProject, secondaryProjects } from '../data/projects'
import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import Footer from '../components/Footer'

const allProjects = [featuredProject, ...secondaryProjects]

export default function CaseStudy() {
  const { slug } = useParams()
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Project not found</h1>
          <Link to="/" className="text-[#0058be] dark:text-[#60a5fa] hover:underline">Back to home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#4c4546] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors mb-8 font-[family-name:var(--font-mono)] tracking-wider"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Projects
          </Link>

          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-[#334155] font-[family-name:var(--font-mono)] text-[10px] text-[#4c4546] dark:text-[#94a3b8] tracking-wider rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight mb-6">
              {project.title}
            </h1>
          </div>

          <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-[#334155] dark:to-[#1e293b] flex items-center justify-center mb-12 border border-gray-200 dark:border-[#334155]">
            <svg className="w-20 h-20 text-gray-400 dark:text-[#4c4546]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-4">Overview</h2>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-4">Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[#4c4546] dark:text-[#94a3b8]">
                  <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-[18px] mt-0.5">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-4">Challenges</h2>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed text-lg">
              {project.challenges}
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-4">What I Learned</h2>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed text-lg">
              {project.learned}
            </p>
          </section>

          <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200 dark:border-[#334155]">
            <a
              href={project.live}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              Live Demo
            </a>
            <a
              href={project.code}
              className="px-8 py-3 border border-gray-300 dark:border-[#334155] text-[#4c4546] dark:text-[#94a3b8] hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              Source Code
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
