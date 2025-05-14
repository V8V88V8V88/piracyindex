"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useState } from 'react';

export default function LegalPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search legal information..."
          className="pl-9 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#00FFA3] mb-3">Legal Resources</h1>
        <p className="text-muted-foreground">
          Legal streaming and download options for digital content.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-[#1a2634] p-6 bg-[#0f1419]/80 backdrop-blur">
          <h2 className="text-xl font-semibold mb-4 text-[#00FFA3]">Important Disclaimer</h2>
          <p className="mb-4">This section provides information about legal alternatives to piracy. The Piracy Index does not host or provide any copyrighted content directly.</p>
          
          <h3 className="text-lg font-medium mb-2">Legal Alternatives</h3>
          <ul className="space-y-2 list-disc pl-5 mb-4">
            <li>Consider subscribing to legitimate streaming services</li>
            <li>Use public domain resources for older works</li>
            <li>Check your local library for digital borrowing options</li>
            <li>Look for officially free content supported by advertisements</li>
          </ul>
          
          <h3 className="text-lg font-medium mb-2">Legal Risks</h3>
          <p>Remember that downloading or sharing copyrighted material without permission may be illegal in your country and could result in:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Legal notices from copyright holders</li>
            <li>Internet service provider actions</li>
            <li>Potential fines or other penalties</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 