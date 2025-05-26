import { FormatRelativeDate, FormatDateTime } from '@/utils/format-datetime'
import { ReactNode } from 'react'
import { PostHeading } from '../PostHeading'

interface PostSummaryProps {
  children?: ReactNode
  postHeading: 'h1' | 'h2'
  postLink: string
  createdAt: string
  title: string
  excerpt: string
}

export function PostSummary({
  children,
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <>
      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime={createdAt}
          title={FormatRelativeDate(createdAt)}
        >
          {FormatDateTime(createdAt)}
        </time>

        <PostHeading as={postHeading} url={postLink}>
          {title}
        </PostHeading>

        <p>{excerpt}</p>
      </div>
      {children}
    </>
  )
}
