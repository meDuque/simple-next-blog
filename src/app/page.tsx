import { Container } from '@/components/Container'
import { PostsList } from '@/components/PostsList'
import { SpinLoader } from '@/components/SpinLoader'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <Container>
        <header>
          <h1 className='text-6xl font-bold text-center py-8'>
            Aqui é a header
          </h1>

          <p className='text-justify'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus provident excepturi, voluptate
            similique eaque impedit blanditiis, obcaecati sunt, doloremque
            exercitationem veritatis incidunt ipsam? Fugit totam voluptatem
            obcaecati suscipit rerum. Rem eveniet sapiente voluptates explicabo
            magnam nesciunt provident et suscipit maiores, minus alias aliquam?
            Veritatis voluptatem debitis voluptatum? Ipsum quas architecto
            reprehenderit iusto quos itaque asperiores saepe omnis fugiat
            voluptatem! Eius maxime ipsam eos dicta laborum provident natus sed
            repellat quia consectetur ratione enim eligendi mollitia recusandae
            hic esse quo at, quas itaque necessitatibus temporibus,
            exercitationem eveniet. Corporis, mollitia corrupti. Enim facilis
            rem laborum illo minima quibusdam tempore molestiae animi
            repellendus quod! Asperiores harum architecto repudiandae rem quod
            obcaecati officia recusandae molestias est nihil iure, magni, totam
            mollitia dicta ipsa. Recusandae animi laborum, saepe rerum in ad
            delectus quasi adipisci maxime optio possimus doloremque accusamus
            cum tempora debitis? Rerum nesciunt excepturi, id eum quas sint
            tempora ex doloremque voluptas accusamus.
          </p>
        </header>
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
