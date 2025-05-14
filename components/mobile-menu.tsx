"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useCategory } from './category-provider'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

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
    setCategory(item.category as any)
    router.push(item.href)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
          <nav className="flex flex-col items-center justify-center h-full space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                className={cn(
                  "text-lg font-medium transition-colors",
                  category === item.category
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
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

