import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anirudh Pratap Singh - Portfolio',
  description: 'AI-driven and full-stack developer building scalable solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
