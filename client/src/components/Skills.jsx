const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 / CSS3', level: 95 },
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Node.js', level: 87 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Auth', level: 82 },
    ]
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'Mongoose', level: 83 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'Redis', level: 65 },
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'Linux / CLI', level: 78 },
      { name: 'Postman', level: 88 },
    ]
  },
]

const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'TypeScript', 'Git', 'Docker', 'AWS', 'Redux', 'Next.js', 'GraphQL']

function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">What I Work With</p>
          <h2 className="section-title text-white">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4">
            A curated set of technologies I use to build performant, scalable, and beautiful web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="card-glass glow-border rounded-2xl p-6 reveal hover:scale-[1.02] transition-transform duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-white">{cat.category}</h3>
              </div>
              {cat.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="reveal overflow-hidden">
          <p className="text-center text-sm text-slate-600 font-mono mb-6 uppercase tracking-widest">Also familiar with</p>
          <div className="flex gap-3 flex-wrap justify-center">
            {techStack.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 card-glass rounded-xl text-sm font-mono text-slate-300 border border-white/5 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
