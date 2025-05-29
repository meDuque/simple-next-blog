import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'

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
      <body className={`antialiased dark`}>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  )
}
