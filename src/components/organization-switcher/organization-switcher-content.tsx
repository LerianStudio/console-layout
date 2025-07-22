'use client'

import { PopoverContent } from '../ui/popover'
import { StatusDisplay } from './status'
import { ArrowRight, Settings } from 'lucide-react'
import {
  PopoverPanel,
  PopoverPanelActions,
  PopoverPanelContent,
  PopoverPanelFooter,
  PopoverPanelLink,
  PopoverPanelTitle
} from './popover-panel'
import { OrganizationDto } from '@/types/organization-dto'
import lerianLogo from '@/public/svg/lerian-logo.svg'
import Image from 'next/image'

export type OrganizationSwitcherBaseProps = {
  currentOrganization: OrganizationDto
  data: OrganizationDto[]
  status: 'active' | 'inactive'
  image: string
  alt: string
}

export type OrganizationSwitcherContentProps = OrganizationSwitcherBaseProps & {
  onChange?: (organization: OrganizationDto) => void
  onClose: () => void
  editHref?: string
  settingsHref?: string
  editText?: string
  organizationText?: string
}

export const OrganizationSwitcherContent = ({
  currentOrganization,
  status,
  alt,
  image,
  data,
  onChange,
  onClose,
  editHref = '#',
  settingsHref = '#',
  editText = 'Edit',
  organizationText = 'Organization'
}: OrganizationSwitcherContentProps) => {
  return (
    <PopoverContent className="flex w-auto gap-4" side="right">
      <PopoverPanel>
        <PopoverPanelTitle>
          {currentOrganization.legalName}
          <StatusDisplay status={status} />
        </PopoverPanelTitle>
        <PopoverPanelContent>
          <Image
            src={image}
            alt={alt}
            className="rounded-full"
            height={112}
            width={112}
          />
        </PopoverPanelContent>
        <PopoverPanelFooter>
          <a href={`${editHref}/${currentOrganization.id}`} onClick={onClose}>
            {editText}
          </a>
        </PopoverPanelFooter>
      </PopoverPanel>

      {data?.length > 1 && (
        <PopoverPanelActions>
          {data.map((organization) => (
            <PopoverPanelLink
              key={organization.id}
              href="#"
              icon={<ArrowRight />}
              dense={data.length >= 4}
              onClick={() => onChange?.(organization)}
            >
              <Image
                src={organization.avatar || lerianLogo}
                alt={alt}
                width={28}
                className="rounded-full"
                height={28}
              />
              {organization.legalName}
            </PopoverPanelLink>
          ))}

          <PopoverPanelLink
            href={settingsHref}
            dense={data.length >= 4}
            onClick={onClose}
            icon={<Settings />}
          >
            {organizationText}
          </PopoverPanelLink>
        </PopoverPanelActions>
      )}
    </PopoverContent>
  )
}
