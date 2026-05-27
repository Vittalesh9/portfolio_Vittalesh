import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const timeline = [
  {
    type: 'education',
    icon: GraduationCap,
    title: "Bachelor's in Computer Science / Statistics",
    org: 'Your University Name',
    period: '2021 – 2025',
    description: 'Specialized in Data Science and Analytics. Relevant coursework: Statistics, Database Management, Machine Learning, Data Visualization.',
    tags: ['CGPA: 8.5/10', 'Data Science', 'Statistics'],
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
  },
  {
    type: 'experience',
    icon: Briefcase,
    title: 'Data Analyst Intern',
    org: 'Company Name',
    period: 'Jun 2024 – Aug 2024',
    description: 'Analyzed customer data using SQL and Python, built Power BI dashboards, and improved reporting efficiency by 30% through automated pipelines.',
    tags: ['SQL', 'Power BI', 'Python', 'ETL'],
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
  },
  {
    type: 'experience',
    icon: Award,
    title: 'Freelance Data Analyst',
    org: 'Upwork / Fiverr',
    period: '2024 – Present',
    description: 'Delivered 10+ data analytics projects for clients including sales analysis, customer segmentation, and interactive dashboard development.',
    tags: ['Power BI', 'Tableau', 'Python', 'Excel'],
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Data Analytics Bootcamp',
    org: 'Online Platform',
    period: '2023',
    description: 'Completed intensive 6-month program covering data wrangling, statistical analysis, machine learning fundamentals, and business intelligence tools.',
    tags: ['Python', 'SQL', 'ML Basics', 'BI Tools'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
]

export function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            My academic and professional journey in the data world.
          </p>
        </div>

        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="timeline-line rounded-full" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className={`relative ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Dot */}
                  <div className={`absolute -left-10 w-8 h-8 rounded-full ${item.bg} border-2 ${item.border} flex items-center justify-center`}>
                    <Icon size={14} className={item.color} />
                  </div>

                  {/* Card */}
                  <div className={`glass-card rounded-2xl p-6 card-hover border ${item.border}/20`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className={`text-sm font-medium ${item.color}`}>{item.org}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground glass-card px-3 py-1 rounded-full">
                        <Calendar size={12} /> {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`px-2 py-0.5 rounded-md text-xs font-medium ${item.bg} ${item.color}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
