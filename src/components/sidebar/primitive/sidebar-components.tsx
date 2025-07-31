import React from 'react'
import { cn } from '@/lib/utils'

export type SidebarHeaderProps = React.ComponentProps<'div'> & {
  className?: string
  collapsed?: boolean
}

const SidebarHeader = ({
  className,
  collapsed,
  ...props
}: SidebarHeaderProps) => (
  <div
    data-slot="sidebar-header"
    data-collapsed={collapsed}
    className={cn(
      'dark:bg-cod-gray-950 flex h-[60px] items-center border-b bg-white px-4',
      collapsed && 'justify-center p-0',
      className
    )}
    {...props}
  />
)

export type SidebarContentProps = React.ComponentProps<'div'> & {
  className?: string
}

const SidebarContent = ({ className, ...props }: SidebarContentProps) => (
  <div
    data-slot="sidebar-content"
    className={cn(
      'group flex flex-1 flex-col gap-4 bg-white px-4 pt-4',
      'group-data-[collapsed=true]/sidebar:items-center group-data-[collapsed=true]/sidebar:px-2',
      'group-data-[collapsed=false]/sidebar:min-w-[244px]',
      className
    )}
    {...props}
  />
)

export type SidebarGroupProps = {
  className?: string
} & React.ComponentProps<'nav'>

const SidebarGroup = ({ className, ...props }: SidebarGroupProps) => (
  <nav
    data-slot="sidebar-group"
    className={cn(
      'grid gap-1',
      'group-data[collapsed=true]/sidebar:justify-center',
      className
    )}
    {...props}
  />
)

export type SidebarGroupTitleProps = React.PropsWithChildren & {
  collapsed?: boolean
}

const SidebarGroupTitle = ({ collapsed, children }: SidebarGroupTitleProps) => {
  if (collapsed) {
    return null
  }

  return (
    <div data-slot="sidebar-group-title" className="my-2 px-2">
      <p className="text-xs font-semibold tracking-[1.1px] text-zinc-500 uppercase">
        {children}
      </p>
    </div>
  )
}

export type SidebarFooterProps = {
  className?: string
} & React.ComponentProps<'nav'>

const SidebarFooter = ({ className, ...props }: SidebarFooterProps) => (
  <nav
    data-slot="sidebar-footer"
    className={cn(
      'border-shadcn-200 flex w-full justify-center border-t bg-white p-4',
      className
    )}
    {...props}
  />
)

export {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupTitle,
  SidebarFooter
}
