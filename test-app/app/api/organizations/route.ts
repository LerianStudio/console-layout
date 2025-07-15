import { NextRequest, NextResponse } from 'next/server'

export interface OrganizationDto {
  id: string
  legalName: string
  avatar?: string
  metadata?: {
    onboarding?: boolean
  }
}

export interface PaginationDto<T> {
  items: T[]
  limit: number
  page: number
  total?: number
}

// Mock data
const organizations: OrganizationDto[] = [
  {
    id: '1',
    legalName: 'Lerian Studio',
    avatar: '/svg/approved-circle.svg',
    metadata: {
      onboarding: false
    }
  },
  {
    id: '2',
    legalName: 'Midaz Technologies',
    avatar: undefined, // Will use fallback
    metadata: {
      onboarding: false
    }
  },
  {
    id: '3',
    legalName: 'Digital Banking Corp',
    avatar: undefined,
    metadata: {
      onboarding: true
    }
  },
  {
    id: '4',
    legalName: 'FinTech Solutions',
    avatar: '/svg/approved-circle.svg',
    metadata: {
      onboarding: false
    }
  }
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const items = organizations.slice(startIndex, endIndex)

  const response: PaginationDto<OrganizationDto> = {
    items,
    limit,
    page,
    total: organizations.length
  }

  return NextResponse.json(response)
}

// Individual organization endpoint
export async function POST(request: NextRequest) {
  const body = await request.json()
  const newOrg: OrganizationDto = {
    id: String(organizations.length + 1),
    legalName: body.legalName,
    avatar: body.avatar,
    metadata: body.metadata || { onboarding: false }
  }

  organizations.push(newOrg)

  return NextResponse.json(newOrg, { status: 201 })
}
