import type { ElementType, ReactNode } from 'react'
import { textRole } from './Text.css'

type TextRole = keyof typeof textRole

type TextProps<T extends ElementType> = {
  as?: T
  roleType?: TextRole
  children: ReactNode
}

export function Text<T extends ElementType = 'p'>({ as, roleType = 'ui', children }: TextProps<T>) {
  const Component = as ?? 'p'
  return <Component className={textRole[roleType]}>{children}</Component>
}
