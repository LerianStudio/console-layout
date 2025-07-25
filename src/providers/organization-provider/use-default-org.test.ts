import { renderHook } from '@testing-library/react'
import { useDefaultOrg } from './use-default-org'
import { OrganizationDto } from '@/types/organization-dto'

// Mock getStorage and localStorage
jest.mock('@/lib/storage', () => ({
  getStorage: jest.fn()
}))
const { getStorage } = require('../../lib/storage')

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value
    }),
    clear: jest.fn(() => {
      store = {}
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key]
    })
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

describe('useDefaultOrg', () => {
  const org1: OrganizationDto = {
    id: 'org1',
    legalName: 'Org 1',
    legalDocument: 'doc1',
    address: {
      line1: 'A',
      neighborhood: 'B',
      zipCode: 'C',
      city: 'D',
      state: 'E',
      country: 'F'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const org2: OrganizationDto = {
    id: 'org2',
    legalName: 'Org 2',
    legalDocument: 'doc2',
    address: {
      line1: 'AA',
      neighborhood: 'BB',
      zipCode: 'CC',
      city: 'DD',
      state: 'EE',
      country: 'FF'
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }

  let setCurrent: jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
    setCurrent = jest.fn()
  })

  it('should set current org to the default from storage if present and found', () => {
    ;(getStorage as jest.Mock).mockReturnValue('org2')
    renderHook(() =>
      useDefaultOrg({
        organizations: [org1, org2],
        current: org1,
        setCurrent
      })
    )
    expect(setCurrent).toHaveBeenCalledWith(org2)
  })

  it('should set current org to the first if default is not found', () => {
    ;(getStorage as jest.Mock).mockReturnValue('notfound')
    renderHook(() =>
      useDefaultOrg({
        organizations: [org1, org2],
        current: org2,
        setCurrent
      })
    )
    expect(setCurrent).toHaveBeenCalledWith(org1)
  })

  it('should set current org to the first if no default is present', () => {
    ;(getStorage as jest.Mock).mockReturnValue(null)
    renderHook(() =>
      useDefaultOrg({
        organizations: [org1, org2],
        current: org2,
        setCurrent
      })
    )
    expect(setCurrent).toHaveBeenCalledWith(org1)
  })

  it('should not set current org if organizations is undefined', () => {
    ;(getStorage as jest.Mock).mockReturnValue('org1')
    renderHook(() =>
      useDefaultOrg({
        organizations: undefined,
        current: org1,
        setCurrent
      })
    )
    expect(setCurrent).not.toHaveBeenCalled()
  })

  it('should not set current org if organizations is empty', () => {
    ;(getStorage as jest.Mock).mockReturnValue('org1')
    renderHook(() =>
      useDefaultOrg({
        organizations: [],
        current: org1,
        setCurrent
      })
    )
    expect(setCurrent).not.toHaveBeenCalled()
  })

  it('should update localStorage when current org changes', () => {
    ;(getStorage as jest.Mock).mockReturnValue('org1')
    renderHook(() =>
      useDefaultOrg({
        organizations: [org1, org2],
        current: org2,
        setCurrent
      })
    )
    expect(localStorage.setItem).toHaveBeenCalledWith('defaultOrg', 'org2')
  })

  it('should not update localStorage if current org has no id', () => {
    ;(getStorage as jest.Mock).mockReturnValue('org1')
    const orgNoId = { ...org1, id: undefined }
    renderHook(() =>
      useDefaultOrg({
        organizations: [orgNoId as unknown as OrganizationDto],
        current: orgNoId as unknown as OrganizationDto,
        setCurrent
      })
    )
    expect(localStorage.setItem).not.toHaveBeenCalled()
  })
})
