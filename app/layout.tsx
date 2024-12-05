import './globals.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI on Base',
  description: 'A showcase of AI projects built on Base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

