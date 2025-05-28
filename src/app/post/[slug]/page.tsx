import { findPostBySlugCached } from '@/lib/post/queries'
import { notFound } from 'next/navigation'

interface PostSlugPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params
  let post

  try {
    post = await findPostBySlugCached(slug)
  } catch {
    post = undefined
  }

  if (!post) {
    notFound()
  }

  return (
    <div>
      <p>{post.content}</p>
    </div>
  )
}
