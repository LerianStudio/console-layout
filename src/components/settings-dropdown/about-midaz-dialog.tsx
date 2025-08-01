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
import { useIntl } from '@/lib/intl/use-intl'
import Image from 'next/image'
import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import { Alert, AlertTitle, AlertDescription } from '../ui/alert'
import { VersionStatus } from '@/types/midaz-info-dto'
import { useGetMidazInfo } from '@/client/midaz-info'

const UpToDateAlert = () => {
  const intl = useIntl()

  return (
    <Alert variant="success" className="mb-6 flex max-w-[324px] gap-3">
      <div>
        <CheckCircle2
          className="mt-0.5 h-6 w-6 text-green-600"
          aria-hidden="true"
        />
      </div>
      <div>
        <AlertTitle>
          {intl.formatMessage({
            id: 'dialog.about.midaz.upToDate.title',
            defaultMessage: 'Version Notice'
          })}
        </AlertTitle>
        <AlertDescription>
          {intl.formatMessage({
            id: 'dialog.about.midaz.upToDate.description',
            defaultMessage: 'You are using the latest version of Midaz Console.'
          })}
        </AlertDescription>
      </div>
    </Alert>
  )
}

const OutdateAlert = () => {
  const intl = useIntl()
  const docLink = 'https://docs.lerian.studio/'

  return (
    <Alert variant="warning" className="mb-6 flex max-w-[324px] flex-row gap-3">
      <div>
        <AlertTriangle
          className="mt-0.5 h-6 w-6 text-yellow-500"
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-col gap-2">
        <AlertTitle>
          {intl.formatMessage({
            id: 'dialog.about.midaz.outdate.title',
            defaultMessage: 'New version available'
          })}
        </AlertTitle>
        <AlertDescription>
          {intl.formatMessage({
            id: 'dialog.about.midaz.outdate.description',
            defaultMessage: 'A new version is available. We recommend updating.'
          })}
        </AlertDescription>
        <Button
          icon={<ArrowRight className="size-4" />}
          iconPlacement="end"
          variant="link"
          className="w-fit p-0 text-[12px] font-medium text-[#854D0E] no-underline"
          onClick={() => {
            window.open(docLink, '_blank', 'noopener,noreferrer')
          }}
        >
          {intl.formatMessage({
            id: 'dialog.about.midaz.outdate.button',
            defaultMessage: 'Access Documentation'
          })}
        </Button>
      </div>
    </Alert>
  )
}

export interface AboutMidazDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export const AboutMidazDialog = ({ open, setOpen }: AboutMidazDialogProps) => {
  const intl = useIntl()
  const termsLink = ''
  const licenseLink = ''

  const { data: versionData } = useGetMidazInfo()

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
            <div className="relative flex flex-row items-center justify-center gap-2">
              <p className="text-xs font-medium text-zinc-500 sm:text-center">
                {intl.formatMessage(
                  {
                    id: 'dialog.about.midaz.version',
                    defaultMessage: 'Version {version}'
                  },
                  { version: versionData?.currentVersion }
                )}
              </p>
            </div>
          </div>

          {versionData?.versionStatus === VersionStatus.UpToDate && (
            <UpToDateAlert />
          )}
          {versionData?.versionStatus === VersionStatus.Outdated && (
            <OutdateAlert />
          )}

          {(termsLink || licenseLink) && (
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
