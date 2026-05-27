import { useInView } from '@/hooks/useInView'
import { useState, useEffect } from 'react'

const categories = [
  {
    title: 'Programming',
    icon: '💻',
    color: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    title: 'Visualization',
    icon: '📊',
    color: 'from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'Tableau', level: 80 },
      { name: 'Excel', level: 92 },
    ],
  },
  {
    title: 'Libraries',
    icon: '📦',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Pandas', level: 87 },
      { name: 'NumPy', level: 82 },
      { name: 'Matplotlib', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
]

function SkillBar({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(level), delay)
      return () => clearTimeout(t)
    }
  }, [inView, level, delay])

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Technical</span> Expertise
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A comprehensive toolkit built through projects, coursework, and continuous learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card rounded-2xl p-6 card-hover ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  inView={inView}
                  delay={i * 100 + j * 150 + 300}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className={`mt-12 text-center ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground mb-4">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Seaborn', 'Scikit-learn', 'Jupyter', 'Google Sheets', 'Looker Studio', 'DAX', 'VBA', 'SPSS'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full glass-card text-sm font-medium hover:border-primary/30 transition-colors border border-border">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
