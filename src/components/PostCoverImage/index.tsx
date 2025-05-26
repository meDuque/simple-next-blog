import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface PostCoverImageProps {
  imageProps: React.ComponentProps<typeof Image>
  linkProps: React.ComponentProps<typeof Link>
}

export function PostCoverImage({ linkProps, imageProps }: PostCoverImageProps) {
  return (
    <>
      <Link
        className={clsx(
          'w-full h-full overflow-hidden rounded-xl',
          linkProps.className,
        )}
        {...linkProps}
      >
        <Image
          className={clsx(
            'w-full h-full object-cover object-center group-hover:scale-105 transition',
            imageProps.className,
          )}
          {...imageProps}
          alt={imageProps.alt}
        />
      </Link>
    </>
  )
}
