import { useQuery } from '@tanstack/react-query'
import { getFetcher } from './fetcher'
import { AuthPermissionDto } from '@/types/auth-dto'

export const useGetPermissions = ({ ...options }) => {
  return useQuery<AuthPermissionDto>({
    queryKey: ['permissions'],
    queryFn: getFetcher('/api/permissions'),
    placeholderData: {},
    ...options
  })
}
