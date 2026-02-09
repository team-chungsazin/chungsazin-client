import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { linkButton } from './LinkButton.css'

type LinkButtonProps = {
  to: string
  children: ReactNode
}

export function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <Link to={to} className={linkButton}>
      {children}
    </Link>
  )
}
