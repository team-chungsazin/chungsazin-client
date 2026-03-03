import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { textRole } from './Text.css'

type TextRole = keyof typeof textRole

type TextProps<T extends ElementType> = {
  as?: T
  roleType?: TextRole
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function Text<T extends ElementType = 'p'>({
  as,
  roleType = 'ui',
  className = '',
  children,
  // intrinsic props pass-through
  ...props
}: TextProps<T>) {
  const Component = as ?? 'p'
  return (
    <Component {...props} className={`${textRole[roleType]} ${className}`.trim()}>
      {children}
    </Component>
  )
}
