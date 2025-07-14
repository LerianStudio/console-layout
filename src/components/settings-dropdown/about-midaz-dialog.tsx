'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '../ui/dialog'
import lerianFlag from '@/public/images/lerian-flag.jpg'
import { Button } from '../ui/button'
import { useIntl } from 'react-intl'
import Image from 'next/image'

export interface AboutMidazDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  /** Custom version override */
  version?: string
  /** Terms of use link */
  termsLink?: string
  /** License link */
  licenseLink?: string
  /** Show terms and license links */
  showLinks?: boolean
}

export const AboutMidazDialog = ({
  open,
  setOpen,
  version,
  termsLink = '',
  licenseLink = '',
  showLinks = false
}: AboutMidazDialogProps) => {
  const intl = useIntl()

  // Auto-detect version or use provided
  const displayVersion =
    version || process.env.NEXT_PUBLIC_MIDAZ_VERSION || '1.0.0'

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="w-fit justify-center gap-6 p-4 sm:max-w-[425px] [&>button]:hidden"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <DialogHeader className="flex flex-col items-center">
          <Image src={lerianFlag} alt="Lerian Flag" width={324} height={32} />
          <div className="flex flex-col gap-2">
            <DialogTitle className="text-lg font-bold text-zinc-900 sm:text-center">
              Midaz Console
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-2 text-zinc-500 sm:text-center">
              <span>
                {intl.formatMessage(
                  {
                    id: 'dialog.about.midaz.version',
                    defaultMessage: 'Version {version}'
                  },
                  { version: displayVersion }
                )}
              </span>
            </DialogDescription>
          </div>

          {showLinks && (termsLink || licenseLink) && (
            <DialogDescription className="flex justify-center gap-4 text-zinc-800">
              {termsLink && (
                <Button variant="link" className="h-fit p-0" asChild>
                  <a href={termsLink} target="_blank" rel="noopener noreferrer">
                    {intl.formatMessage({
                      id: 'dialog.about.midaz.terms',
                      defaultMessage: 'Terms of Use'
                    })}
                  </a>
                </Button>
              )}
              {licenseLink && (
                <Button variant="link" className="h-fit p-0" asChild>
                  <a
                    href={licenseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {intl.formatMessage({
                      id: 'dialog.about.midaz.license',
                      defaultMessage: 'License'
                    })}
                  </a>
                </Button>
              )}
            </DialogDescription>
          )}

          <DialogDescription className="flex text-zinc-500 sm:text-center">
            {intl.formatMessage(
              {
                id: 'dialog.about.midaz.copyright',
                defaultMessage:
                  'Copyright © Lerian {year} - All rights reserved.'
              },
              { year: new Date().getFullYear() }
            )}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex sm:justify-center">
          <Button onClick={() => setOpen(false)} variant="outline">
            {intl.formatMessage({
              id: 'common.close',
              defaultMessage: 'Close'
            })}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
