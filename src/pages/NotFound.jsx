import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <h1 className="text-8xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white mb-4">Page not found</h2>
          <p className="text-[#4c4546] dark:text-[#94a3b8] mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg hover:opacity-80 transition-opacity"
          >
            BACK TO HOME
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
