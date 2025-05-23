import type { Metadata } from 'next'
import './globals.css'

export enum AppTitleMetadata {
  APP_TITLE = 'The blog',
}

export const metadata: Metadata = {
  title: `${AppTitleMetadata.APP_TITLE} - Este é um blog com Nextjs`,
  description: 'blog simples criado com Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={` antialiased`}>{children}</body>
    </html>
  )
}
