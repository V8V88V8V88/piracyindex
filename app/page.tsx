"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ResourceCard } from "@/components/resource-card"
import { useState } from 'react'
import { useCategory } from '@/components/category-provider'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { category } = useCategory()

  const filterResources = (resources: { id: string, title: string, description: string, url: string }[]) => {
    if (!searchQuery) return resources
    const lowerQuery = searchQuery.toLowerCase()
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery)
    )
  }

  const animeResources = [
    { id: 'anime1', title: "Animeland", description: "A popular site for streaming subbed and dubbed anime.", url: "https://animeland.com" },
    { id: 'anime2', title: "Gogoanime", description: "Extensive library of anime series and movies.", url: "https://gogoanime.com" },
    { id: 'anime3', title: "Aniwatch", description: "Ad-free anime streaming platform with a clean interface.", url: "https://aniwatch.com" },
    { id: 'anime4', title: "AnimePahe", description: "Known for high-quality, low file size anime downloads and streams.", url: "https://animepahe.com" },
  ]

  const torrentResources = [
    { id: 'torrent1', title: "Torrentking", description: "A popular torrent indexing site with a wide variety of content.", url: "https://torrentking.com" },
    { id: 'torrent2', title: "TorrentCue", description: "Curated torrent listings for various media types.", url: "https://torrentcue.com" },
    { id: 'torrent3', title: "1337x", description: "One of the most popular torrent sites with a clean interface.", url: "https://1337x.to" },
    { id: 'torrent4', title: "RARBG", description: "Known for high-quality video torrents and a user-friendly interface.", url: "https://rarbg.to" },
  ]

  const moviesTVResources = [
    { id: 'movie1', title: "movie-web.app", description: "A sleek, modern streaming platform for movies and TV shows.", url: "https://movie-web.app" },
    { id: 'movie2', title: "fmoviesz.to", description: "Large collection of movies and TV series for streaming.", url: "https://fmoviesz.to" },
    { id: 'movie3', title: "HDToday", description: "High-definition streaming for latest movies and TV shows.", url: "https://hdtoday.tv" },
    { id: 'movie4', title: "Braflix", description: "User-friendly streaming app with a vast library of content.", url: "https://braflix.com" },
  ]

  const bookResources = [
    { id: 'book1', title: "Library Genesis", description: "Massive digital library for books and scientific articles.", url: "https://libgen.is" },
    { id: 'book2', title: "Z-Library", description: "One of the world's largest online libraries.", url: "https://z-lib.org" },
    { id: 'book3', title: "Project Gutenberg", description: "A library of over 60,000 free eBooks.", url: "https://www.gutenberg.org" },
    { id: 'book4', title: "Sci-Hub", description: "A website for accessing scientific articles.", url: "https://sci-hub.se" },
  ]

  const gameResources = [
    { id: 'game1', title: "FitGirl Repacks", description: "Popular site for compressed game downloads.", url: "https://fitgirl-repacks.site" },
    { id: 'game2', title: "GOG Games", description: "DRM-free game downloads.", url: "https://gog-games.com" },
    { id: 'game3', title: "Steam Underground", description: "Community for game cracks and discussions.", url: "https://cs.rin.ru" },
    { id: 'game4', title: "CroHasIt", description: "Game cracks and updates repository.", url: "https://crackshash.com" },
  ]

  const allResources = {
    'anime': animeResources,
    'torrent': torrentResources,
    'movies-tv': moviesTVResources,
    'books': bookResources,
    'games': gameResources,
  }

  const renderResourceSection = (title: string, resources: { id: string, title: string, description: string, url: string }[]) => {
    const filteredResources = filterResources(resources);
    
    // Don't render the section if there are no matching resources
    if (searchQuery && filteredResources.length === 0) {
      return null;
    }
    
    return (
      <section key={title} className="mb-8">
        <h2 className="text-2xl font-semibold text-[#00FFA3] mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredResources.map((resource: { id: string, title: string, description: string, url: string }) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              url={resource.url}
            />
          ))}
        </div>
      </section>
    );
  }

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

  // Check if there are any matching results
  const hasSearchResults = searchQuery ? 
    Object.values(allResources).some(resources => 
      resources.some(resource => 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) : true;

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

      {category === 'home' && !searchQuery && (
        <div key="home-welcome" className="mb-8">
          <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Welcome to Pirate Index</h1>
          <p className="text-muted-foreground">
          The greatest collection of best piracy sites on internet :)
          </p>
        </div>
      )}

      {searchQuery && !hasSearchResults && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-[#00FFA3] mb-4">No matching results</h2>
          <p className="text-muted-foreground">
            We couldn't find any resources matching your search. Try different keywords.
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

