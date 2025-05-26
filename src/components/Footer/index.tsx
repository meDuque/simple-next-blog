// interface FooterProps {
//   children: ReactNode
// }

import { AppTitleMetadata } from '@/app/layout'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className='pb-16 text-center '>
        <p>
          <span>Copyright &copy; {new Date().getFullYear()} - </span>
          <Link className='hover:text-slate-500 transition delay-75' href={'/'}>
            {AppTitleMetadata.APP_TITLE}
          </Link>
        </p>
      </footer>
    </>
  )
}
