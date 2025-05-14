"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function MoviesTVPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const moviesTVResources = [
    { id: 'movie1', title: "movie-web.app", description: "A sleek, modern streaming platform for movies and TV shows.", url: "https://movie-web.app" },
    { id: 'movie2', title: "fmoviesz.to", description: "Large collection of movies and TV series for streaming.", url: "https://fmoviesz.to" },
    { id: 'movie3', title: "HDToday", description: "High-definition streaming for latest movies and TV shows.", url: "https://hdtoday.tv" },
    { id: 'movie4', title: "Braflix", description: "User-friendly streaming app with a vast library of content.", url: "https://braflix.com" },
  ];

  const filterResources = (resources: { id: string, title: string, description: string, url: string }[]) => {
    if (!searchQuery) return resources;
    const lowerQuery = searchQuery.toLowerCase();
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery)
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search movies & TV sites..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Movies & TV Streaming</h1>
        <p className="text-muted-foreground">
          Find the best streaming sites for movies and TV shows.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(moviesTVResources).map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            url={resource.url}
          />
        ))}
      </div>
    </div>
  );
} 