import { BTN_TYPE } from '@/const'
import { type menuId } from '@/types/types'
interface Props {
  children: React.ReactNode
  action: (id: menuId | number) => void
  id: menuId
  disabled: boolean
  type: symbol
}

export function ButtonAction({ children, action, id, disabled, type }: Props) {
  const { APP, LAMP } = BTN_TYPE
  const btnTypeStyles: { [key: symbol]: string } = {
    [APP]: `w-1/2 flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 text-sm font-medium tracking-wide border
    border-green-200 text-green-200 transition duration-300
    hover:border-green-500 hover:text-green-300 focus:border-green-600 focus:text-green-600 focus-visible:outline-none
    drop-shadow-btn-xl-green hover:drop-shadow-btn-hover-xl-green focus:drop-shadow-btn-hover-xl`,
    [LAMP]: '', //w-full h-full p-1 flex justify-center items-center
  }

  const btnStyle = btnTypeStyles[type]

  const disableStyle = disabled
    ? 'scale-110 rounded-sm cursor-not-allowed shadow-none'
    : 'transition-all duration-300 group-active:scale-115 '
  return (
    <button
      disabled={disabled}
      onClick={() => action(id)}
      className={` ${btnStyle}
      ${disableStyle}`}
    >
      {children}
    </button>
  )
}
