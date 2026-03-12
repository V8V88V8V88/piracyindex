"use client"

import { ResourceListPage } from '@/components/resource-list-page'
import { resources } from '@/lib/resources'

export default function TorrentSitesPage() {
  return (
    <ResourceListPage
      title="Torrent Sites"
      description="Torrent trackers aur indexes for movies, TV, games, software, and more."
      searchPlaceholder="Search torrent sites..."
      resources={resources.torrent}
    />
  )
}
