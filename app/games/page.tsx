"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const gameResources = [
    { id: 'game1', title: "FitGirl Repacks", description: "Popular site for compressed game downloads.", url: "https://fitgirl-repacks.site" },
    { id: 'game2', title: "GOG Games", description: "DRM-free game downloads.", url: "https://gog-games.com" },
    { id: 'game3', title: "Steam Underground", description: "Community for game cracks and discussions.", url: "https://cs.rin.ru" },
    { id: 'game4', title: "CroHasIt", description: "Game cracks and updates repository.", url: "https://crackshash.com" },
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
          placeholder="Search game resources..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Games</h1>
        <p className="text-muted-foreground">
          Resources for gaming across different platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(gameResources).map((resource) => (
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