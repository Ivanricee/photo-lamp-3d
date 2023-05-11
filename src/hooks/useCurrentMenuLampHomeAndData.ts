import { useBoundStore } from '@/stores/useBoundStore'
import { useEffect, useState } from 'react'
import { type gltfData } from '@/types/types'

export function useCurrentMenuLampHomeAndData() {
  const [gltfLampData, setGltfLampData] = useState<gltfData | null>(null)
  const currentLampHomeId = useBoundStore((state) => state.currentLampHomeId)
  const homeLamps = useBoundStore((state) => state.homeLamps)

  useEffect(() => {
    if (currentLampHomeId && homeLamps) {
      const lampSelected = homeLamps?.find(
        (lamp) => lamp.id === currentLampHomeId
      )
      setGltfLampData({
        urlFile: lampSelected?.urlFile,
        text3DTest: { ...lampSelected?.text3DTest },
      })
    }
  }, [currentLampHomeId])

  return [currentLampHomeId, homeLamps, gltfLampData]
}
