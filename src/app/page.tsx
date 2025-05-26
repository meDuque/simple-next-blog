import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { PostCoverImage } from '@/components/PostCoverImage'
import { PostHeading } from '@/components/PostHeading'
import { PostsList } from '@/components/PostsList'
import { SpinLoader } from '@/components/SpinLoader'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <Container>
        <Header />

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
          <PostCoverImage />

          <div className='flex flex-col gap-4 sm:justify-center'>
            <time
              className='text-slate-600 block text-sm/tight'
              dateTime='2025-05-23'
            >
              23/05/2025 10:00
            </time>

            <PostHeading as='h1' url='#'>
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

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
        </footer>
      </Container>
    </>
  )
}
