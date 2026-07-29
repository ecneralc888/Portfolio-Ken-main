import { useState, useEffect, useRef } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
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
    }

    const checkCaptcha = setInterval(() => {
      const captchaEl = document.querySelector('.h-captcha')
      if (captchaEl && window.hcaptcha) {
        try {
          window.hcaptcha.render(captchaEl)
          clearInterval(checkCaptcha)
        } catch {}
      }
    }, 300)

    return () => {
      if (el) {
        const reveals = el.querySelectorAll('.reveal')
        reveals.forEach((r) => observer.unobserve(r))
      }
      clearInterval(checkCaptcha)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)

    const formData = new FormData(e.target)
    formData.append('access_key', '70d173bb-ab8f-4742-8fd4-62ac0178c962')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    console.log('Web3Forms response:', data)

    setSending(false)

    if (data.success) {
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitted(false)
      }, 4000)
    } else {
      setError(data.message || 'Submission failed. Please check the captcha.')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-40 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="reveal">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[#0058be] dark:text-[#60a5fa] tracking-[0.2em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-black dark:text-white leading-[1.1] tracking-tight mb-6">
              Let's create something{' '}
              <span className="text-[#0058be] dark:text-[#60a5fa]">great</span> together
            </h2>
            <p className="text-[#4c4546] dark:text-[#94a3b8] leading-relaxed mb-10">
              Whether you have a project idea, an internship opportunity, or just want to connect — I'd love to hear from you. I'm always open to collaborating on interesting projects.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-xl">mail</span>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7e7576] dark:text-[#94a3b8] tracking-wider uppercase">Email</p>
                  <p className="text-black dark:text-white font-medium">JohnKenGerodias05@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-xl">location_on</span>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7e7576] dark:text-[#94a3b8] tracking-wider uppercase">Location</p>
                  <p className="text-black dark:text-white font-medium">Santol, Balagtas, Bulacan, Philippines</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#0058be] dark:text-[#60a5fa] text-xl">download</span>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#7e7576] dark:text-[#94a3b8] tracking-wider uppercase">Resume</p>
                  <a
                    href="/Resume-JohnKenGerodias.pdf"
                    download
                    className="text-black dark:text-white font-medium hover:text-[#0058be] dark:hover:text-[#60a5fa] transition-colors"
                  >
                    Download my resume
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] hover:bg-gray-200 dark:hover:bg-[#475569] transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] hover:bg-gray-200 dark:hover:bg-[#475569] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#334155] flex items-center justify-center text-[#4c4546] dark:text-[#94a3b8] hover:text-[#0058be] dark:hover:text-[#60a5fa] hover:bg-gray-200 dark:hover:bg-[#475569] transition-all duration-300"
                aria-label="GitHub profile"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <div className="border-b border-gray-300 dark:border-[#334155] focus-within:border-[#0058be] dark:focus-within:border-[#60a5fa] transition-colors">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-3 bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-[#4c4546] focus:outline-none font-[family-name:var(--font-sans)]"
                  placeholder="Your Name"
                />
              </div>
              <div className="border-b border-gray-300 dark:border-[#334155] focus-within:border-[#0058be] dark:focus-within:border-[#60a5fa] transition-colors">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-3 bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-[#4c4546] focus:outline-none font-[family-name:var(--font-sans)]"
                  placeholder="Your Email"
                />
              </div>
              <div className="border-b border-gray-300 dark:border-[#334155] focus-within:border-[#0058be] dark:focus-within:border-[#60a5fa] transition-colors">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full py-3 bg-transparent text-black dark:text-white placeholder-gray-400 dark:placeholder-[#4c4546] focus:outline-none font-[family-name:var(--font-sans)] resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <div className="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={sending}
                className={`w-full px-8 py-3 font-semibold font-[family-name:var(--font-mono)] text-sm tracking-wider rounded-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : sending
                    ? 'bg-gray-400 dark:bg-gray-600 text-white cursor-not-allowed'
                    : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-80'
                }`}
              >
                {submitted ? 'MESSAGE SENT ✓' : sending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
