'use client'

import React from 'react'
import { cva } from 'class-variance-authority'
import { useSidebar } from '@/providers/sidebar-provider'
import { cn } from '@/lib/utils'

const sidebarVariants = cva(
  'group/sidebar shadow-sidebar dark:bg-cod-gray-950 relative flex flex-col transition-all duration-100',
  {
    variants: {
      collapsed: {
        true: 'w-fit',
        false: 'w-[244px]'
      }
    },
    defaultVariants: {
      collapsed: false
    }
  }
)

export const SidebarRoot = ({
  className,
  ...props
}: React.ComponentProps<'nav'>) => {
  const { isCollapsed } = useSidebar()

  return (
    <nav
      data-slot="sidebar-root"
      className={cn(sidebarVariants({ collapsed: isCollapsed }), className)}
      data-collapsed={isCollapsed}
      {...props}
    />
  )
}
