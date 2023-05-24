import { type menuId } from '@/types/types'
interface Props {
  children: React.ReactNode
  action: (id: menuId) => void
  id: menuId
  disabled: boolean
}

export function ButtonCarousel({ children, action, id, disabled }: Props) {
  const disableStyle = disabled
    ? 'scale-110 rounded-sm cursor-not-allowed shadow-none'
    : 'transition-all duration-300 group-active:scale-115 '
  return (
    <button
      disabled={disabled}
      onClick={() => action(id)}
      className={`w-full h-full p-1 flex justify-center items-center ${disableStyle}`}
    >
      {children}
    </button>
  )
}
