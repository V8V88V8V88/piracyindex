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
    { id: 'csrin', title: "CS.RIN.RU", description: "Download / Torrent / Signup Required", url: "https://cs.rin.ru", starred: true },
    { id: 'steamrip', title: "SteamRIP", description: "Download / Pre-Installed Games", url: "https://steamrip.com", starred: true },
    { id: 'ankergames', title: "AnkerGames", description: "Download / Pre-Installed Games", url: "https://ankergames.com", starred: true },
    { id: 'goggames', title: "GOG Games", description: "DRM-free game downloads / Torrent", url: "https://gog-games.com", starred: true },
    { id: 'fitgirl', title: "FitGirl Repacks", description: "Compressed game downloads / Torrent", url: "https://fitgirl-repacks.site", starred: true },
    { id: 'steamunderground', title: "Steam Underground", description: "Community for game cracks and discussions", url: "https://cs.rin.ru", starred: true },
    { id: 'unioncrax', title: "UnionCrax", description: "Download / Pre-Installed / Status", url: "https://unioncrax.com" },
    { id: 'astralgames', title: "AstralGames", description: "Download / Achievements / Pre-Installed", url: "https://astralgames.com" },
    { id: 'onlinefix', title: "Online Fix", description: "Download / Torrent / Multiplayer", url: "https://online-fix.me" },
    { id: 'ovagames', title: "Ova Games", description: "Download / Password Required", url: "https://www.ovagames.com" },
    { id: 'torrminatorr', title: "Torrminatorr", description: "Download / Forum / Sign-Up Required", url: "https://torrminatorr.com" },
    { id: 'g4u', title: "g4u", description: "Download / Password: 404", url: "https://g4u.to" },
    { id: 'gload', title: "GLoad", description: "Download / Use Translator", url: "https://gload.to" },
    { id: 'gamebounty', title: "GameBounty", description: "Download Games", url: "https://gamebounty.net" },
    { id: 'scenecat', title: "scene cat", description: "Download Games", url: "https://scenecat.com" },
    { id: 'fluxy', title: "Fluxy Repacks", description: "Download / Note", url: "https://fluxy-repacks.com" },
    { id: 'gomorgames', title: "GoMorGames", description: "Download Games", url: "https://gomorgames.com" },
    { id: 'appnetica', title: "appnetica", description: "Torrent / Pre-Installed", url: "https://appnetica.com" },
    { id: 'atopgames', title: "AtopGames", description: "Download / Pre-Installed", url: "https://atopgames.com" },
    { id: 'elenemigos', title: "ElEnemigos", description: "Download / Password Required", url: "https://elenemigos.com" },
    { id: 'reloaded', title: "Reloaded Steam", description: "Download / Pre-Installed", url: "https://reloaded-steam.com" },
    { id: 'steamgg', title: "SteamGG", description: "Download / Pre-Installed", url: "https://steamgg.com" },
    { id: 'rexagames', title: "Rexa Games", description: "Download / Pre-Installed", url: "https://rexagames.com" },
    { id: 'steamora', title: "SteamOra", description: "Download / Pre-Installed", url: "https://steamora.com" },
    { id: 'triahgames', title: "TriahGames", description: "Download / Password Required", url: "https://triahgames.com" },
    { id: 'getfreegames', title: "GetFreeGames", description: "Download Games", url: "https://getfreegames.com" },
    { id: 'desolation', title: "desolation", description: "Download Games", url: "https://desolation.com" },
    { id: 'worldofpc', title: "World of PC Games", description: "Download / Pre-Installed / Use Adblock", url: "https://worldofpcgames.com" },
    { id: 'games4u', title: "Games4U", description: "Download / Use Adblock", url: "https://games4u.com" },
    { id: 'cggames', title: "CG Games", description: "Download Games", url: "https://cggames.com" },
    { id: 'gamepcfull', title: "GamePCFull", description: "Download Games", url: "https://gamepcfull.com" },
    { id: 'ircgames', title: "IRC Games", description: "Download Games via IRC", url: "https://ircgames.com" },
    { id: 'freetogame', title: "FreeToGame", description: "F2P Games / Trackers", url: "https://freetogame.com" },
    { id: 'antidenuvo', title: "Anti Denuvo Sanctuary", description: "Denuvo Games / Works Offline", url: "https://antidenuvo.com" },
    { id: 'kaoskrew', title: "KaOsKrew", description: "Download / Torrent Repacks", url: "https://kaoskrew.com" },
    { id: 'armgddn', title: "ARMGDDN Browser", description: "Download Repacks", url: "https://armgddn.com" },
    { id: 'gnarly', title: "Gnarly Repacks", description: "Download / Password: gnarly", url: "https://gnarly-repacks.com" },
    { id: 'scoot3r', title: "ScOOt3r Repacks", description: "Download / Torrent Repacks", url: "https://scoot3r-repacks.com" },
    { id: 'm4ckd0ge', title: "M4CKD0GE Repacks", description: "Download Repacks", url: "https://m4ckd0ge.com" },
    { id: 'dyren', title: "Dyren Repacks", description: "Download / Torrent Repacks", url: "https://dyren-repacks.com" },
    { id: 'vanya', title: "Vanya Games", description: "Download Repacks", url: "https://vanyagames.com" },
    { id: 'dodi', title: "DODI Repacks", description: "Torrent Repacks / Redirect Bypass", url: "https://dodi-repacks.com" },
    { id: 'stevv', title: "Stevv Game", description: "Download Repacks", url: "https://stevvgame.com" },
    { id: 'xatab', title: "Xatab Repacks", description: "Torrent Repacks / Use Translator", url: "https://xatab-repacks.com" },
    { id: 'elamigos', title: "Elamigos", description: "Download Repacks", url: "https://elamigos.com" },
    { id: 'freegogpc', title: "FreeGOGPCGames", description: "GOG Games Torrent Uploads", url: "https://freegogpcgames.com" },
    { id: 'wotaku', title: "Wotaku", description: "Otaku Games Index", url: "https://wotaku.wiki/websites" },
    { id: 'everythingmoe', title: "EverythingMoe", description: "Otaku Games Index", url: "https://everythingmoe.com" },
    { id: 'osgl', title: "OSGL", description: "Open-Source Games", url: "https://osgl.com" },
    { id: 'awesomeopensource', title: "Awesome Open Source Games", description: "Open-Source Games", url: "https://awesomeopensource.com" },
    { id: 'libregamewiki', title: "LibreGameWiki", description: "Open-Source Games", url: "https://libregamewiki.com" },
    { id: 'itchio', title: "itch.io", description: "Indie Games", url: "https://itch.io" },
    { id: 'gamdie', title: "Gamdie", description: "Indie Games", url: "https://gamdie.com" },
    { id: 'alphabeta', title: "Alpha Beta Gamer", description: "Play Games in Alpha / Beta Testing", url: "https://alphabeta.com" },
    { id: 'myabandonware', title: "My Abandonware", description: "Abandonware Games", url: "https://myabandonware.com" },
    { id: 'abandonwaregames', title: "AbandonwareGames", description: "Abandonware Games", url: "https://abandonwaregames.com" },
    { id: 'retroexo', title: "Retro eXo", description: "Abandonware / Retro PC Games / Torrents", url: "https://retroexo.com" },
    { id: 'zombslair', title: "Zombs-Lair", description: "Abandonware", url: "https://zombs-lair.com" },
    { id: 'vetusware', title: "VETUSWARE", description: "Abandonware", url: "https://vetusware.com" },
    { id: 'collectionchamber', title: "CollectionChamber", description: "Abandonware", url: "https://collectionchamber.com" },
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
                  <h3 className="text-foreground font-semibold group-hover:text-primary transition-colors flex items-center gap-1.5">
                    {resource.starred && <span className="text-yellow-400">⭐</span>}
                    {resource.title}
                  </h3>
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
                starred={resource.starred}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 