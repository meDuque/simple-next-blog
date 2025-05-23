import { PostsList } from '@/components/PostsList'
import { SpinLoader } from '@/components/SpinLoader'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é a footer</p>
      </footer>
    </div>
  )
}
