import clsx from 'clsx'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada</title>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex flex-col gap-5 items-center justify-center text-center',
        )}
      >
        <div>
          <h1 className='text-5xl/tight mb-4 font-extrabold'>
            Erro 404 – Página não encontrada
          </h1>

          <p>
            Parece que você tentou acessar uma página que não existe em nosso
            site. Isso pode ter acontecido por alguns motivos:
          </p>
        </div>

        <div>
          <ul className='text-center'>
            <li>O endereço digitado está incorreto;</li>
            <li>A página foi movida ou removida; </li>
            <li>O link está desatualizado.</li>
          </ul>
        </div>

        <div>
          <h2 className='text-2xl/tight mb-4 font-extrabold'>
            O que você pode fazer:
          </h2>

          <ul className='text-center'>
            <li>
              Voltar à{' '}
              <Link
                className='hover:text-slate-500 transition delay-75'
                href={'/'}
              >
                página inicial;
              </Link>
            </li>
            <li>Navegar pelo menu principal;</li>
          </ul>
        </div>

        <p>
          Se você acredita que isso é um erro, entre em contato com nossa
          equipe. Agradecemos pela compreensão.
        </p>
      </div>
    </>
  )
}
