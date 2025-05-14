"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const bookResources = [
    { id: 'book1', title: "Library Genesis", description: "Massive digital library for books and scientific articles.", url: "https://libgen.is" },
    { id: 'book2', title: "Z-Library", description: "One of the world's largest online libraries.", url: "https://z-lib.org" },
    { id: 'book3', title: "Project Gutenberg", description: "A library of over 60,000 free eBooks.", url: "https://www.gutenberg.org" },
    { id: 'book4', title: "Sci-Hub", description: "A website for accessing scientific articles.", url: "https://sci-hub.se" },
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
          placeholder="Search book resources..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Books Piracy</h1>
        <p className="text-muted-foreground">
          Find resources for e-books, audiobooks, and digital literature.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterResources(bookResources).map((resource) => (
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