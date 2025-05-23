import clsx from 'clsx'

interface SpinLoaderProps {
  className?: string
}

export function SpinLoader({ className }: SpinLoaderProps) {
  return (
    <>
      <div className={clsx('flex items-center justify-center', className)}>
        <div className='w-10 h-10 border-5 border-t-transparent light:border-slate-900 rounded-full animate-spin'></div>
      </div>
    </>
  )
}
