'use client'

import React from 'react'

type SidebarContextType = {
  isCollapsed: boolean
  toggleSidebar: () => void
  setCollapsed: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType>(
  {} as SidebarContextType
)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

export function SidebarProvider({ children }: React.PropsWithChildren) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev)
  }

  const setCollapsed = (collapsed: boolean) => {
    setIsCollapsed(collapsed)
  }

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebar, setCollapsed }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
