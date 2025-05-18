"use client"

import React, { createContext, useContext, useState } from 'react'

export type Category = 'home' | 'torrent' | 'movies-tv' | 'anime' | 'books' | 'games' | 'legal'

type CategoryContextType = {
  category: Category
  setCategory: (category: Category) => void
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined)

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<Category>('home')

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategory() {
  const context = useContext(CategoryContext)
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider')
  }
  return context
}

