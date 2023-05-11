import { useBoundStore } from '@/stores/useBoundStore'
import { MENU_SELECT } from '@/const'
interface Props {
  type: symbol
}
export function useMenuState({ type }: Props) {
  const selectMenuHome = useBoundStore((state) => state.selectMenuHome)
  const currentLampHome = useBoundStore((state) => state.currentLampHomeId)

  const { HOME, PHOTO, LAYER } = MENU_SELECT

  const actionSelected = {
    [HOME]: [currentLampHome, selectMenuHome],
  }
  const [stateId, action] = actionSelected[type]
  return [stateId, action]
}
