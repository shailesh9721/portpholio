import { useEffect, useRef } from 'react'

const roles = ['Full Stack Developer', 'MERN Stack Expert', 'UI/UX Enthusiast', 'Problem Solver']

export default function Hero() {
  const roleRef = useRef(null)
  const indexRef = useRef(0)
  const charIndexRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    let timeout
    const type = () => {
      const current = roles[indexRef.current]
      if (!deletingRef.current) {
        charIndexRef.current++
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndexRef.current)
        if (charIndexRef.current === current.length) {
          deletingRef.current = true
          timeout = setTimeout(type, 1800)
          return
        }
      } else {
        charIndexRef.current--
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndexRef.current)
        if (charIndexRef.current === 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % roles.length
        }
      }
      timeout = setTimeout(type, deletingRef.current ? 60 : 100)
    }
    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 card-glass rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-400 font-mono">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Hi, I'm{' '}
          <span className="text-gradient block md:inline">shailesh</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-slate-400 mb-8"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="font-mono text-indigo-400">{'<'}</span>
          <span ref={roleRef} className="font-display font-semibold text-white min-w-[260px] text-left"></span>
          <span className="w-0.5 h-7 bg-indigo-400 animate-pulse" />
          <span className="font-mono text-indigo-400">{'/>'}</span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed reveal">
          I build <span className="text-indigo-300 font-medium">scalable web applications</span> with clean code and thoughtful design.
          Passionate about crafting seamless user experiences from front to back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal">
          <a href="#projects" className="btn-primary text-white font-semibold text-base w-full sm:w-auto justify-center">
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline font-semibold text-base w-full sm:w-auto justify-center">
            Let's Talk
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-12 reveal">
          {[
            { label: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', href: 'https://github.com' },
            { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: 'https://linkedin.com' },
            { label: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', href: 'https://twitter.com' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 card-glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-500/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
