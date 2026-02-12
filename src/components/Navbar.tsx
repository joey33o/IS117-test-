'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-primary backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your Name
        </a>
        
        <div className="flex items-center gap-6">
          <a href="#work" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition">
            Work
          </a>
          <a href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </a>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
