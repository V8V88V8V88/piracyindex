"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useCategory } from './category-provider'
import { Category } from './category-provider'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { category, setCategory } = useCategory()
  const router = useRouter()

  const navItems = [
    { icon: 'Home', label: 'Home', href: '/', category: 'home' },
    { icon: 'Download', label: 'Torrent Sites', href: '/torrent-sites', category: 'torrent' },
    { icon: 'Film', label: 'Movies & TV', href: '/movies-tv', category: 'movies-tv' },
    { icon: 'Tv', label: 'Anime Sites', href: '/anime', category: 'anime' },
    { icon: 'Book', label: 'Books Piracy', href: '/books', category: 'books' },
    { icon: 'Gamepad2', label: 'Games', href: '/games', category: 'games' },
    { icon: 'Scale', label: 'Legal', href: '/legal', category: 'legal' },
  ]
  
  const handleNavigation = (item: typeof navItems[0]) => {
    setCategory(item.category as Category)
    router.push(item.href)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 z-40 h-16 px-4 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-border/40 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          </div>
          <h1 className="text-lg font-semibold text-primary">Piracy Index</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      <div className="pt-16"></div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30 pt-16">
          <nav className="flex flex-col items-center justify-center h-full space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                className={cn(
                  "text-lg font-medium transition-colors px-4 py-2 rounded-lg",
                  category === item.category
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => handleNavigation(item)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

