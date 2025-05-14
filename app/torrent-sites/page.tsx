"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function TorrentSitesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const torrentResources = [
    { id: 'torrent1', title: "Torrentking", description: "A popular torrent indexing site with a wide variety of content.", url: "https://torrentking.com" },
    { id: 'torrent2', title: "TorrentCue", description: "Curated torrent listings for various media types.", url: "https://torrentcue.com" },
    { id: 'torrent3', title: "1337x", description: "One of the most popular torrent sites with a clean interface.", url: "https://1337x.to" },
    { id: 'torrent4', title: "RARBG", description: "Known for high-quality video torrents and a user-friendly interface.", url: "https://rarbg.to" },
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
          placeholder="Search torrent sites..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Torrent Sites</h1>
        <p className="text-muted-foreground">
          A collection of reliable torrent sites for downloading various digital content.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(torrentResources).map((resource) => (
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