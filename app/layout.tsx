import './globals.css'
import Link from 'next/link'
import { Providers } from './providers'
import ThemeSwitch from '@/components/ThemeSwitch'

export const metadata = {
  title: 'blog page ',
  description: 'A minimalist portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="max-w-2xl mx-auto px-6 py-10 font-sans transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
        
        <Providers>
          <header className="flex justify-between items-center mb-16">
            <div className="font-bold text-xl">
              <Link href="/">@dhruvsblog</Link>
            </div>
            
            <nav className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/" className="hover:text-black dark:hover:text-white">Home</Link>
              <Link href="/favorites" className="hover:text-black dark:hover:text-white">Favorites</Link>
              <ThemeSwitch />
            </nav>
          </header>

          <main>
            {children}
          </main>
        </Providers>
        
      </body>
    </html>
  )
}