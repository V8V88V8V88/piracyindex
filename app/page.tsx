"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ResourceCard } from "@/components/resource-card"
import { useState } from 'react'
import { useCategory } from '@/components/category-provider'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { category } = useCategory()

  const filterResources = (resources) => {
    if (!searchQuery) return resources
    const lowerQuery = searchQuery.toLowerCase()
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery)
    )
  }

  const animeResources = [
    { title: "Animeland", description: "A popular site for streaming subbed and dubbed anime." },
    { title: "Gogoanime", description: "Extensive library of anime series and movies." },
    { title: "Aniwatch", description: "Ad-free anime streaming platform with a clean interface." },
    { title: "AnimePahe", description: "Known for high-quality, low file size anime downloads and streams." },
  ]

  const torrentResources = [
    { title: "Torrentking", description: "A popular torrent indexing site with a wide variety of content." },
    { title: "TorrentCue", description: "Curated torrent listings for various media types." },
    { title: "1337x", description: "One of the most popular torrent sites with a clean interface." },
    { title: "RARBG", description: "Known for high-quality video torrents and a user-friendly interface." },
  ]

  const moviesTVResources = [
    { title: "movie-web.app", description: "A sleek, modern streaming platform for movies and TV shows." },
    { title: "fmoviesz.to", description: "Large collection of movies and TV series for streaming." },
    { title: "HDToday", description: "High-definition streaming for latest movies and TV shows." },
    { title: "Braflix", description: "User-friendly streaming app with a vast library of content." },
  ]

  const bookResources = [
    { title: "Library Genesis", description: "Massive digital library for books and scientific articles." },
    { title: "Z-Library", description: "One of the world's largest online libraries." },
    { title: "Project Gutenberg", description: "A library of over 60,000 free eBooks." },
    { title: "Sci-Hub", description: "A website for accessing scientific articles." },
  ]

  const gameResources = [
    { title: "FitGirl Repacks", description: "Popular site for compressed game downloads." },
    { title: "GOG Games", description: "DRM-free game downloads." },
    { title: "Steam Underground", description: "Community for game cracks and discussions." },
    { title: "CroHasIt", description: "Game cracks and updates repository." },
  ]

  const renderResourceSection = (title, resources) => (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-[#00FFA3] mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(resources).map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </div>
    </section>
  )

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Welcome to Digital Index</h1>
          <p className="text-muted-foreground">
            Explore our curated collection of digital resources across various categories.
          </p>
        </div>
      )}

      {(category === 'home' || category === 'torrent') && renderResourceSection("Torrent Sites", torrentResources)}
      {(category === 'home' || category === 'movies-tv') && renderResourceSection("Movies & TV Streaming", moviesTVResources)}
      {(category === 'home' || category === 'anime') && renderResourceSection("Anime Sites", animeResources)}
      {(category === 'home' || category === 'books') && renderResourceSection("Books Piracy", bookResources)}
      {(category === 'home' || category === 'games') && renderResourceSection("Games", gameResources)}

      {category === 'legal' && (
        <div>
          <h2 className="text-2xl font-semibold text-[#00FFA3] mb-4">Legal Information</h2>
          <p className="text-muted-foreground">
            This section provides information about copyright laws and legal alternatives to piracy.
            Remember that downloading copyrighted material without permission may be illegal in your country.
          </p>
        </div>
      )}
    </div>
  )
}

