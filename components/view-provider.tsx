"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ViewMode = 'grid' | 'list'

interface ViewContextType {
  viewMode: ViewMode
  setViewMode: (mode: ViewMode) => void
}

const ViewContext = createContext<ViewContextType | undefined>(undefined)

export function ViewProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>('grid')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('viewMode') as ViewMode
      if (saved === 'grid' || saved === 'list') {
        setViewModeState(saved)
      }
    }
  }, [])

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('viewMode', mode)
    }
  }

  // Always provide context, even before mounting
  return (
    <ViewContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewContext.Provider>
  )
}

export function useView() {
  const context = useContext(ViewContext)
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider')
  }
  return context
}

