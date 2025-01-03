"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ResourceCard } from "@/components/resource-card"
import { useState } from 'react'
import { useCategory } from '@/components/category-provider'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { category } = useCategory()

  const filterResources = (resources: { title: string; description: string }[]) => {
    if (!searchQuery) return resources
    const lowerQuery = searchQuery.toLowerCase()
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery)
    )
  }

  const animeResources = [
    { id: 'anime1', title: "Animeland", description: "A popular site for streaming subbed and dubbed anime." },
    { id: 'anime2', title: "Gogoanime", description: "Extensive library of anime series and movies." },
    { id: 'anime3', title: "Aniwatch", description: "Ad-free anime streaming platform with a clean interface." },
    { id: 'anime4', title: "AnimePahe", description: "Known for high-quality, low file size anime downloads and streams." },
  ]

  const torrentResources = [
    { id: 'torrent1', title: "Torrentking", description: "A popular torrent indexing site with a wide variety of content." },
    { id: 'torrent2', title: "TorrentCue", description: "Curated torrent listings for various media types." },
    { id: 'torrent3', title: "1337x", description: "One of the most popular torrent sites with a clean interface." },
    { id: 'torrent4', title: "RARBG", description: "Known for high-quality video torrents and a user-friendly interface." },
  ]

  const moviesTVResources = [
    { id: 'movie1', title: "movie-web.app", description: "A sleek, modern streaming platform for movies and TV shows." },
    { id: 'movie2', title: "fmoviesz.to", description: "Large collection of movies and TV series for streaming." },
    { id: 'movie3', title: "HDToday", description: "High-definition streaming for latest movies and TV shows." },
    { id: 'movie4', title: "Braflix", description: "User-friendly streaming app with a vast library of content." },
  ]

  const bookResources = [
    { id: 'book1', title: "Library Genesis", description: "Massive digital library for books and scientific articles." },
    { id: 'book2', title: "Z-Library", description: "One of the world's largest online libraries." },
    { id: 'book3', title: "Project Gutenberg", description: "A library of over 60,000 free eBooks." },
    { id: 'book4', title: "Sci-Hub", description: "A website for accessing scientific articles." },
  ]

  const gameResources = [
    { id: 'game1', title: "FitGirl Repacks", description: "Popular site for compressed game downloads." },
    { id: 'game2', title: "GOG Games", description: "DRM-free game downloads." },
    { id: 'game3', title: "Steam Underground", description: "Community for game cracks and discussions." },
    { id: 'game4', title: "CroHasIt", description: "Game cracks and updates repository." },
  ]

  const allResources = {
    'anime': animeResources,
    'torrent': torrentResources,
    'movies-tv': moviesTVResources,
    'books': bookResources,
    'games': gameResources,
  }

  const renderResourceSection = (title: string, resources: { title: string; description: string }[]) => (
    <section key={title} className="mb-8">
      <h2 className="text-2xl font-semibold text-[#00FFA3] mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(resources).map((resource: { title: string; description: string }, index: number) => (
          <ResourceCard
            key={`${title}-${resource.title}-${index}`}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </div>
    </section>
  )

  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'torrent': return "Torrent Sites";
      case 'movies-tv': return "Movies & TV Streaming";
      case 'anime': return "Anime Sites";
      case 'books': return "Books Piracy";
      case 'games': return "Games";
      default: return "All Resources";
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search resources..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {category === 'home' && (
        <div key="home-welcome" className="mb-8">
          <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Welcome to Piracy Index</h1>
          <p className="text-muted-foreground">
            Explore our curated collection of digital resources across various categories.
          </p>
        </div>
      )}

      {category === 'home' ? (
        Object.entries(allResources).map(([key, resources]) => 
          renderResourceSection(getCategoryTitle(key), resources)
        )
      ) : (
        category === 'legal' ? (
          <div key="legal-information">
            <h2 className="text-2xl font-semibold text-[#00FFA3] mb-4">Legal Information</h2>
            <p className="text-muted-foreground">
              This section provides information about copyright laws and legal alternatives to piracy.
              Remember that downloading copyrighted material without permission may be illegal in your country.
            </p>
          </div>
        ) : (
          renderResourceSection(getCategoryTitle(category), allResources[category] || [])
        )
      )}
    </div>
  )
}

