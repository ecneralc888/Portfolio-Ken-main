import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import ResumeSection from '../components/ResumeSection'
import GitHubSection from '../components/GitHubSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ResumeSection />
      <GitHubSection />
      <Contact />
      <Footer />
    </>
  )
}
