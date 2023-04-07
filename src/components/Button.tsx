import Link from 'next/link'
import { type Lamp } from '@/types/types'

interface Props {
  children: React.ReactNode
  to: string
  disabled: boolean
}

export function Button({ children, to, disabled }: Props) {
  const basicBtn: string =
    'inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 text-sm font-medium tracking-wide border'
  const disabledBtn: string = `${basicBtn} border-green-800 cursor-not-allowed text-green-700 shadow-none`
  if (disabled) {
    return (
      <div className={disabledBtn}>
        <span>{children}</span>
      </div>
    )
  }
  return (
    <Link
      href={to}
      className={`${basicBtn} border-green-200 text-green-200 transition duration-300
      hover:border-green-500 hover:text-green-300 focus:border-green-600 focus:text-green-600 focus-visible:outline-none
      drop-shadow-btn-xl hover:drop-shadow-btn-hover-xl focus:drop-shadow-btn-hover-xl`}
    >
      <span>{children}</span>
    </Link>
  )
}
