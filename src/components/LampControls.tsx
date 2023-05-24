import { useBoundStore } from '@/stores/useBoundStore'
import { Lamp } from './Lamp'
import { PROGRESS_BAR } from '@/const'
import { ImageLamp } from './ImageLamp'

export function LampControls() {
  const currentProgressStep = useBoundStore(
    (state) => state.currentProgressStep
  )
  const { LAMP, IMG, TEXT, LAYER_1, LAYER_2 } = PROGRESS_BAR
  const progressSteps: { [key: string]: JSX.Element } = {
    [LAMP]: <Lamp />,
    [IMG]: <ImageLamp />,
  }
  const currentStep = progressSteps[currentProgressStep.step]

  return currentStep
}
