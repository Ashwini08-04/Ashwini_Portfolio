'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percentage =
        scrollHeight > 0
          ? Math.min((scrollTop / scrollHeight) * 100, 100)
          : 0

      setProgress(percentage)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    updateProgress()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
      }}
    />
  )
}