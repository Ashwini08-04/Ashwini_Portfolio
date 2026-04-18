'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.12
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.12
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`
        followerRef.current.style.top = `${followerPos.current.y}px`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2)'
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)'
    }
    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      if (followerRef.current) followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
