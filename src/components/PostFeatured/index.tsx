import { PostHeading } from '../PostHeading'
import { PostCoverImage } from '../PostCoverImage'

// interface PostFeaturedProps {
//   children?: React.ReactNode
// }

export function PostFeatured() {
  const slug = 'qualquer'
  const postLink = `/post/${slug}`

  return (
    <>
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{ href: postLink }}
          imageProps={{
            src: '/images/bryen_5.png',
            alt: 'Post cover image',
            width: 1200,
            height: 720,
            priority: true,
          }}
        />

        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-05-23'
          >
            23/05/2025 10:00
          </time>

          <PostHeading as='h1' url={postLink}>
            Delectus porro officiis
          </PostHeading>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            inventore consectetur distinctio, maxime eaque libero temporibus
            repudiandae nulla at. Delectus porro officiis, quam omnis libero
            facilis. Dicta porro omnis dolor.
          </p>
        </div>
      </section>
    </>
  )
}
