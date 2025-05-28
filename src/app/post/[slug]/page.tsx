import { ReactNode } from 'react'

interface SlugProps {
  children: ReactNode
}

export default function SinglePagePost({ children }: SlugProps) {
  return (
    <>
      <h1>Slug</h1>
      {children}
    </>
  )
}
