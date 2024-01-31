import { type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element: HTMLElement | null
}

export const Portal: FC<PortalProps> = (props) => {
  const {
    children,
    element
  } = props

  if (element != null) {
    return createPortal(children, element)
  }

  return null
}
