import { renderHook } from '@testing-library/react'
import { useDefaultLedger } from './use-default-ledger'
import { OrganizationDto } from '@/types/organization-dto'
import { LedgerDto } from '@/types/ledger-dto'

// Mock getStorageObject and localStorage
jest.mock('@/lib/storage', () => ({
  getStorageObject: jest.fn()
}))
const { getStorageObject } = require('../../lib/storage')

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

const mockOrg: OrganizationDto = {
  id: 'org1',
  legalName: 'Test Org',
  legalDocument: '123',
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
const mockLedger1: LedgerDto = {
  id: 'ledger1',
  organizationId: 'org1',
  name: 'Ledger 1',
  metadata: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null
}
const mockLedger2: LedgerDto = {
  id: 'ledger2',
  organizationId: 'org1',
  name: 'Ledger 2',
  metadata: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null
}

describe('useDefaultLedger', () => {
  let setCurrentLedger: jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
    setCurrentLedger = jest.fn()
  })

  it('should set current ledger to the default from storage if present', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({ org1: 'ledger2' })
    const ledgers = [mockLedger1, mockLedger2]
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers,
        currentLedger: mockLedger1,
        setCurrentLedger
      })
    )
    expect(setCurrentLedger).toHaveBeenCalledWith(mockLedger2)
  })

  it('should set current ledger to the first ledger if no default is found', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({ org1: 'notfound' })
    const ledgers = [mockLedger1, mockLedger2]
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers,
        currentLedger: mockLedger2,
        setCurrentLedger
      })
    )
    expect(setCurrentLedger).toHaveBeenCalledWith(mockLedger1)
  })

  it('should set current ledger to empty object if ledgers is empty', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({})
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers: [],
        currentLedger: mockLedger1,
        setCurrentLedger
      })
    )
    expect(setCurrentLedger).toHaveBeenCalledWith({})
  })

  it('should not call setCurrentLedger if ledgers is undefined', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({})
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers: undefined,
        currentLedger: mockLedger1,
        setCurrentLedger
      })
    )
    expect(setCurrentLedger).not.toHaveBeenCalled()
  })

  it('should update storage when currentLedger changes', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({})
    const ledgers = [mockLedger1, mockLedger2]
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers,
        currentLedger: mockLedger2,
        setCurrentLedger
      })
    )
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'defaultLedgers',
      JSON.stringify({ org1: 'ledger2' })
    )
  })

  it('should handle missing/invalid storage gracefully', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue(undefined)
    const ledgers = [mockLedger1]
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers,
        currentLedger: mockLedger1,
        setCurrentLedger
      })
    )
    expect(setCurrentLedger).toHaveBeenCalledWith(mockLedger1)
  })

  it('should not call setCurrentLedger if current.id is missing', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({})
    const org = { ...mockOrg, id: undefined as any }
    renderHook(() =>
      useDefaultLedger({
        current: org,
        ledgers: [mockLedger1],
        currentLedger: mockLedger1,
        setCurrentLedger
      })
    )
    expect(setCurrentLedger).not.toHaveBeenCalled()
  })

  it('should not call setCurrentLedger if currentLedger.id is missing', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({})
    const ledger = { ...mockLedger1, id: undefined as any }
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers: [ledger],
        currentLedger: ledger,
        setCurrentLedger
      })
    )
    // No setItem call for missing id
    expect(localStorage.setItem).not.toHaveBeenCalled()
  })

  it('should not overwrite unrelated organization defaults in storage', () => {
    ;(getStorageObject as jest.Mock).mockReturnValue({ org2: 'ledgerX' })
    const ledgers = [mockLedger1]
    renderHook(() =>
      useDefaultLedger({
        current: mockOrg,
        ledgers,
        currentLedger: mockLedger1,
        setCurrentLedger
      })
    )
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'defaultLedgers',
      JSON.stringify({ org2: 'ledgerX', org1: 'ledger1' })
    )
  })
})
