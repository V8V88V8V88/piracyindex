"use client"

import React from 'react';
import { Search, List, Grid, ExternalLink } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useView } from '@/components/view-provider';
import { cn } from '@/lib/utils';

export default function AnimePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { viewMode, setViewMode } = useView();

  const animeResources = [
    { id: 'animekai', title: "🏴‍☠️ AnimeKai", description: "Anime / Sub / Dub / Auto-Next", url: "https://animekai.to/home" },
    { id: 'miruro', title: "🏴‍☠️ Miruro", description: "Anime / Sub / Dub / Auto-Next", url: "https://www.miruro.com/" },
    { id: 'hianime', title: "🏴‍☠️ HiAnime", description: "Anime / Sub / Dub / Auto-Next", url: "https://hianimez.to/" },
    { id: 'allmanga', title: "🏴‍☠️ All Manga", description: "Anime / Sub / Dub", url: "https://allmanga.to/" },
    { id: 'animepahe', title: "🏴‍☠️ animepahe", description: "Anime / Sub / Dub", url: "https://animepahe.ru/" },
    { id: 'kickassanime', title: "🏴‍☠️ KickAssAnime", description: "Anime / Sub / Dub / Auto-Next", url: "https://kaa.mx/" },
    { id: 'animag', title: "🏴‍☠️ Animag", description: "Anime / Sub / Dub", url: "https://animag.to/" },
    { id: 'animez', title: "🏴‍☠️ AnimeZ", description: "Anime / Sub / Dub", url: "https://animez.org/" },
    { id: 'anify', title: "Anify", description: "Anime / Sub / Dub", url: "https://anify.to/" },
    { id: '123anime', title: "123anime", description: "Anime / Sub / Dub / Auto-Next", url: "https://123animes.ru/" },
    { id: 'vumeto', title: "Vumeto", description: "Anime / Sub / Dub / Auto-Next", url: "https://vumeto.com/" },
    { id: 'hikari', title: "Hikari", description: "Anime / Sub / Dub", url: "https://hikari.gg/" },
    { id: 'animeowl', title: "AnimeOwl", description: "Anime / Sub / Dub / Auto-Next", url: "https://animeowl.me/" },
    { id: 'animenosub', title: "AnimeNoSub", description: "Anime / Sub / Dub", url: "https://animenosub.to/" },
    { id: 'gojo', title: "Gojo", description: "Anime / Sub / Dub", url: "https://gojo.wtf/" },
    { id: 'animehub', title: "AnimeHub", description: "Anime / Sub / Dub / Auto-Next", url: "https://animehub.ac/" },
    { id: 'rivekun', title: "RiveKun", description: "Anime / Sub / Dub / Auto-Next", url: "https://rivekun.rivestream.org/" },
    { id: 'aniplay', title: "Aniplay", description: "Anime / Sub / Dub", url: "https://aniplay.lol/" },
    { id: 'anizone', title: "AniZone", description: "Anime / Sub", url: "https://anizone.to/" },
    { id: 'animestream', title: "Anime-Stream", description: "Anime / Sub / Dub", url: "https://anime-stream.io/" },
    { id: 'animeparadise', title: "AnimeParadise", description: "Anime / Sub / Dub", url: "https://www.animeparadise.moe/" },
    { id: 'kissanime', title: "KissAnime", description: "Anime / Sub / Dub / Auto-Next", url: "https://kissanime.com.ru/" },
    { id: 'animeonsen', title: "AnimeOnsen", description: "Anime / Sub / 720p", url: "https://animeonsen.xyz/" },
    { id: 'animestream2', title: "AnimeStream", description: "Anime / Sub / 720p", url: "https://anime.uniquestream.net/" },
    { id: 'animexin', title: "AnimeXin", description: "Anime / Donghua / Sub", url: "https://animexin.dev/" },
    { id: 'luciferdonghua', title: "Lucifer Donghua", description: "Anime / Donghua / Sub", url: "https://luciferdonghua.in/" },
    { id: 'anoboye', title: "Anoboye", description: "Anime / Donghua / Sub", url: "https://anoboye.com/" },
    { id: 'lmanime', title: "LMANIME", description: "Anime / Donghua / Sub", url: "https://lmanime.com/" },
    { id: 'cksub', title: "CKSub", description: "Anime / Donghua / Sub", url: "https://cksub.org/" },
    { id: 'myanime', title: "MyAnime", description: "Anime / Donghua / Sub", url: "https://myanime.live/" },
    { id: 'animekhor', title: "AnimeKhor", description: "Anime / Donghua / Sub", url: "https://animekhor.org/" },
    { id: 'crimson', title: "Crimson Subs", description: "Anime / Donghua / Sub", url: "https://crimsonfansubs.com/" },
    { id: 'crunchyroll', title: "Crunchyroll", description: "Anime / Sub / Dub / Auto-Next / Premium", url: "https://www.crunchyroll.com/videos/anime" },
    { id: 'hexa', title: "Hexa", description: "Anime / Movies / TV / Auto-Next / Watch Parties", url: "https://hexa.watch/" },
    { id: 'movie-web', title: "movie-web", description: "Anime / Movies / TV / Auto-Next", url: "https://erynith.github.io/movie-web-instances/" },
    { id: 'cineby', title: "Cineby", description: "Anime / Movies / TV / Auto-Next", url: "https://www.cineby.app/" },
    { id: 'bitcine', title: "Bitcine", description: "Anime / Movies / TV / Auto-Next", url: "https://www.bitcine.app/" },
    { id: 'fmoviesplus', title: "Fmovies+", description: "Anime / Movies / TV / Auto-Next", url: "https://www.fmovies.cat/" },
    { id: 'rive', title: "Rive", description: "Anime / Movies / TV / Auto-Next", url: "https://rivestream.org/" },
    { id: 'xprime', title: "XPrime", description: "Anime / Movies / TV / Auto-Next", url: "https://xprime.tv/" },
    { id: 'spenflix', title: "SpenFlix", description: "Anime / Movies / TV / Auto-Next", url: "https://watch.spencerdevs.xyz/" },
    { id: 'vidbox', title: "Vidbox", description: "Anime / Movies / TV / Auto-Next", url: "https://vidbox.to/" },
    { id: '1shows', title: "1Shows", description: "Anime / Movies / TV / Watch Parties / Auto Next", url: "https://www.1shows.live/" },
    { id: 'rgshows', title: "RgShows", description: "Anime / Movies / TV / Watch Parties / Auto Next", url: "https://www.rgshows.me/" },
    { id: 'vidora', title: "Vidora", description: "Anime / Movies / TV / Auto-Next", url: "https://watch.vidora.su/" },
    { id: 'flickystream', title: "FlickyStream", description: "Anime / Movies / TV", url: "https://flickystream.com/" },
    { id: 'uira', title: "uira.live", description: "Anime / Movies / TV", url: "https://uira.live/" },
    { id: 'netplay', title: "NetPlay", description: "Anime / Movies / TV / Auto-Next", url: "https://netplayz.ru/" },
    { id: 'moviemaze', title: "MovieMaze", description: "Anime / Movies / TV", url: "https://moviemaze.cc/" },
    { id: 'hydrahd', title: "HydraHD", description: "Anime / Movies / TV", url: "https://hydrahd.sh/" },
    { id: 'popcornmovies', title: "PopcornMovies", description: "Anime / Movies / TV", url: "https://popcornmovies.to/" },
    { id: 'mocine', title: "Mocine", description: "Anime / Movies / TV", url: "https://mocine.cam/" },
    { id: 'maxflix', title: "Maxflix", description: "Anime / Movies / TV", url: "https://maxflix.top/" },
    { id: '7xtream', title: "7Xtream", description: "Anime / Movies / TV / Auto Next", url: "https://movies.7xtream.com/" },
    { id: 'nepu', title: "NEPU", description: "Anime / Movies / TV / Auto-Next", url: "https://nepu.to/" },
    { id: 'willow', title: "Willow", description: "Anime / Movies / TV", url: "https://willow.arlen.icu/" },
    { id: 'alienflix', title: "AlienFlix", description: "Anime / Movies / TV", url: "https://alienflix.net/" },
    { id: 'enjoytown', title: "EnjoyTown", description: "Anime / Movies / TV", url: "https://enjoytown.pro/" },
    { id: 'wotaku', title: "Wotaku", description: "Anime resource directory and wiki", url: "https://wotaku.wiki/websites" },
    { id: 'theindex', title: "The Index", description: "Anime library and wiki", url: "https://theindex.moe/library/anime" },
    { id: 'everythingmoe', title: "EverythingMoe", description: "Anime resource collection", url: "https://everythingmoe.com/" },
    { id: 'zoro', title: "Zoro.to", description: "Anime / Large streaming site with minimal ads", url: "https://zoro.to" },
    { id: '9anime', title: "9anime", description: "Anime / Popular streaming site with HD quality", url: "https://9anime.to" },
    { id: 'nyaa', title: "Nyaa.si", description: "Anime / Popular anime torrent tracker", url: "https://nyaa.si" },
    { id: 'animixplay', title: "AniMixPlay", description: "Anime / Ad-free streaming with clean interface", url: "https://animixplay.to" },
    { id: 'animethemes', title: "AnimeThemes", description: "Anime themes collection", url: "https://animethemes.moe/" },
    { id: 'animetosho', title: "AnimeTosho", description: "Anime / Torrents / Downloads", url: "https://animetosho.org/" },
    { id: 'anidex', title: "AniDex", description: "Anime / Torrents", url: "https://anidex.info/" },
    { id: 'bakabt', title: "BakaBT", description: "Anime / Torrents / Private Tracker", url: "https://bakabt.me/" },
    { id: 'animebytes', title: "AnimeBytes", description: "Anime / Torrents / Private Tracker", url: "https://animebytes.tv/" },
    { id: 'animetorrents', title: "AnimeTorrents", description: "Anime / Torrents", url: "https://animetorrents.me/" },
    { id: 'animeout', title: "AnimeOut", description: "Anime / Downloads", url: "https://www.animeout.xyz/" },
    { id: 'animekaizoku', title: "AnimeKaizoku", description: "Anime / Downloads", url: "https://animekaizoku.com/" },
    { id: 'anidl', title: "AniDL", description: "Anime / Downloads", url: "https://anidl.org/" },
    { id: 'hi10anime', title: "Hi10Anime", description: "Anime / Downloads / High Quality", url: "https://hi10anime.com/" },
    { id: 'animekisa', title: "AnimeKisa", description: "Anime / Streaming", url: "https://animekisa.tv/" },
    { id: 'animeultima', title: "AnimeUltima", description: "Anime / Streaming", url: "https://www.animeultima.to/" },
    { id: 'animevibe', title: "AnimeVibe", description: "Anime / Streaming", url: "https://animevibe.tv/" },
    { id: 'animeflix', title: "AnimeFlix", description: "Anime / Streaming", url: "https://animeflix.live/" },
    { id: 'animefreak', title: "AnimeFreak", description: "Anime / Streaming", url: "https://www.animefreak.tv/" },
    { id: 'animeheaven', title: "AnimeHeaven", description: "Anime / Streaming", url: "https://animeheaven.ru/" },
    { id: 'animesuge', title: "AnimeSuge", description: "Anime / Streaming", url: "https://animesuge.to/" },
    { id: 'animeunity', title: "AnimeUnity", description: "Anime / Streaming", url: "https://animeunity.me/" },
    { id: 'animeworld', title: "AnimeWorld", description: "Anime / Streaming", url: "https://animeworld.tv/" },
    { id: 'animex', title: "AnimeX", description: "Anime / Streaming", url: "https://animex.live/" },
    { id: 'animezone', title: "AnimeZone", description: "Anime / Streaming", url: "https://animezone.to/" },
  ];

  const filterResources = (resources: { id: string, title: string, description: string, url: string }[]) => {
    if (!searchQuery) return resources;
    const lowerQuery = searchQuery.toLowerCase();
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredResources = filterResources(animeResources);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/70 z-10" />
          <Input
            placeholder="Search anime sites..."
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
        <h1 className="text-3xl font-bold text-primary mb-3">Anime Sites</h1>
        <p className="text-muted-foreground">
          Discover the best sites for streaming and downloading anime content.
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