"use client"

import { ResourceListPage } from '@/components/resource-list-page'
import { resources } from '@/lib/resources'

export default function BooksPage() {
  return (
    <ResourceListPage
      title="Books Piracy"
      description="E-book aur research resources including libraries, archives, and paper access."
      searchPlaceholder="Search book resources..."
      resources={resources.books}
    />
  )
}
