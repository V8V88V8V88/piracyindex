"use client"

import React from 'react';
import { Search, List, Grid, ExternalLink } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useView } from '@/components/view-provider';
import { cn } from '@/lib/utils';

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { viewMode, setViewMode } = useView();

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

  const filteredResources = filterResources(gameResources);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/70 z-10" />
          <Input
            placeholder="Search game resources..."
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

      <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="text-3xl font-bold text-primary mb-3">Games</h1>
        <p className="text-muted-foreground">
          Resources for gaming across different platforms.
        </p>
      </div>

      {viewMode === 'list' ? (
        <div className="space-y-2.5">
          {filteredResources.map((resource, index) => (
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredResources.map((resource, index) => (
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
      )}
    </div>
  );
} 