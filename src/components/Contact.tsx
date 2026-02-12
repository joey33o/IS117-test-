export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-secondary border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
          Let's Connect
        </h2>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always open to interesting projects, collaborations, or just a friendly conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:your.email@njit.edu"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105"
          >
            Send me an Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 rounded-lg font-semibold transition"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
            GitHub
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
            Twitter
          </a>
          <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
            Portfolio
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2024 Your Name. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </section>
  )
}
