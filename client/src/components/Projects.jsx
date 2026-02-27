const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack online store with cart, authentication, payment integration via Stripe, and an admin dashboard for product management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    gradient: 'from-indigo-600 to-blue-600',
    icon: '🛒',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Real-Time Chat App',
    description: 'A messaging application with Socket.io enabling real-time communication, group chats, and message history stored in MongoDB.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    gradient: 'from-purple-600 to-pink-600',
    icon: '💬',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management API',
    description: 'A RESTful API for project management with JWT authentication, role-based access control, and real-time notifications.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    gradient: 'from-emerald-600 to-cyan-600',
    icon: '✅',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Dev Blog Platform',
    description: 'A markdown-powered blogging platform with syntax highlighting, tag filtering, and a CMS for managing posts.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind'],
    gradient: 'from-orange-600 to-red-600',
    icon: '📝',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather app with geolocation, 7-day forecasts, animated weather icons, and saved location bookmarks.',
    tags: ['React', 'OpenWeatherAPI', 'Node.js', 'Chart.js'],
    gradient: 'from-sky-600 to-indigo-600',
    icon: '🌤️',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Portfolio CMS',
    description: 'A headless CMS to manage portfolio content dynamically with image upload, rich text editing, and a public API.',
    tags: ['React', 'Express', 'MongoDB', 'Cloudinary'],
    gradient: 'from-violet-600 to-purple-700',
    icon: '🗂️',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className={`group card-glass glow-border rounded-2xl overflow-hidden reveal transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project header */}
      <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
        <span className="text-5xl">{project.icon}</span>
        <div className="absolute inset-0 bg-black/20" />
        {project.featured && (
          <span className="absolute top-3 right-3 text-xs font-mono bg-white/20 backdrop-blur px-2 py-1 rounded-full text-white">
            ✦ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
          >
            Live Demo
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">My Work</p>
          <h2 className="section-title text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4">
            A selection of projects I've built — from concept to deployment. Each one taught me something new.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            View All on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
