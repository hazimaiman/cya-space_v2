import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CyA Space',
  description: 'Next.js App Router port with Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-lightbg text-gray-900 transition-colors dark:bg-darkbg dark:text-white">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

