import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Contributor Onboarder — Automate OSS Onboarding',
  description: 'Detect first-time contributors and automatically send personalized welcome messages with setup guides. Built for open source maintainers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5de607c2-5d70-45ba-97c6-a2ec7b2fb76a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
