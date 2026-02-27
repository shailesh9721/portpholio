const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '15+', label: 'Happy Clients' },
  { value: '5★', label: 'Avg. Rating' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <div className="reveal relative">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-2xl scale-110" />
              {/* Avatar placeholder */}
              <div className="relative card-glass rounded-3xl p-8 text-center glow-border">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-bold font-display text-white mb-6 shadow-2xl">
                  YN
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-1">Your Name</h3>
                <p className="text-slate-400 text-sm font-mono mb-6">Full Stack Developer</p>

                {/* Mini skills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['MongoDB', 'Express', 'React', 'Node.js'].map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Code decoration */}
                <div className="mt-6 text-left card-glass rounded-xl p-4">
                  <p className="font-mono text-xs text-slate-500 leading-relaxed">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-indigo-300">developer</span>{' '}
                    <span className="text-white">= {'{'}</span><br />
                    &nbsp;&nbsp;<span className="text-blue-300">passion</span>:{' '}
                    <span className="text-emerald-300">"coding"</span>,<br />
                    &nbsp;&nbsp;<span className="text-blue-300">coffee</span>:{' '}
                    <span className="text-orange-300">Infinity</span>,<br />
                    &nbsp;&nbsp;<span className="text-blue-300">bugs</span>:{' '}
                    <span className="text-red-400">0</span>{' '}<span className="text-slate-500">// mostly</span><br />
                    <span className="text-white">{'}'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal">
            <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">About Me</p>
            <h2 className="section-title text-white mb-6">
              Turning Ideas Into{' '}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with expertise in the MERN stack — building everything from sleek frontends to robust backend APIs. I love the process of transforming a blank canvas into a fully functioning product.
              </p>
              <p>
                My approach combines technical precision with design sensibility. Whether it's architecting a scalable Node.js API, crafting a pixel-perfect React UI, or optimizing MongoDB queries — I'm in my element.
              </p>
              <p>
                When I'm not coding, you'll find me exploring open-source projects, learning new technologies, or sipping way too much coffee ☕
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="/resume.pdf" download className="btn-primary text-white text-sm">
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline text-sm">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 reveal">
          {stats.map(stat => (
            <div key={stat.label} className="card-glass glow-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gradient font-display mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
