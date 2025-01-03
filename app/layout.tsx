import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Sidebar } from '@/components/sidebar'
import { CategoryProvider } from '@/components/category-provider'
import { MobileMenu } from '@/components/mobile-menu'
import './globals.css'

export const metadata: Metadata = {
  title: 'Piracy Index',
  description: 'curated collection of best piracy sites',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn(
        GeistSans.className,
        "min-h-screen bg-[#0f1419] antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CategoryProvider>
            <div className="flex flex-col md:flex-row">
              <Sidebar />
              <MobileMenu />
              <main className="flex-1 px-4 md:px-8 py-6">{children}</main>
            </div>
          </CategoryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

