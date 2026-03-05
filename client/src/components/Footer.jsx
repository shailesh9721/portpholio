export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs font-mono">
            SK
          </div>
          <span className="text-slate-400 text-sm font-mono">
            Built with <span className="text-red-400">❤</span> using MERN + Tailwind
          </span>
        </div>

        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} SHAILESH. All rights reserved.
        </p>

        <a
          href="#hero"
          className="w-9 h-9 card-glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
