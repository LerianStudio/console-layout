'use client'

import { OrganizationDto } from '@/types/organization-dto'
import { LedgerDto } from '@/types/ledger-dto'
import { getStorageObject } from '@/lib/storage'
import { useReducer, useEffect } from 'react'

type UseDefaultLedgerProps = {
  current: OrganizationDto
  ledgers?: LedgerDto[]
  currentLedger: LedgerDto
  setCurrentLedger: (ledger: LedgerDto) => void
}

const storageKey = 'defaultLedgers'

export function useDefaultLedger({
  current,
  ledgers,
  currentLedger,
  setCurrentLedger
}: UseDefaultLedgerProps) {
  const [defaultLedgers, setDefaultLedgers] = useReducer(
    (state: Record<string, string>, newState: Record<string, string>) => ({
      ...state,
      ...newState
    }),
    getStorageObject(storageKey, {})
  )

  const save = (key: string, value: string) => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({ ...defaultLedgers, [key]: value })
    )
    setDefaultLedgers({ [key]: value })
  }

  useEffect(() => {
    // Check if is there a organization selected
    if (current?.id) {
      // Check if ledgers have been fetched
      // If not, we should not do anything
      if (!ledgers) {
        return
      }

      // If this organization has no ledgers, set the current ledger to empty
      if (ledgers.length === 0) {
        setCurrentLedger({} as LedgerDto)
        return
      }

      // Check if there is a default ledger saved onto local storage
      const ledger = ledgers?.find(
        ({ id }) => defaultLedgers?.[current?.id!] === id
      )

      if (ledger) {
        // If the ledger is found, set it as the current ledger
        setCurrentLedger(ledger)
        return
      }

      // If the ledger is not found, set the first ledger as the current ledger
      setCurrentLedger(ledgers?.[0]!)
    }
  }, [current?.id, ledgers?.length])

  // Refresh current ledger when ledgers data changes (to pick up updates)
  useEffect(() => {
    if (currentLedger?.id && ledgers) {
      // Find the current ledger in the list of ledgers
      const ledger = ledgers.find((ledger) => ledger.id === currentLedger.id)

      // If the ledger is found and is different from the current ledger, set it as the current ledger
      if (ledger && ledger !== currentLedger) {
        setCurrentLedger(ledger)
      }
    }
  }, [ledgers])

  useEffect(() => {
    // Update storage according to the current ledger
    if (currentLedger?.id) {
      save(current.id!, currentLedger.id!)
    }
  }, [currentLedger?.id])
}
