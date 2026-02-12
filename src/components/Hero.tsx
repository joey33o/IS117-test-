export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-primary dark:to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Name
          </span>
          <br />
          <span className="text-slate-900 dark:text-slate-100">
            Computer Science | AI/ML
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          @ NJIT | Building intelligent systems that solve real problems
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#work"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-semibold transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            GitHub
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}
