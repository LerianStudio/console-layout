'use client'

import { Separator } from '../ui/separator'
import { LedgerSelector } from '../ledger-selector'
import { UserDropdown } from '../user-dropdown'
import { SettingsDropdown } from '../settings-dropdown'
import { useHeaderContext } from '../../providers/header-provider'
import { useIntl } from 'react-intl'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { VersionStatus } from '@/types'

const VersionIcon = ({ status }: { status: VersionStatus }) => {
  const intl = useIntl()

  return (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger>
          {status === VersionStatus.UpToDate && (
            <CheckCircle2 className="h-4 w-4 text-zinc-400" />
          )}
          {status === VersionStatus.Outdated && (
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          )}
        </TooltipTrigger>
        <TooltipContent>
          {status === VersionStatus.UpToDate &&
            intl.formatMessage({
              id: 'dialog.about.midaz.upToDate.tooltip',
              defaultMessage:
                'Your version is up to date and operating successfully.'
            })}
          {status === VersionStatus.Outdated &&
            intl.formatMessage({
              id: 'dialog.about.midaz.outdate.tooltip',
              defaultMessage:
                'A new version is available. We recommend updating.'
            })}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export interface HeaderProps {
  /**
   * Custom className for header container
   */
  className?: string
  /**
   * Whether to show the ledger selector
   */
  showLedgerSelector?: boolean
  /**
   * Version override (if not provided, will auto-detect from context)
   */
  version?: string
}

export const Header = ({ showLedgerSelector = true, version }: HeaderProps) => {
  const headerContext = useHeaderContext()
  const intl = useIntl()

  // Use version from props or context
  const displayVersion = version || headerContext.version

  return (
    <div className="flex h-[60px] w-full items-center border-b bg-white py-5 pr-16">
      <nav className="flex w-full items-center justify-between gap-4 pl-16">
        {showLedgerSelector && <LedgerSelector />}

        <div className="flex items-center gap-6">
          <p className="flex flex-row items-center gap-2 text-xs font-medium text-zinc-400">
            <span className="text-xs font-normal text-zinc-400">
              {headerContext.text.midazConsole} v.{displayVersion}
            </span>
            <VersionIcon status={headerContext.versionStatus} />
          </p>

          <Separator orientation="vertical" className="h-10" />

          <p className="text-xs font-normal text-zinc-400">
            {intl.locale.toUpperCase()}
          </p>

          <SettingsDropdown />
          <UserDropdown />
        </div>
      </nav>
    </div>
  )
}

export interface StaticHeaderProps {
  /**
   * Logo image source
   */
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  /**
   * Header title
   */
  title?: string
  /**
   * Custom className for header container
   */
  className?: string
}

export const StaticHeader = ({
  logo,
  title = 'Midaz Console',
  className
}: StaticHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-center border-b bg-white py-6">
      <nav className="flex w-full max-w-[1090px] items-center gap-4">
        {logo && (
          <img
            src={logo.src}
            alt={logo.alt}
            height={logo.height || 40}
            width={logo.width || 40}
            className="rounded-lg"
          />
        )}

        <div className="flex text-base text-zinc-800">{title}</div>
      </nav>
    </div>
  )
}
