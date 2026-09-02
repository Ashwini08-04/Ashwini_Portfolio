'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  const pos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY

      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const animate = () => {
      followerPos.current.x +=
        (pos.current.x - followerPos.current.x) * 0.12

      followerPos.current.y +=
        (pos.current.y - followerPos.current.y) * 0.12

      follower.style.left = `${followerPos.current.x}px`
      follower.style.top = `${followerPos.current.y}px`

      rafRef.current = requestAnimationFrame(animate)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('a, button, input, textarea, select')) {
        cursor.style.transform =
          'translate(-50%, -50%) scale(1.8)'

        follower.style.transform =
          'translate(-50%, -50%) scale(1.5)'
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('a, button, input, textarea, select')) {
        cursor.style.transform =
          'translate(-50%, -50%) scale(1)'

        follower.style.transform =
          'translate(-50%, -50%) scale(1)'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor pointer-events-none fixed z-[9999]"
      />

      <div
        ref={followerRef}
        className="cursor-follower pointer-events-none fixed z-[9998]"
      />
    </>
  )
}