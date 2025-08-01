import './globals.css'
import '@lerian/console-layout/styles'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Providers from '../providers/session-provider'

// Console font
const interVariable = localFont({
  src: '../public/fonts/inter-variable.woff2',
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Console Layout Test App',
  description: 'Test application for console-layout library'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${interVariable.variable}`}
    >
      <body
        suppressHydrationWarning
        className={`font-inter bg-background text-foreground h-full`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
