'use client'

import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '../../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../../ui/tooltip'
import { cn } from '../../../lib/utils'

type SidebarItemIconButtonProps = {
  title: string
  icon: React.ReactNode
  href: string
  active?: boolean
  disabled?: boolean
  disabledReason?: string
}

export const SidebarItemIconButton = ({
  title,
  icon,
  href,
  active,
  disabled = false,
  disabledReason
}: SidebarItemIconButtonProps) => {
  const clonedIcon = React.cloneElement(icon as React.ReactElement<any>, {
    className: cn(
      'group-hover/link:text-accent-foreground h-6 w-6 text-shadcn-400',
      active && 'text-black group-hover/link:text-black'
    )
  })

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          {disabled ? (
            <div
              data-slot="sidebar-item-icon-button"
              className={cn(
                buttonVariants({
                  variant: active ? 'activeLink' : 'hoverLink',
                  size: 'icon'
                }),
                'group/link flex h-9 w-9 items-center justify-center',
                disabled && 'cursor-not-allowed opacity-30'
              )}
              onClick={(e) => e.preventDefault()}
            >
              {clonedIcon}
            </div>
          ) : (
            <Link
              data-slot="sidebar-item-icon-button"
              href={href}
              className={cn(
                buttonVariants({
                  variant: active ? 'activeLink' : 'hoverLink',
                  size: 'icon'
                }),
                'group/link flex h-9 w-9 items-center justify-center',
                disabled && 'cursor-not-allowed opacity-30'
              )}
            >
              {clonedIcon}
            </Link>
          )}
        </TooltipTrigger>
        <TooltipContent side="right">
          {disabled ? disabledReason : title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
