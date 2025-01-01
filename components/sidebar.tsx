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
    <div className="hidden md:block w-64 min-h-screen border-r border-border/40 p-6 bg-[#0b0d10] backdrop-blur supports-[backdrop-filter]:bg-[#0b0d10]">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-[#00FFA3]/20 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#00FFA3] animate-pulse" />
        </div>
        <h1 className="text-xl font-semibold text-[#00FFA3]">Piracy Index</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
 <button 
 key={item.category}
 className={cn(
   "flex items-center gap-3 px-3 py-2 transition-colors rounded-lg w-full text-left",
   category === item.category
     ? "text-[#00FFA3] bg-[#0b0d10]"
     : "text-muted-foreground hover:text-[#00FFA3] hover:bg-accent"
 )}
 onClick={() => setCategory(item.category as any)}
>
 <item.icon className="w-4 h-4" />
 {item.label}
</button>
        ))}
      </nav>
    </div>
  )
}
