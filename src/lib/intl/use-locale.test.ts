import { renderHook, act } from '@testing-library/react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useLocale } from './use-locale'

jest.mock('cookies-next')
jest.mock('next/navigation')
jest.mock('./use-intl', () => ({
  useIntl: jest.fn()
}))
import { useIntl } from './use-intl'

describe('useLocale', () => {
  const mockSetCookie = setCookie as jest.Mock
  const mockUseIntl = useIntl as jest.Mock
  const mockUseRouter = useRouter as jest.Mock

  beforeEach(() => {
    mockSetCookie.mockClear()
    mockUseIntl.mockReset()
    mockUseIntl.mockReturnValue({ locale: 'en' })
    mockUseRouter.mockReturnValue({ refresh: jest.fn() })
  })

  it('should return the current locale', () => {
    const { result } = renderHook(() => useLocale())
    expect(result.current.locale).toBe('en')
  })

  it('should set the locale and refresh the router', () => {
    const { result } = renderHook(() => useLocale())
    const newLocale = 'fr'

    act(() => {
      result.current.setLocale(newLocale)
    })

    expect(mockSetCookie).toHaveBeenCalledWith('locale', newLocale)
    expect(mockUseRouter().refresh).toHaveBeenCalled()
  })
})
