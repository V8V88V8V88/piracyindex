"use client"

import { ResourceListPage } from '@/components/resource-list-page'
import { resources } from '@/lib/resources'

export default function MoviesTVPage() {
  return (
    <ResourceListPage
      title="Movies & TV Streaming"
      description="Movie aur TV streaming sites with smooth playback and auto-next style options."
      searchPlaceholder="Search movies and TV sites..."
      resources={resources['movies-tv']}
    />
  )
}
