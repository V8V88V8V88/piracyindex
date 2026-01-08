import React from 'react'
import { ExternalLink } from 'lucide-react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ResourceCardProps {
  title: string
  description: string
  url: string
  starred?: boolean
}

export function ResourceCard({ title, description, url, starred }: ResourceCardProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card 
      className="
        group relative overflow-hidden
        bg-card
        border border-border/60
        hover:border-primary/50
        hover:bg-[hsl(var(--card-hover-bg))]
        hover:shadow-lg hover:shadow-primary/5
        transition-all duration-300 ease-out
        cursor-pointer 
        hover:scale-[1.02] hover:-translate-y-1
        backdrop-blur-sm
        h-32
        flex flex-col
      "
      onClick={handleClick}
    >
      <div className="
        absolute inset-0 -translate-x-full 
        bg-gradient-to-r from-transparent via-primary/5 to-transparent
        group-hover:translate-x-full transition-transform duration-1000 ease-in-out
      "></div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <ExternalLink className="h-4 w-4 text-primary" />
      </div>
      <CardHeader className="pb-4 flex-1 flex flex-col justify-between p-6">
        <CardTitle className="text-foreground/95 group-hover:text-foreground transition-colors text-lg font-semibold mb-1.5 line-clamp-1 flex items-center gap-1.5">
          {starred && <span className="text-yellow-400">⭐</span>}
          {title}
        </CardTitle>
        <CardDescription className="opacity-70 group-hover:opacity-90 transition-opacity text-sm leading-relaxed line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

