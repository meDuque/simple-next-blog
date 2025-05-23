import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className='text-slate-900 bg-slate-300 min-h-screen dark:bg-slate-900 dark:text-slate-100'>
        <div className='max-w-screen-lg mx-auto px-8'>{children}</div>
      </div>
    </>
  )
}
