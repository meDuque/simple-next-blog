import { ReactNode } from 'react'

interface SinglePostProps {
  children?: ReactNode
}

export function SinglePost({ children }: SinglePostProps) {
  return (
    <>
      <h1>SinglePost</h1>
      {children}
    </>
  )
}
