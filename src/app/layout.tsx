import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Ashwini Sonawane | Full-Stack Developer',
    template: '%s | Ashwini Sonawane',
  },

  description:
    'Ashwini Sonawane is a Full-Stack Developer building modern web applications using React, Node.js, MongoDB, and AI technologies.',

  keywords: [
    'Ashwini Sonawane',
    'Full-Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'MongoDB',
    'AI Integration',
    'Web Developer',
  ],

  authors: [
    {
      name: 'Ashwini Sonawane',
    },
  ],

  creator: 'Ashwini Sonawane',

  openGraph: {
    title: 'Ashwini Sonawane | Full-Stack Developer',
    description:
      'Building modern, scalable web applications with MERN stack and AI.',
    type: 'website',
    locale: 'en_IN',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}