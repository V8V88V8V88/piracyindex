export type Resource = {
  id: string
  title: string
  description: string
  url: string
  starred?: boolean
}

// One primary URL per site, no mirrors.
export const resources: Record<'anime' | 'torrent' | 'movies-tv' | 'books' | 'games', Resource[]> = {
  anime: [
    { id: 'animekai', title: 'AnimeKai', description: 'Anime / Sub / Dub / Auto-Next', url: 'https://animekai.to/home', starred: true },
    { id: 'miruro', title: 'Miruro', description: 'Anime / Sub / Dub / Auto-Next', url: 'https://miruro.to', starred: true },
    { id: 'hianime', title: 'HiAnime', description: 'Anime / Sub / Dub / Auto-Next', url: 'https://hianimez.to', starred: true },
    { id: 'allmanga', title: 'AllManga', description: 'Anime / Sub / Dub', url: 'https://allmanga.to', starred: true },
    { id: 'animag', title: 'Animag', description: 'Anime / Sub / Dub', url: 'https://animag.to' },
  ],
  torrent: [
    { id: '1337x', title: '1337x', description: 'Public torrent tracker', url: 'https://1337x.to', starred: true },
    { id: 'rutracker', title: 'RuTracker', description: 'Large torrent tracker (signup required)', url: 'https://rutracker.org', starred: true },
    { id: 'limetorrents', title: 'LimeTorrents', description: 'Public torrent index', url: 'https://www.limetorrents.lol', starred: true },
    { id: 'torrentdownloads', title: 'TorrentDownloads', description: 'Public torrent index', url: 'https://www.torrentdownloads.me', starred: true },
    { id: 'knaben', title: 'Knaben', description: 'Torrent index / proxy', url: 'https://knaben.info', starred: true },
  ],
  'movies-tv': [
    { id: 'cineby', title: 'Cineby', description: 'Movies / TV / Auto-Next', url: 'https://cineby.gd', starred: true },
    { id: 'xprime', title: 'XPrime', description: 'Movies / TV / Auto-Next', url: 'https://xprime.today', starred: true },
    { id: 'rive', title: 'Rive', description: 'Movies / TV / Auto-Next', url: 'https://rivestream.org', starred: true },
    { id: 'hexa', title: 'Hexa', description: 'Movies / TV / Auto-Next / Watch Parties', url: 'https://hexa.watch', starred: true },
    { id: 'pstream', title: 'P-Stream', description: 'Movies / TV / Auto-Next', url: 'https://pstream.mov', starred: true },
    { id: 'flickystream', title: 'FlickyStream', description: 'Movies / TV / Auto-Next', url: 'https://flickystream1.xyz', starred: true },
    { id: 'veloratv', title: 'VeloraTV', description: 'Movies / TV / Auto-Next', url: 'https://veloratv.ru', starred: true },
    { id: 'aether', title: 'Aether', description: 'Movies / TV / Auto-Next', url: 'https://aether.elfhosted.com', starred: true },
    { id: 'spenflix', title: 'SpenFlix', description: 'Movies / TV / Auto-Next', url: 'https://spenflix.viperflare.xyz', starred: true },
    { id: 'cinegram', title: 'Cinegram', description: 'Movies / TV / Auto-Next', url: 'https://cinegram.net', starred: true },
    { id: 'shuttletv', title: 'ShuttleTV', description: 'Movies / TV / Auto-Next', url: 'https://shuttletv.zaptime.com' },
    { id: 'oneshows', title: '1Shows', description: 'Movies / TV / Auto-Next', url: 'https://1shows.ru' },
    { id: 'vidora', title: 'Vidora', description: 'Movies / TV / Auto-Next', url: 'https://watch.vidora.su' },
    { id: 'vidbox', title: 'Vidbox', description: 'Movies / TV / Auto-Next', url: 'https://vidbox.cc' },
    { id: 'hydrahd', title: 'HydraHD', description: 'Movies / TV', url: 'https://hydrahd.com' },
    { id: 'mapple', title: 'mapple.tv', description: 'Movies / TV', url: 'https://mapple.tv' },
  ],
  books: [
    { id: 'libgen', title: 'Library Genesis', description: 'Books / Scientific articles', url: 'https://libgen.is', starred: true },
    { id: 'zlibrary', title: 'Z-Library', description: 'Books / Papers', url: 'https://z-lib.org', starred: true },
    { id: 'gutenberg', title: 'Project Gutenberg', description: 'Free public domain books', url: 'https://www.gutenberg.org', starred: true },
    { id: 'scihub', title: 'Sci-Hub', description: 'Scientific paper access', url: 'https://sci-hub.se', starred: true },
    { id: 'pdfdrive', title: 'PDF Drive', description: 'General e-book search', url: 'https://www.pdfdrive.com', starred: true },
  ],
  games: [
    { id: 'csrin', title: 'CS.RIN.RU', description: 'Download / Torrent / Signup Required', url: 'https://cs.rin.ru', starred: true },
    { id: 'steamrip', title: 'SteamRIP', description: 'Download / Pre-Installed Games', url: 'https://steamrip.com', starred: true },
    { id: 'fitgirl', title: 'FitGirl Repacks', description: 'Compressed game repacks', url: 'https://fitgirl-repacks.site', starred: true },
    { id: 'goggames', title: 'GOG Games', description: 'DRM-free game downloads', url: 'https://gog-games.com', starred: true },
    { id: 'dodi', title: 'DODI Repacks', description: 'Game repacks', url: 'https://dodi-repacks.com', starred: true },
    { id: 'onlinefix', title: 'Online-Fix', description: 'Multiplayer fixes and releases', url: 'https://online-fix.me', starred: true },
  ],
}
