"use client"

import { Home, Download, Film, Tv, Book, Scale, Gamepad2 } from 'lucide-react'
import Link from "next/link"
import { useCategory } from './category-provider'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const { category, setCategory } = useCategory()

  const navItems = [
    { icon: Home, label: 'Home', href: '/', category: 'home' },
    { icon: Download, label: 'Torrent Sites', href: '/torrent-sites', category: 'torrent' },
    { icon: Film, label: 'Movies & TV', href: '/movies-tv', category: 'movies-tv' },
    { icon: Tv, label: 'Anime Sites', href: '/anime', category: 'anime' },
    { icon: Book, label: 'Books Piracy', href: '/books', category: 'books' },
    { icon: Gamepad2, label: 'Games', href: '/games', category: 'games' },
    { icon: Scale, label: 'Legal', href: '/legal', category: 'legal' },
  ]

  return (
    <div className="hidden md:block w-64 min-h-screen border-r border-border/40 p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
        </div>
        <h1 className="text-xl font-semibold text-teal-500">Digital Index</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className={cn(
              "flex items-center gap-3 px-3 py-2 transition-colors rounded-lg",
              category === item.category
                ? "text-foreground bg-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            onClick={() => setCategory(item.category as any)}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
