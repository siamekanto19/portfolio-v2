import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import './globals.css'
import { Murecho, DM_Serif_Display } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Siam | Web Application Developer',
  description: 'Web Application Developer based in Khulna, Bangladesh',
}

const murecho = Murecho({ subsets: ['latin'] })
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${murecho.className} ${dmSerif.variable} antialiased`}>
        <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
          <div className='w-11/12 md:w-2/3 xl:w-1/2 mx-auto'>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
