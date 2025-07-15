import { NextRequest, NextResponse } from 'next/server'

export interface LedgerDto {
  id: string
  name: string
  organizationId: string
}

export interface PaginationDto<T> {
  items: T[]
  limit: number
  page: number
  total?: number
}

// Mock data
const ledgers: LedgerDto[] = [
  {
    id: 'ledger-1',
    name: 'Main Ledger',
    organizationId: '1'
  },
  {
    id: 'ledger-2',
    name: 'Secondary Ledger',
    organizationId: '1'
  },
  {
    id: 'ledger-3',
    name: 'USD Ledger',
    organizationId: '2'
  },
  {
    id: 'ledger-4',
    name: 'EUR Ledger',
    organizationId: '2'
  },
  {
    id: 'ledger-5',
    name: 'BRL Ledger',
    organizationId: '2'
  },
  {
    id: 'ledger-6',
    name: 'Development Ledger',
    organizationId: '3'
  },
  {
    id: 'ledger-7',
    name: 'Production Ledger',
    organizationId: '4'
  },
  {
    id: 'ledger-8',
    name: 'Testing Ledger',
    organizationId: '4'
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  // Filter by organizationId if provided
  let filteredLedgers = ledgers
  if (organizationId) {
    filteredLedgers = ledgers.filter(
      (ledger) => ledger.organizationId === organizationId
    )
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const items = filteredLedgers.slice(startIndex, endIndex)

  const response: PaginationDto<LedgerDto> = {
    items,
    limit,
    page,
    total: filteredLedgers.length
  }

  return NextResponse.json(response)
}
