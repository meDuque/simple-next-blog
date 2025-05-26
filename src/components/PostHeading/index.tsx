import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface PostHeadingProps {
  children: ReactNode
  url: string
  as?: 'h1' | 'h2'
}

export function PostHeading({
  url,
  as: Tag = 'h2',
  children,
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight font-bold',
  }
  const commonClasses = ''

  return (
    <>
      <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
        <Link className='group-hover:text-slate-500 transition' href={url}>
          {children}
        </Link>
      </Tag>
    </>
  )
}
