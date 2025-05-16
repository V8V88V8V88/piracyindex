import React from 'react'
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
}

export function ResourceCard({ title, description, url }: ResourceCardProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card 
      className="
        group relative overflow-hidden
        bg-background/80 backdrop-blur 
        supports-[backdrop-filter]:bg-background/60 
        border-2 border-border
        hover:border-primary/50
        hover:bg-secondary/80
        transition-all duration-300 
        cursor-pointer 
        hover:scale-105
      "
      onClick={handleClick}
    >
      <div className="
        absolute inset-0 -translate-x-full 
        bg-gradient-to-r from-transparent via-primary/10 to-transparent
        group-hover:translate-x-full transition-transform duration-700
      "></div>
      <CardHeader>
        <CardTitle className="text-foreground/90 group-hover:text-foreground transition-colors text-lg">
          {title}
        </CardTitle>
        <CardDescription className="opacity-75 group-hover:opacity-100 transition-opacity text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

