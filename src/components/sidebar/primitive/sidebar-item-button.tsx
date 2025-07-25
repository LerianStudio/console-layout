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

export interface SidebarItemButtonProps {
  title: string
  icon: React.ReactNode
  href: string
  active?: boolean
  disabled?: boolean
  disabledReason?: string
  onClick?: () => void
}

export const SidebarItemButton = ({
  title,
  icon,
  href,
  active,
  disabled = false,
  disabledReason
}: SidebarItemButtonProps) => {
  const clonedIcon = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, {
        className: cn(
          'mr-3 h-6 w-6 text-shadcn-400',
          'group-hover/link:text-accent-foreground',
          active && 'text-black group-hover/link:text-black'
        )
      })
    : icon

  const content = (
    <React.Fragment>
      {clonedIcon}
      <span>{title}</span>
    </React.Fragment>
  )

  if (disabled) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <div
              data-slot="sidebar-item-button"
              className={cn(
                buttonVariants({
                  variant: active ? 'activeLink' : 'hoverLink',
                  size: 'sm'
                }),
                'group/link flex h-9 items-center justify-start',
                disabled && 'cursor-not-allowed opacity-30'
              )}
              onClick={(e) => e.preventDefault()}
            >
              {content}
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">{disabledReason}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Link
      data-slot="sidebar-item-button"
      href={href}
      className={cn(
        buttonVariants({
          variant: active ? 'activeLink' : 'hoverLink',
          size: 'sm'
        }),
        'group/link flex h-9 items-center justify-start',
        disabled && 'cursor-not-allowed opacity-30'
      )}
    >
      {content}
    </Link>
  )
}
