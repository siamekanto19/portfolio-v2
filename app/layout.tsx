import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SK Siam Rouf — Full Stack Developer',
  description:
    'Full Stack Developer (Frontend Focused) based in Khulna, Bangladesh. Specializing in React, Next.js, TypeScript, and Vue.',
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
