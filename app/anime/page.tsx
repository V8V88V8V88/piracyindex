"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function AnimePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const animeResources = [
    { id: 'anime1', title: "Animeland", description: "A popular site for streaming subbed and dubbed anime.", url: "https://animeland.com" },
    { id: 'anime2', title: "Gogoanime", description: "Extensive library of anime series and movies.", url: "https://gogoanime.com" },
    { id: 'anime3', title: "Aniwatch", description: "Ad-free anime streaming platform with a clean interface.", url: "https://aniwatch.com" },
    { id: 'anime4', title: "AnimePahe", description: "Known for high-quality, low file size anime downloads and streams.", url: "https://animepahe.com" },
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
          placeholder="Search anime sites..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Anime Sites</h1>
        <p className="text-muted-foreground">
          Discover the best sites for streaming and downloading anime content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(animeResources).map((resource) => (
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