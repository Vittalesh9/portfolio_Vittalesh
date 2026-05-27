import { Github, ExternalLink } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const projects = [
  {
    title: 'Sales Dashboard Analysis',
    description:
      'Built an interactive Power BI dashboard analyzing $2M+ in sales data across 5 regions. Identified top-performing products and seasonal trends, enabling 15% revenue growth insights.',
    tags: ['Power BI', 'SQL', 'Excel', 'DAX'],
    color: 'from-indigo-500 to-violet-500',
    emoji: '📈',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Netflix Data Analysis',
    description:
      'Analyzed Netflix content library using Python (Pandas, Matplotlib). Explored trends in genres, ratings, release years, and country distributions across 8,000+ titles.',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    color: 'from-red-500 to-rose-500',
    emoji: '🎬',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Customer Shopping Behavior',
    description:
      'Segmented 10,000+ customers using RFM analysis in SQL and Python. Created Tableau dashboard revealing high-value segments, boosting targeted marketing ROI by 22%.',
    tags: ['SQL', 'Python', 'Tableau', 'RFM'],
    color: 'from-cyan-500 to-blue-500',
    emoji: '🛒',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'HR Analytics Dashboard',
    description:
      'Developed comprehensive HR dashboard tracking attrition rates, performance metrics, and hiring trends. Helped HR team reduce turnover by identifying key risk factors.',
    tags: ['Power BI', 'SQL', 'DAX', 'Excel'],
    color: 'from-emerald-500 to-teal-500',
    emoji: '👥',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'IPL Data Analysis',
    description:
      'In-depth exploratory analysis of 15 IPL seasons using Python. Uncovered batting/bowling patterns, venue advantages, and team performance trends with rich visualizations.',
    tags: ['Python', 'NumPy', 'Matplotlib', 'Pandas'],
    color: 'from-amber-500 to-orange-500',
    emoji: '🏏',
    github: 'https://github.com',
    demo: '#',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`group glass-card rounded-2xl overflow-hidden card-hover ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project image placeholder */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={18} className="text-white" />
          </a>
          <a
            href={project.demo}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/40 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} className="text-white" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-medium gradient-bg-subtle text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg glass-card text-sm font-medium hover:border-primary/40 transition-colors border border-border"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={project.demo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Real-world data projects showcasing analytical thinking and technical skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className={`text-center mt-10 ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card font-semibold hover:border-primary/40 transition-all border border-border hover:scale-105"
          >
            <Github size={18} /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
