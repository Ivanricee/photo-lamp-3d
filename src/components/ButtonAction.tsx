import { type idLamp } from '@/types/types'
type homeMenuAction = {
  id: idLamp
  urlMesh?: string
}
interface Props {
  children: React.ReactNode
  action: ({ id, urlMesh }: homeMenuAction) => void
  menuItem: homeMenuAction
  disabled: boolean
}

export function ButtonAction({ children, action, menuItem, disabled }: Props) {
  const disableStyle = disabled
    ? 'scale-110 rounded-sm cursor-not-allowed shadow-none'
    : 'transition-all duration-300 group-active:scale-115 '

  return (
    <button
      disabled={disabled}
      onClick={() => action(menuItem)}
      className={`w-full h-full p-1 flex justify-center items-center ${disableStyle}`}
    >
      {children}
    </button>
  )
}
