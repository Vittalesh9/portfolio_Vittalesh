import { ArrowDown, Download, Mail, Github, Linkedin, ChevronRight } from 'lucide-react'
import { useTypingAnimation } from '@/hooks/useTypingAnimation'
import { useCounter } from '@/hooks/useCounter'
import { useInView } from '@/hooks/useInView'

const stats = [
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'SQL Problems Solved', value: 150, suffix: '+' },
  { label: 'Dashboards Created', value: 15, suffix: '+' },
]

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, inView } = useInView()
  const count = useCounter(value, 2000, inView)
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold gradient-text">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

export function Hero() {
  const typed = useTypingAnimation(
    ['SQL & Python Expert', 'Power BI Developer', 'Data Storyteller', 'Dashboard Creator'],
    80,
    2200,
  )

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl animate-blob delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-blob delay-600" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-muted-foreground">Available for Opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 animate-fade-in-up">
          Hi, I'm{' '}
          <span className="gradient-text">[Your Name]</span>
        </h1>

        {/* Role */}
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-2 animate-fade-in-up delay-200">
          Aspiring{' '}
          <span className="text-foreground">Data Analyst</span>
        </div>

        {/* Typing animation */}
        <div className="h-10 text-lg sm:text-xl text-primary font-medium mb-6 animate-fade-in-up delay-300">
          <span>{typed}</span>
          <span className="animate-blink">|</span>
        </div>

        {/* Intro */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-400">
          Passionate about transforming data into actionable insights using{' '}
          <span className="text-indigo-500 font-medium">SQL</span>,{' '}
          <span className="text-violet-500 font-medium">Python</span>,{' '}
          <span className="text-cyan-500 font-medium">Excel</span>, and{' '}
          <span className="text-primary font-medium">Power BI</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up delay-500">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-indigo-500/30"
          >
            View Projects <ChevronRight size={16} />
          </a>
          <a
            href="#resume"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass-card font-semibold hover:scale-105 transition-all border border-primary/30"
          >
            <Download size={16} className="text-primary" /> Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass-card font-semibold hover:scale-105 transition-all border border-border"
          >
            <Mail size={16} /> Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-in-up delay-600">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:border-primary/50 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:border-blue-500/50 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:your@email.com"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:border-red-500/50 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto glass-card rounded-2xl p-6 animate-fade-in-up delay-700">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <span className="text-xs">Scroll down</span>
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
