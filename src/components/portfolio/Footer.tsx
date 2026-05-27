import { Github, Linkedin, Mail, BarChart2, Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const nav = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Dashboards', '#dashboards'],
    ['Experience', '#experience'],
    ['Certifications', '#certifications'],
    ['Resume', '#resume'],
    ['Contact', '#contact'],
  ]

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <BarChart2 size={16} className="text-white" />
              </span>
              <span className="gradient-text">[Your Name]</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Aspiring Data Analyst passionate about transforming raw data into meaningful stories
              that drive business decisions.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/40 hover:scale-110 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {nav.slice(0, 4).map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 text-transparent">.</h4>
            <ul className="space-y-2">
              {nav.slice(4).map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> by [Your Name] · {new Date().getFullYear()}
          </p>
          <button
            onClick={scrollTop}
            className="w-8 h-8 rounded-full glass-card flex items-center justify-center hover:border-primary/40 hover:scale-110 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
