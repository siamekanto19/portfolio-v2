import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SK Siam Rouf — Frontend Engineer',
  description:
    'Frontend engineer with five years of experience building and optimizing production web applications in React, Vue, and Next.js. Based in Khulna, Bangladesh.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-body antialiased'>
        <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
