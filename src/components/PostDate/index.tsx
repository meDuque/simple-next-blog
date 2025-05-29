import { FormatDateTime, FormatRelativeDate } from '@/utils/format-datetime'

interface PostDateProps {
  datetime: string
}

export function PostDate({ datetime }: PostDateProps) {
  return (
    <>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={datetime}
        title={FormatRelativeDate(datetime)}
      >
        {FormatDateTime(datetime)}
      </time>
    </>
  )
}
