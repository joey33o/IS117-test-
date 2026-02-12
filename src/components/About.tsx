export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Python',
    'Machine Learning',
    'Tailwind CSS',
    'Database Design',
    'REST APIs',
    'Git/GitHub',
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a Computer Science student at NJIT passionate about building high-performance applications 
              and exploring the intersection of AI and software engineering. I love learning new technologies 
              and solving complex problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, reading about 
              new technologies, or experimenting with personal projects.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-white dark:bg-secondary border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 font-medium hover:border-blue-600 dark:hover:border-blue-400 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
