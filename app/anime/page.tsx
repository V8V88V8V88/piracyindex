"use client"

import { ResourceListPage } from '@/components/resource-list-page'
import { resources } from '@/lib/resources'

export default function AnimePage() {
  return (
    <ResourceListPage
      title="Anime Sites"
      description="Anime streaming sites with sub/dub support and clean watch experience."
      searchPlaceholder="Search anime sites..."
      resources={resources.anime}
    />
  )
}
