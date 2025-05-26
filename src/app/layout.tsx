import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export enum AppTitleMetadata {
  APP_TITLE = 'The blog',
}

export const metadata: Metadata = {
  title: {
    default: `${AppTitleMetadata.APP_TITLE} - Este é um blog com Nextjs`,
    template: `%s | ${AppTitleMetadata.APP_TITLE}`,
  },
  description: 'blog simples criado com Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`antialiased`}>
        <Container>
          <Header />

          {children}

          <footer>
            <p className='text-6xl font-bold text-center py-8'>
              Aqui é a footer
            </p>
          </footer>
        </Container>
      </body>
    </html>
  )
}
