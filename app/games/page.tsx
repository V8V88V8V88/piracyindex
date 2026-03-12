"use client"

import { ResourceListPage } from '@/components/resource-list-page'
import { resources } from '@/lib/resources'

export default function GamesPage() {
  return (
    <ResourceListPage
      title="Games"
      description="PC game download, repack, and multiplayer-fix resources in one place."
      searchPlaceholder="Search game resources..."
      resources={resources.games}
    />
  )
}
