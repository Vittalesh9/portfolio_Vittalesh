import { ExternalLink } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const dashboards = [
  { title: 'Sales Performance Dashboard', tool: 'Power BI', color: 'from-indigo-500/20 to-violet-500/20', emoji: '📊', desc: 'Regional sales KPIs & trends' },
  { title: 'HR Analytics Dashboard', tool: 'Tableau', color: 'from-cyan-500/20 to-blue-500/20', emoji: '👥', desc: 'Employee attrition & performance' },
  { title: 'Financial Overview Report', tool: 'Power BI', color: 'from-emerald-500/20 to-teal-500/20', emoji: '💰', desc: 'P&L, cash flow & forecasts' },
  { title: 'Customer 360 Dashboard', tool: 'Tableau', color: 'from-amber-500/20 to-orange-500/20', emoji: '🎯', desc: 'Segmentation & lifetime value' },
  { title: 'Marketing Analytics', tool: 'Looker Studio', color: 'from-rose-500/20 to-pink-500/20', emoji: '📣', desc: 'Campaign performance & ROI' },
  { title: 'Supply Chain Tracker', tool: 'Power BI', color: 'from-violet-500/20 to-fuchsia-500/20', emoji: '🚚', desc: 'Inventory & logistics insights' },
]

export function DashboardShowcase() {
  const { ref, inView } = useInView()

  return (
    <section id="dashboards" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Dashboards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Dashboard <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Interactive BI dashboards built with Power BI, Tableau, and Looker Studio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((dash, i) => (
            <div
              key={dash.title}
              className={`group glass-card rounded-2xl overflow-hidden card-hover cursor-pointer ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Preview area */}
              <div className={`relative h-40 bg-gradient-to-br ${dash.color} flex items-center justify-center`}>
                {/* Mock chart lines */}
                <div className="absolute inset-0 flex items-end justify-around px-4 pb-4 gap-1">
                  {[60, 80, 45, 90, 70, 55, 85, 65].map((h, j) => (
                    <div
                      key={j}
                      className="flex-1 rounded-t-sm bg-white/20 group-hover:bg-white/35 transition-all duration-500"
                      style={{ height: `${h}%`, transitionDelay: `${j * 50}ms` }}
                    />
                  ))}
                </div>
                <span className="relative text-4xl z-10">{dash.emoji}</span>
                {/* Tool badge */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/30 text-white text-xs font-medium">
                  {dash.tool}
                </span>
              </div>

              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                    {dash.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{dash.desc}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
