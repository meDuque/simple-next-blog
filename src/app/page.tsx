import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { PostsList } from '@/components/PostsList'
import { SpinLoader } from '@/components/SpinLoader'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <Container>
        <Header />

        <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
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

          <div className='flex flex-col gap-4 sm:justify-center'>
            <time
              className='text-slate-600 block text-sm/tight'
              dateTime='2025-05-23'
            >
              23/05/2025 10:00
            </time>
            <h1 className='text-2xl/tight font-extrabold sm:text-4xl'>
              <Link href={'#'}>Lorem, ipsum dolor sit amet</Link>
            </h1>
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
