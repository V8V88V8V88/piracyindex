import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Sidebar } from '@/components/sidebar'
import { CategoryProvider } from '@/components/category-provider'
import { ViewProvider } from '@/components/view-provider'
import { MobileMenu } from '@/components/mobile-menu'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Piracy Index',
  description: 'Your curated collection of digital resources',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        GeistSans.className,
        "min-h-screen antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <CategoryProvider>
            <ViewProvider>
              <div className="flex flex-col md:flex-row">
                <Sidebar />
                <MobileMenu />
                <main className="flex-1 px-4 md:px-8 py-6">{children}</main>
              </div>
            </ViewProvider>
          </CategoryProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}

