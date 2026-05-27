import { createFileRoute } from '@tanstack/react-router'
import { useState, useCallback } from 'react'
import { LoadingScreen } from '@/components/portfolio/LoadingScreen'
import { Navbar } from '@/components/portfolio/Navbar'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Skills } from '@/components/portfolio/Skills'
import { Projects } from '@/components/portfolio/Projects'
import { DashboardShowcase } from '@/components/portfolio/DashboardShowcase'
import { Experience } from '@/components/portfolio/Experience'
import { Certifications } from '@/components/portfolio/Certifications'
import { Resume } from '@/components/portfolio/Resume'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'
import { useTheme } from '@/hooks/useTheme'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  const [loading, setLoading] = useState(true)
  const { theme, toggleTheme } = useTheme()
  const handleDone = useCallback(() => setLoading(false), [])

  if (loading) return <LoadingScreen onDone={handleDone} />

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DashboardShowcase />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
