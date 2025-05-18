"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/resource-card";
import { useState } from 'react';

export default function MoviesTVPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const moviesTVResources = [
    { id: 'hexa', title: "Hexa", description: "Movies / TV / Auto-Next / Watch Parties", url: "https://hexa.watch/" },
    { id: 'movie-web', title: "movie-web", description: "Movies / TV / Auto-Next", url: "https://erynith.github.io/movie-web-instances/" },
    { id: 'xprime', title: "XPrime", description: "Movies / TV / Auto-Next", url: "https://xprime.tv/" },
    { id: 'spenflix', title: "SpenFlix", description: "Movies / TV / Auto-Next", url: "https://watch.spencerdevs.xyz/" },
    { id: 'vidbox', title: "Vidbox", description: "Movies / TV / Auto-Next", url: "https://vidbox.to/" },
    { id: '1shows', title: "1Shows", description: "Movies / TV / Watch Parties / Auto Next", url: "https://www.1shows.live/" },
    { id: 'rgshows', title: "RgShows", description: "Movies / TV / Watch Parties / Auto Next", url: "https://www.rgshows.me/" },
    { id: 'vidora', title: "Vidora", description: "Movies / TV / Auto-Next", url: "https://watch.vidora.su/" },
    { id: 'moviemaze', title: "MovieMaze", description: "Movies / TV", url: "https://moviemaze.cc/" },
    { id: 'hydrahd', title: "HydraHD", description: "Movies / TV", url: "https://hydrahd.sh/" },
    { id: 'maxflix', title: "Maxflix", description: "Movies / TV", url: "https://maxflix.top/" },
    { id: 'bingeflix', title: "Bingeflix", description: "Movies / TV", url: "https://bingeflix.tv/" },
    { id: 'mocine', title: "Mocine", description: "Movies / TV", url: "https://mocine.cam/" },
    { id: '7xtream', title: "7Xtream", description: "Movies / TV / Auto Next", url: "https://movies.7xtream.com/" },
    { id: 'nepu', title: "NEPU", description: "Movies / TV / Auto-Next", url: "https://nepu.to/" },
    { id: 'willow', title: "Willow", description: "Movies / TV", url: "https://willow.arlen.icu/" },
    { id: 'alienflix', title: "AlienFlix", description: "Movies / TV", url: "https://alienflix.net/" },
    { id: 'enjoytown', title: "EnjoyTown", description: "Movies / TV", url: "https://enjoytown.pro/" },
    { id: 'purplix', title: "Purplix", description: "Movies / TV", url: "https://neoxa.transdev.pw/" },
    { id: 'lookmovie', title: "LookMovie", description: "Movies / TV / Auto-Next / 480p", url: "https://lookmovie2.to/" },
    { id: 'broflix', title: "Broflix", description: "Movies / TV", url: "https://broflix.si/" },
    { id: '456movie', title: "456movie", description: "Movies / TV", url: "https://456movie.net/" },
    { id: 'arabflix', title: "Arabflix", description: "Movies / TV", url: "https://www.arabiflix.com/" },
    { id: 'yampi', title: "Yampi", description: "Movies / TV", url: "https://yampi.live/" },
    { id: 'mzone', title: "M-Zone", description: "Movies / TV", url: "https://www.m-zone.org/" },
    { id: 'mapple', title: "Mapple.tv", description: "Movies / TV", url: "https://mapple.tv/" },
    { id: 'lekuluent', title: "Lekuluent", description: "Movies / TV", url: "https://lekuluent.et/" },
    { id: 'catflix', title: "catflix", description: "Movies / TV", url: "https://catflix.su/" },
    { id: 'soaper', title: "Soaper", description: "Movies / TV / Auto-Next", url: "https://soaper.top/" },
    { id: 'ridomovies', title: "RidoMovies", description: "Movies / TV", url: "https://ridomovies.tv/" },
    { id: 'zillaxr', title: "ZILLAXR", description: "Movies / TV", url: "https://zilla-xr.xyz/" },
    { id: 'cinemadeck', title: "Cinema Deck", description: "Movies / TV", url: "https://cinemadeck.com/" },
    { id: 'wooflix', title: "Wooflix", description: "Movies / TV / 720p", url: "https://wooflix.tv/" },
    { id: 'valhallastream', title: "ValhallaStream", description: "Movies / TV", url: "https://valhallastream.pages.dev/" },
    { id: 'qstream', title: "Qstream", description: "Movies / TV", url: "https://qstream.pages.dev/" },
    { id: 'streamflix', title: "StreamFlix", description: "Movies / TV", url: "https://watch.streamflix.one/" },
    { id: 'flixindia', title: "FlixIndia", description: "Movies / TV / 720p", url: "https://watch.flixindia.site/" },
    { id: 'watch2me', title: "Watch2Me", description: "Movies / TV", url: "https://watch2me.site/" },
    { id: 'smashystream', title: "Smashystream", description: "Movies / TV", url: "https://smashystream.xyz/" },
    { id: 'smashy', title: "Smashy", description: "Movies / TV", url: "https://smashy.stream/" },
    { id: 'onionplay', title: "OnionPlay", description: "Movies / TV", url: "https://onionplay.ch/" },
    { id: 'stigstream', title: "StigStream", description: "Movies / TV", url: "https://stigstream.com/" },
    { id: 'flicker', title: "Flicker", description: "Movies / TV", url: "https://flickermini.pages.dev/" },
    { id: 'mp4hydra', title: "Mp4Hydra", description: "Movies", url: "https://mp4hydra.org/" },
    { id: 'kaitovault', title: "KaitoVault", description: "Movies / TV", url: "https://www.kaitovault.com/" },
    { id: 'ableflix', title: "AbleFlix", description: "Movies / TV", url: "https://ableflix.xyz/" },
    { id: 'nova', title: "Nova", description: "Movies / TV", url: "https://novastream.top/" },
    { id: 'nkiri', title: "Nkiri", description: "Movies / TV", url: "https://nkiri.cc/" },
    { id: 'autoembed', title: "Autoembed", description: "Movies / TV / Drama", url: "https://watch.autoembed.cc/" },
    { id: 'showbox', title: "ShowBox", description: "Movies / TV / Use Throwaway Gmail", url: "https://www.showbox.media/" },
    { id: 'primewire', title: "PrimeWire", description: "Movies / TV / Watch Parties", url: "https://www.primewire.tf/" },
    { id: 'uniquestream', title: "UniqueStream", description: "Movies / TV / 720p", url: "https://uniquestream.net/" },
    { id: 'fireflix', title: "FireFlix", description: "Movies / TV", url: "https://fireflix.pages.dev/" },
    { id: 'redflix', title: "RedFlix", description: "Movies / TV", url: "https://redflix.co/" },
    { id: 'letsstream', title: "Let's Stream", description: "Movies / TV", url: "https://www.letstream.site/" },
    { id: 'mokmobi', title: "Mokmobi", description: "Movies / TV", url: "https://mokmobi.ovh/" },
    { id: 'net3lix', title: "NET3LIX", description: "Movies / TV", url: "https://net3lix.world/" },
    { id: 'viewvault', title: "ViewVault", description: "Movies / TV", url: "https://viewvault.org/" },
    { id: 'noxe', title: "Noxe", description: "Movies / TV", url: "https://noxe.live/" },
    { id: 'cinego', title: "CineGo", description: "Movies / TV", url: "https://cinego.co/" },
    { id: 'bflix', title: "BFLIX", description: "Movies / TV", url: "https://bflix.sh/" },
    { id: 'novafork', title: "Novafork", description: "Movies / TV", url: "https://novafork.cc/" },
    { id: 'levidia', title: "Levidia", description: "Movies / TV", url: "https://www.levidia.ch/" },
    { id: 'uflix', title: "uFlix", description: "Movies / TV", url: "https://uflix.to/" },
    { id: 'movies4f', title: "Movies4F", description: "Movies / TV", url: "https://movies4f.com/" },
    { id: 'netplex', title: "Netplex", description: "Movies / TV", url: "https://netplex.site" },
    { id: 'pressplay', title: "PressPlay", description: "Movies / TV", url: "https://www.pressplay.top/" },
    { id: 'fsharetv', title: "FshareTV", description: "Movies", url: "https://fsharetv.co/" },
    { id: 'azmovies', title: "AZMovies", description: "Movies", url: "https://azmovies.ag/" },
    { id: 'corsflix', title: "CorsFlix", description: "Movies / TV", url: "https://corsflix.net/" },
    { id: 'yoyomovies', title: "YoYoMovies", description: "Movies / TV", url: "https://yoyomovies.net/" },
    { id: 'slidemovies', title: "SlideMovies", description: "Movies / TV", url: "https://slidemovies.org/" },
    { id: 'heartive', title: "Heartive", description: "Movies / TV", url: "https://heartive.pages.dev/" },
    { id: 'soapy', title: "SoaPy", description: "Movies / TV", url: "https://soapy.to/" },
    { id: 'yesmovie', title: "YesMovie", description: "Movies / TV / 720p", url: "https://yesmovies.ag/" },
    { id: 'zmov', title: "zmov", description: "Movies / TV", url: "https://zmov.vercel.app/" },
    { id: 'hopcorn', title: "Hopcorn+", description: "Movies / TV", url: "https://c.hopmarks.com/" },
    { id: 'wovie', title: "Wovie", description: "Movies / TV", url: "https://watchstream.site/" },
    { id: 'sflix', title: "SFlix", description: "Movies / TV", url: "https://sflix2.to/" },
    { id: 'vidplay', title: "VidPlay", description: "Movies / TV", url: "https://vidplay.top/" },
    { id: 'hollymoviehd', title: "HollyMovieHD", description: "Movies / TV", url: "https://hollymoviehd.cc/" },
    { id: 'brocoflix', title: "BrocoFlix", description: "Movies / TV", url: "https://brocoflix.com/" },
    { id: 'flixwatch', title: "FlixWatch", description: "Movies / TV", url: "https://flixwatch.site/" },
    { id: 'yassflix', title: "YassFlix", description: "Movies / TV", url: "https://yassflix.net/" },
    { id: 'way2movies', title: "Way2Movies", description: "Movies / TV", url: "https://way2movies.live/" },
    { id: '123movies', title: "123Movies", description: "Movies", url: "https://123moviesfree.at/" },
    { id: 'cataz', title: "Cataz", description: "Movies / TV", url: "https://cataz.ru/" },
    { id: 'reelzone', title: "ReelZone", description: "Movies / TV", url: "https://reelzone.vercel.app/" },
    { id: 'tvids', title: "TVids", description: "Movies / TV", url: "https://www.tvids.net/" },
    { id: 'zoechip', title: "Zoechip", description: "Movies / TV", url: "https://zoechip.org/" },
    { id: 'anymovies', title: "Downloads-Anymovies", description: "Movies", url: "https://www.downloads-anymovies.co/" },
    { id: 'tubi', title: "Tubi", description: "Movies / TV / 720p / Free w/ Ads", url: "https://tubitv.com" },
    { id: 'plex', title: "Plex", description: "Movies / TV / 720p / Free w/ Ads", url: "https://watch.plex.tv/" },
    { id: 'pluto', title: "Pluto", description: "Movies / TV / 720p / Free w/ Ads", url: "https://pluto.tv/" },
    { id: 'crackle', title: "Crackle", description: "Movies / TV / US Only / Free w/ Ads", url: "https://www.crackle.com/" },
    { id: 'freevee', title: "Freevee", description: "Movies / TV / US Only / Free w/ Ads", url: "https://www.amazon.com/gp/video/storefront/?ie=UTF8&contentId=freetv" },
    { id: 'roku', title: "Roku", description: "Movies / TV / US Only / Free w/ Ads", url: "https://therokuchannel.roku.com/" },
    { id: 'cineby', title: "Cineby", description: "Movies / TV / Auto-Next", url: "https://www.cineby.app/" },
    { id: 'bitcine', title: "Bitcine", description: "Movies / TV / Auto-Next", url: "https://www.bitcine.app/" },
    { id: 'fmoviesplus', title: "Fmovies+", description: "Movies / TV / Auto-Next", url: "https://www.fmovies.cat/" },
    { id: 'rive', title: "Rive", description: "Movies / TV / Auto-Next", url: "https://rivestream.org/" },
    { id: 'uira', title: "uira.live", description: "Movies / TV", url: "https://uira.live/" },
    { id: 'netplay', title: "NetPlay", description: "Movies / TV / Auto-Next", url: "https://netplayz.ru/" },
    { id: 'flickystream', title: "FlickyStream", description: "Movies / TV", url: "https://flickystream.com/" },
    { id: 'popcornmovies', title: "PopcornMovies", description: "Movies / TV", url: "https://popcornmovies.to/" },
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
        <h1 className="text-3xl font-bold text-primary mb-3">Movies & TV Streaming</h1>
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