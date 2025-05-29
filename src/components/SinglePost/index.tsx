import { findPostBySlugCached } from '@/lib/post/queries'
import Image from 'next/image'
import { PostHeading } from '../PostHeading'

interface SinglePostProps {
  slug: string
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug)

  return (
    <article>
      <header className='group'>
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={720}
        />

        <PostHeading url={`/post/${post.slug}`}>{post.title}</PostHeading>

        <p>
          {post.author} | {post.createdAt}
        </p>
      </header>
    </article>
  )
}
