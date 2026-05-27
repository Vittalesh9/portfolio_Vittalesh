'use client'
import { useEffect, useState } from 'react'

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(onDone, 200)
          return 100
        }
        return p + 4
      })
    }, 40)
    return () => clearInterval(timer)
  }, [onDone])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative mb-8">
        <div
          className="w-20 h-20 rounded-full loading-spinner"
          style={{ animation: 'spin-slow 0.8s linear infinite' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold gradient-text">DA</span>
        </div>
      </div>
      <div className="w-48 h-1.5 bg-border rounded-full overflow-hidden mb-4">
        <div
          className="h-full gradient-bg rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-muted-foreground">Loading portfolio...</p>
    </div>
  )
}
