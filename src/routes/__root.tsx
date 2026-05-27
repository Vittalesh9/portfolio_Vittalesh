import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: '[Your Name] | Data Analyst Portfolio' },
      { name: 'description', content: 'Aspiring Data Analyst skilled in SQL, Python, Power BI, Tableau, and Excel. Explore my projects, dashboards, and data analytics work.' },
      { name: 'keywords', content: 'data analyst, SQL, Python, Power BI, Tableau, Excel, data visualization, fresher, portfolio' },
      { name: 'author', content: '[Your Name]' },
      { property: 'og:title', content: '[Your Name] | Data Analyst Portfolio' },
      { property: 'og:description', content: 'Aspiring Data Analyst turning data into actionable insights.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#6366f1' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
