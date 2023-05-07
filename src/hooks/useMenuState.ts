import { useBoundStore } from '@/stores/useBoundStore'
import { MENU_SELECT } from '@/consts'
interface Props {
  type: symbol
}
export function useMenuState({ type }: Props) {
  const selectMenuHome = useBoundStore((state) => state.selectMenuHome)
  const currentLampHome = useBoundStore((state) => state.currentLampHomeId)

  const { HOME, MAIN, PHOTO } = MENU_SELECT

  const actionSelected = {
    [HOME]: [currentLampHome, selectMenuHome],
  }
  const [stateId, action] = actionSelected[type]
  return [stateId, action]
}
