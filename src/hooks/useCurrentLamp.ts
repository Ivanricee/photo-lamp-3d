import { useBoundStore } from '@/stores/useBoundStore'
import { useEffect } from 'react'

export function useCurrentLamp() {
  const currentLampId = useBoundStore((state) => state.currentLampId)
  const lamps = useBoundStore((state) => state.lamps)
  const lampProgressSteps = lamps?.find((lamp) => {
    return lamp.id === currentLampId
  })

  return lampProgressSteps || null
}
