import { AddressDto } from './address-dto'
import { MetadataDto } from './metadata-dto'

export type OrganizationDto = {
  id: string
  legalName: string
  parentOrganizationId?: string
  doingBusinessAs?: string
  legalDocument: string
  address: AddressDto
  metadata?: MetadataDto
  avatar?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}
