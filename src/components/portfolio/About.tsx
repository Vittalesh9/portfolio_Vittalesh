import { User, MapPin, Mail, Code2, BarChart3, Database, TrendingUp } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const highlights = [
  { icon: Code2, label: 'SQL & Python', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  { icon: BarChart3, label: 'Power BI', color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { icon: TrendingUp, label: 'Tableau', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { icon: Database, label: 'Data Cleaning', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
]

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Turning <span className="gradient-text">Data</span> into Decisions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className={`flex justify-center ${inView ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl gradient-bg p-1">
                <div className="w-full h-full rounded-2xl glass-card overflow-hidden flex items-center justify-center bg-secondary">
                  <img
                    src="/headshot-on-white.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement
                      t.style.display = 'none'
                      t.parentElement!.innerHTML = '<div class="flex flex-col items-center gap-3 text-muted-foreground"><div class="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center"><svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'1.5\'><path d=\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\'/><circle cx=\'12\' cy=\'7\' r=\'4\'/></svg></div><span class=\'text-sm\'>Your Photo</span></div>'
                    }}
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-3 py-2 text-sm font-semibold shadow-lg">
                📊 Data Analyst
              </div>
              <div className="absolute -top-4 -left-4 glass-card rounded-xl px-3 py-2 text-sm font-semibold shadow-lg">
                🎓 Fresher
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={inView ? 'animate-fade-in-right delay-300' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-4">
              Hello! I'm a passionate{' '}
              <span className="gradient-text">Data Analyst</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a fresher data analyst with a strong foundation in statistical analysis,
              data visualization, and business intelligence. I love uncovering hidden patterns
              in datasets and translating complex findings into clear, actionable insights
              for stakeholders.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My toolkit includes SQL for querying databases, Python with Pandas & NumPy for
              data manipulation, and Power BI & Tableau for creating compelling dashboards
              that drive business decisions. I'm enthusiastic about solving real-world
              problems with data.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map(({ icon: Icon, label, color, bg }) => (
                <div key={label} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${bg}`}>
                  <Icon size={16} className={color} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" /> India
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-primary" /> your@email.com
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-primary" /> Open to Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
