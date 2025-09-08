import * as LucideIcons from 'lucide-react'

export const getIcon = (icon: string): React.ComponentType => {
  const IconComponent =
    (LucideIcons as unknown as Record<string, React.ComponentType>)[icon] ||
    LucideIcons.CircleX
  return IconComponent
}
