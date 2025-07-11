import { LedgerDto } from '../../types'

const STORAGE_KEY = 'midaz_current_ledger'

/**
 * Salva o ledger atual no localStorage
 */
export const saveLedgerToStorage = (ledger: LedgerDto): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ledger))
  } catch (error) {
    console.warn('Failed to save ledger to localStorage:', error)
  }
}

/**
 * Carrega o ledger do localStorage
 */
export const loadLedgerFromStorage = (): LedgerDto | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null

    const parsed = JSON.parse(stored)

    // Validação básica da estrutura
    if (parsed && typeof parsed === 'object' && parsed.id) {
      return parsed as LedgerDto
    }

    return null
  } catch (error) {
    console.warn('Failed to load ledger from localStorage:', error)
    return null
  }
}

/**
 * Remove o ledger do localStorage
 */
export const clearLedgerFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.warn('Failed to clear ledger from localStorage:', error)
  }
}
