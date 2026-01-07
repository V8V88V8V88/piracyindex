"use client"

import { Search, List, Grid, ExternalLink } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ResourceCard } from "@/components/resource-card"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { useCategory } from '@/components/category-provider'
import { useView } from '@/components/view-provider'
import { cn } from '@/lib/utils'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { viewMode, setViewMode } = useView()
  const { category } = useCategory()

  const filterResources = (resources: { id: string, title: string, description: string, url: string, starred?: boolean }[]) => {
    if (!searchQuery) return resources
    const lowerQuery = searchQuery.toLowerCase()
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery)
    )
  }

  const animeResources = [
    { id: 'animekai', title: "AnimeKai", description: "Anime / Sub / Dub / Auto-Next", url: "https://animekai.to/home" },
    { id: 'miruro', title: "Miruro", description: "Anime / Sub / Dub / Auto-Next", url: "https://www.miruro.com/" },
    { id: 'hianime', title: "HiAnime", description: "Anime / Sub / Dub / Auto-Next", url: "https://hianimez.to/" },
    { id: 'allmanga', title: "All Manga", description: "Anime / Sub / Dub", url: "https://allmanga.to/" },
    { id: 'animepahe', title: "animepahe", description: "Anime / Sub / Dub", url: "https://animepahe.ru/" },
    { id: 'kickassanime', title: "KickAssAnime", description: "Anime / Sub / Dub / Auto-Next", url: "https://kaa.mx/" },
    { id: 'animag', title: "Animag", description: "Anime / Sub / Dub", url: "https://animag.to/" },
    { id: 'animez', title: "AnimeZ", description: "Anime / Sub / Dub", url: "https://animez.org/" },
  ]

  const torrentResources = [
    { id: 'torrent1', title: "Torrentking", description: "A popular torrent indexing site with a wide variety of content.", url: "https://torrentking.com" },
    { id: 'torrent2', title: "TorrentCue", description: "Curated torrent listings for various media types.", url: "https://torrentcue.com" },
    { id: 'torrent3', title: "1337x", description: "One of the most popular torrent sites with a clean interface.", url: "https://1337x.to" },
    { id: 'torrent4', title: "RARBG", description: "Known for high-quality video torrents and a user-friendly interface.", url: "https://rarbg.to" },
  ]

  const moviesTVResources = [
    { id: 'hexa', title: "Hexa", description: "Movies / TV / Auto-Next / Watch Parties", url: "https://hexa.watch/", starred: true },
    { id: 'movie-web', title: "movie-web", description: "Movies / TV / Auto-Next", url: "https://erynith.github.io/movie-web-instances/", starred: true },
    { id: 'cineby', title: "Cineby", description: "Movies / TV / Auto-Next", url: "https://www.cineby.app/", starred: true },
    { id: 'rive', title: "Rive", description: "Movies / TV / Auto-Next", url: "https://rivestream.org/", starred: true },
    { id: 'xprime', title: "XPrime", description: "Movies / TV / Auto-Next", url: "https://xprime.tv/", starred: true },
    { id: 'spenflix', title: "SpenFlix", description: "Movies / TV / Auto-Next", url: "https://watch.spencerdevs.xyz/", starred: true },
    { id: 'vidbox', title: "Vidbox", description: "Movies / TV / Auto-Next", url: "https://vidbox.to/", starred: true },
    { id: '1shows', title: "1Shows", description: "Movies / TV / Watch Parties / Auto Next", url: "https://www.1shows.live/", starred: true },
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

  const renderResourceSection = (title: string, resources: { id: string, title: string, description: string, url: string, starred?: boolean }[]) => {
    const filteredResources = filterResources(resources);
    
    // Don't render the section if there are no matching resources
    if (searchQuery && filteredResources.length === 0) {
      return null;
    }
    
    if (viewMode === 'list') {
      return (
        <section key={title} className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-semibold text-primary mb-5">
            {title}
          </h2>
          <div className="space-y-2.5">
            {filteredResources.map((resource: { id: string, title: string, description: string, url: string, starred?: boolean }, index: number) => (
              <div
                key={resource.id}
                onClick={() => window.open(resource.url, '_blank', 'noopener,noreferrer')}
                className="
                  group flex items-center justify-between
                  p-4 rounded-lg
                  bg-card border border-border/50
                  hover:border-primary/50 hover:bg-[hsl(var(--card-hover-bg))]
                  hover:shadow-md hover:shadow-primary/5
                  transition-all duration-300 cursor-pointer
                  hover:translate-x-1
                "
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors">{resource.title}</h3>
                    <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground opacity-80 group-hover:opacity-100 transition-opacity">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }
    
    return (
      <section key={title} className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-2xl font-semibold text-primary mb-5">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredResources.map((resource: { id: string, title: string, description: string, url: string, starred?: boolean }, index: number) => (
            <div
              key={resource.id}
              className="animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ResourceCard
                title={resource.title}
                description={resource.description}
                url={resource.url}
              />
            </div>
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
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/70 z-10" />
          <Input
            placeholder="Search resources..."
            className="pl-9 h-11 bg-card/50 border-border/50 focus:bg-card focus:border-primary/30 transition-all backdrop-blur-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1.5 border border-border/50 rounded-lg p-1 bg-card/50 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode('grid')}
            className={cn(
              "h-8 px-3 transition-all",
              viewMode === 'grid' && "bg-primary/15 text-primary shadow-sm"
            )}
            title="Grid view"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode('list')}
            className={cn(
              "h-8 px-3 transition-all",
              viewMode === 'list' && "bg-primary/15 text-primary shadow-sm"
            )}
            title="List view"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {category === 'home' && !searchQuery && (
        <div key="home-welcome" className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Welcome to the Piracy Index
          </h1>
          <p className="text-muted-foreground text-lg opacity-90">
            The greatest collection of best piracy sites on internet :)
          </p>
        </div>
      )}

      {searchQuery && !hasSearchResults && (
        <div className="text-center py-16 animate-in fade-in duration-500">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border mb-4">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-primary mb-2">No matching results</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We couldn&apos;t find any resources matching your search. Try different keywords.
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
            <h2 className="text-2xl font-semibold text-primary mb-4">Legal Information</h2>
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

