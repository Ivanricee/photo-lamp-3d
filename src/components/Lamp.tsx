import { useEffect } from 'react'
import { useBoundStore } from '@/stores/useBoundStore'
import { Card } from './Card'
import { Menu } from './Menu'
import { BTN_TYPE, MENU_SELECT, MENU_SIZE } from '@/const'
import { ButtonAction } from './ButtonAction'
import { type Lamp } from '@/types/types'

export function Lamp() {
  const lamps = useBoundStore((state) => state.lamps)
  const currentLampId = useBoundStore((state) => state.currentLampId)
  const setCurrentProgressStep = useBoundStore(
    (state) => state.setCurrentProgressStep
  )
  const currentProgressStep = useBoundStore(
    (state) => state.currentProgressStep
  )
  const updateLampFulfilledProgressStep = useBoundStore(
    (state) => state.updateLampFulfilledProgressStep
  )
  const setCurrentLampId = useBoundStore((state) => state.setCurrentLampId)
  useEffect(() => {
    if (!currentLampId && lamps) {
      setCurrentLampId(lamps[0].id)
    }
  }, [lamps, setCurrentLampId])
  useEffect(() => {
    if (currentLampId & currentProgressStep.id) {
      updateLampFulfilledProgressStep(currentLampId, currentProgressStep.id)
    }
  }, [currentLampId, updateLampFulfilledProgressStep])

  return (
    <Card title="CHOSE A LAMP">
      <Menu
        direction="flex-row"
        gap="gap-3"
        hasBackground={false}
        menuItems={lamps}
        size={MENU_SIZE.LARGE}
        type={MENU_SELECT.LAMP}
      />

      <div className="mt-8 flex justify-center">
        <ButtonAction
          action={setCurrentProgressStep}
          id={currentLampId}
          disabled={false}
          type={BTN_TYPE.APP}
        >
          Next
        </ButtonAction>
      </div>
    </Card>
  )
}
