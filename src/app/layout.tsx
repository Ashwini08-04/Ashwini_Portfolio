import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashwini Sonawane | Full-Stack Developer',
  description: 'Building scalable and responsive web applications. Aspiring Full-Stack Developer passionate about modern, user-friendly applications.',
  keywords: ['Full-Stack Developer', 'React', 'Python', 'MongoDB', 'Web Development'],
  authors: [{ name: 'Ashwini Sonawane' }],
  openGraph: {
    title: 'Ashwini Sonawane | Full-Stack Developer',
    description: 'Building scalable and responsive web applications.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
