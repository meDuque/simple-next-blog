import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface PostCoverImageProps {
  children?: ReactNode
}

export function PostCoverImage({ children }: PostCoverImageProps) {
  return (
    <>
      <Link className='w-full h-full overflow-hidden rounded-xl' href={'#'}>
        <Image
          className='w-full h-full object-cover object-center group-hover:scale-105 transition'
          src={'/images/bryen_0.png'}
          alt={'Titulo do post'}
          width={1200}
          height={720}
          priority
        />
      </Link>
      {children}
    </>
  )
}
