"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function AnimePage() {
  const [searchQuery, setSearchQuery] = useState('');

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
    { id: 'animethemes', title: "AnimeThemes", description: "Anime themes collection", url: "https://animethemes.moe/" }
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
        <h1 className="text-3xl font-bold text-primary mb-3">Anime Sites</h1>
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