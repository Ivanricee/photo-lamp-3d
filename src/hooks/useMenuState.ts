import { useBoundStore } from '@/stores/useBoundStore'
import { MENU_SELECT } from '@/const'
interface Props {
  type: symbol
}
export function useMenuState({ type }: Props) {
  const setCurrentLampHomeId = useBoundStore(
    (state) => state.setCurrentLampHomeId
  )
  const currentLampHomeId = useBoundStore((state) => state.currentLampHomeId)
  const currentLampId = useBoundStore((state) => state.currentLampId)
  const setCurrentLamp = useBoundStore((state) => state.setCurrentLampId)

  const { HOME, LAMP, PHOTO, LAYER } = MENU_SELECT

  const actionSelected = {
    [HOME]: [currentLampHomeId, setCurrentLampHomeId],
    [LAMP]: [currentLampId, setCurrentLamp],
  }
  const [stateId, action] = actionSelected[type]
  return [stateId, action]
}
