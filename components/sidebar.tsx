"use client"

import { Home, Download, Film, Tv, Book, Scale, Gamepad2 } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useCategory, Category } from './category-provider'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const { category, setCategory } = useCategory()
  const router = useRouter()

  const navItems = [
    { icon: Home, label: 'Home', href: '/', category: 'home' },
    { icon: Download, label: 'Torrent Sites', href: '/torrent-sites', category: 'torrent' },
    { icon: Film, label: 'Movies & TV', href: '/movies-tv', category: 'movies-tv' },
    { icon: Tv, label: 'Anime Sites', href: '/anime', category: 'anime' },
    { icon: Book, label: 'Books Piracy', href: '/books', category: 'books' },
    { icon: Gamepad2, label: 'Games', href: '/games', category: 'games' },
    { icon: Scale, label: 'Legal', href: '/legal', category: 'legal' },
  ]

  const handleNavigation = (item: typeof navItems[0]) => {
    setCategory(item.category as Category)
    router.push(item.href)
  }

  return (
    <div className="hidden md:block w-64 min-h-screen border-r border-border/40 p-6 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/10 flex-shrink-0">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
          <h1 className="text-base font-semibold text-primary whitespace-nowrap">The Piracy Index</h1>
        </div>
        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
      
      <nav className="space-y-1.5">
        {navItems.map((item) => (
          <button 
            key={item.category}
            className={cn(
              "group flex items-center gap-3 px-3 py-2.5 transition-all duration-200 rounded-lg w-full text-left relative",
              category === item.category
                ? "text-primary bg-primary/15 border border-primary/30 shadow-sm shadow-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-card/50 border border-transparent hover:border-border/50"
            )}
            onClick={() => handleNavigation(item)}
          >
            {category === item.category && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
            )}
            <item.icon className={cn(
              "w-4 h-4 transition-transform duration-200",
              category === item.category ? "scale-110" : "group-hover:scale-110"
            )} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
