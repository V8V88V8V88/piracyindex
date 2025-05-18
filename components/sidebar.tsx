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
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
          <h1 className="text-xl font-semibold text-primary">Piracy Index</h1>
        </div>
        <ThemeToggle />
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button 
            key={item.category}
            className={cn(
              "flex items-center gap-3 px-3 py-2 transition-all rounded-lg w-full text-left",
              category === item.category
                ? "text-primary bg-primary/10 border border-primary/20"
                : "text-muted-foreground hover:text-primary hover:border hover:border-primary/20 border border-transparent"
            )}
            onClick={() => handleNavigation(item)}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
