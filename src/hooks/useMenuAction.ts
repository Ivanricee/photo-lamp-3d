import { useBoundStore } from '@/stores/useBoundStore'
import { MENU_SELECT } from '@/consts'
interface Props {
  type: symbol
}
export function useMenuAction({ type }: Props) {
  const setLamp = useBoundStore((state) => state.setLamp)
  const lampHome = useBoundStore((state) => state.lampHome)

  const { HOME, MAIN, PHOTO } = MENU_SELECT

  const actionSelected = {
    [HOME]: [lampHome, setLamp],
  }
  const [state, action] = actionSelected[type]

  return [state, action]
}
