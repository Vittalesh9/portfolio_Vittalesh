import { Download, FileText, Eye } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export function Resume() {
  const { ref, inView } = useInView()

  return (
    <section id="resume" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Resume
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Download my resume to learn more about my background and qualifications.
          </p>
        </div>

        <div className={`${inView ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
          {/* Resume preview card */}
          <div className="glass-card rounded-2xl overflow-hidden max-w-2xl mx-auto">
            {/* Preview area */}
            <div className="relative bg-white dark:bg-slate-800 h-96 flex flex-col p-8 overflow-hidden">
              {/* Mock resume content */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="h-6 w-40 rounded gradient-bg mb-2" />
                  <div className="h-3 w-28 rounded bg-gray-200 dark:bg-gray-700 mb-1" />
                  <div className="h-3 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 opacity-80" />
              </div>

              <div className="flex gap-6">
                <div className="flex-1 space-y-4">
                  {['EXPERIENCE', 'SKILLS', 'PROJECTS'].map((section) => (
                    <div key={section}>
                      <div className="h-3 w-20 rounded bg-indigo-200 dark:bg-indigo-900 mb-2" />
                      <div className="h-1.5 w-full rounded bg-gray-100 dark:bg-gray-700 mb-1.5" />
                      <div className="h-1.5 w-5/6 rounded bg-gray-100 dark:bg-gray-700 mb-1.5" />
                      <div className="h-1.5 w-4/5 rounded bg-gray-100 dark:bg-gray-700" />
                    </div>
                  ))}
                </div>
                <div className="w-28 space-y-4">
                  {['EDUCATION', 'CONTACT', 'TOOLS'].map((s) => (
                    <div key={s}>
                      <div className="h-3 w-16 rounded bg-violet-200 dark:bg-violet-900 mb-2" />
                      <div className="h-1.5 w-full rounded bg-gray-100 dark:bg-gray-700 mb-1" />
                      <div className="h-1.5 w-4/5 rounded bg-gray-100 dark:bg-gray-700" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-6">
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Eye size={14} /> Resume Preview
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-indigo-500/30"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full glass-card font-semibold hover:border-primary/40 transition-all border border-border hover:scale-105"
              >
                <FileText size={18} /> View Full Resume
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Years of Study', value: '4+' },
              { label: 'Certifications', value: '6+' },
              { label: 'Projects', value: '20+' },
              { label: 'Tech Stack', value: '15+' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
