import { NextRequest, NextResponse } from 'next/server'

const organizations = [
  {
    id: '1',
    legalName: 'Lerian Studio',
    avatar: '/svg/lerian-logo.svg',
    metadata: { onboarding: false }
  },
  {
    id: '2',
    legalName: 'Midaz Technologies',
    avatar: undefined,
    metadata: { onboarding: false }
  },
  {
    id: '3',
    legalName: 'Digital Banking Corp',
    avatar: undefined,
    metadata: { onboarding: true }
  },
  {
    id: '4',
    legalName: 'FinTech Solutions',
    avatar: '/svg/lerian-logo.svg',
    metadata: { onboarding: false }
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const organization = organizations.find((org) => org.id === id)

  if (!organization) {
    return NextResponse.json(
      { error: 'Organization not found' },
      { status: 404 }
    )
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200))

  return NextResponse.json(organization)
}
