export default function ProofOfWork() {
  const projects = [
    {
      id: 1,
      title: 'AI Chat Application',
      description: 'Built a full-stack chat application with AI integration using Next.js and LLMs',
      tags: ['Next.js', 'React', 'Python', 'AI/ML'],
      link: '#',
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      description: 'Developed a high-performance dashboard for tracking real-time metrics and KPIs',
      tags: ['React', 'TypeScript', 'WebSocket', 'Tailwind'],
      link: '#',
    },
    {
      id: 3,
      title: 'Open Source Contribution',
      description: 'Contributing to [Project Name] - implemented feature X with 500+ GitHub stars',
      tags: ['Open Source', 'TypeScript', 'Testing'],
      link: '#',
    },
  ]

  return (
    <section id="work" className="py-20 px-4 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Proof of Work
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
          Projects that demonstrate my skills and impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group p-6 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-blue-900/20 transition"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
