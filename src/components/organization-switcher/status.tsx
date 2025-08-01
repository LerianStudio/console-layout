'use client'

import { cn } from '../../lib/utils'

export type StatusIndicatorProps = {
  status: 'active' | 'inactive' | string
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => (
  <div
    className={cn(
      'h-[10px] w-[10px] rounded-full',
      status === 'active' && 'bg-de-york-300',
      status === 'inactive' && 'bg-red-600'
    )}
  />
)

export const StatusDisplay = ({ status }: StatusIndicatorProps) => {
  return (
    <div className="flex items-center gap-2">
      <StatusIndicator status={status} />
      <span className="text-shadcn-400 text-xs font-medium">
        {status === 'active' && 'Active'}
        {status === 'inactive' && 'Inactive'}
      </span>
    </div>
  )
}
