import { Award, ExternalLink, Calendar } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const certifications = [
  {
    title: 'SQL for Data Science',
    issuer: 'Coursera / IBM',
    date: '2024',
    credential: '#',
    color: 'from-indigo-500 to-violet-500',
    emoji: '🗄️',
    skills: ['SQL Queries', 'Joins', 'Aggregations', 'Subqueries'],
  },
  {
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    date: '2024',
    credential: '#',
    color: 'from-amber-500 to-yellow-500',
    emoji: '📊',
    skills: ['DAX', 'Power Query', 'Data Modeling', 'Reports'],
  },
  {
    title: 'Python for Data Analysis',
    issuer: 'DataCamp',
    date: '2024',
    credential: '#',
    color: 'from-cyan-500 to-blue-500',
    emoji: '🐍',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Data Wrangling'],
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google / Coursera',
    date: '2023',
    credential: '#',
    color: 'from-emerald-500 to-teal-500',
    emoji: '📈',
    skills: ['Spreadsheets', 'SQL', 'R', 'Tableau', 'BigQuery'],
  },
  {
    title: 'Tableau Desktop Specialist',
    issuer: 'Tableau',
    date: '2024',
    credential: '#',
    color: 'from-rose-500 to-pink-500',
    emoji: '🎯',
    skills: ['Calculated Fields', 'LOD', 'Dashboards', 'Stories'],
  },
  {
    title: 'Excel: Advanced Data Analysis',
    issuer: 'LinkedIn Learning',
    date: '2023',
    credential: '#',
    color: 'from-violet-500 to-fuchsia-500',
    emoji: '📋',
    skills: ['Pivot Tables', 'Power Query', 'VBA', 'Forecasting'],
  },
]

export function Certifications() {
  const { ref, inView } = useInView()

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Industry-recognized certifications validating my data analytics expertise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`group glass-card rounded-2xl overflow-hidden card-hover ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {cert.emoji}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded-md text-xs font-medium glass-card border border-border">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar size={11} /> {cert.date}
                  </span>
                  <a
                    href={cert.credential}
                    className="flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                  >
                    <Award size={12} /> View Credential <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
