export interface text3DTest {
  title: string
  caption: string
  position: [number, number, number]
  rotation: [number, number, number]
}
export interface ProgressBar {
  id: number
  step: string
  name: string
  status: string
  position: [number, number, number] | null
  rotation: [number, number, number] | null
  title?: string | null
  caption?: string | null
}

export interface CarouselLamp {
  id: number
  img: string
  alt: string
  size: number
  caption: string | null
  urlFile: string
  text3DTest: text3DTest | null
}
export interface Lamp {
  id: number
  img: string
  alt: string
  size: number
  caption: string | null
  urlFile: string
  progressBar: ProgressBar[] | null
}

export type idLamp = typeof Pick<Lamp, 'id'>
export type urlFile = typeof Pick<Lamp, 'urlFile'>
export type menuId = idLamp | number
export type gltfData = typeof Pick<Lamp, 'id' | 'text3DTest'>
export interface GLTFscene {
  uuid?: string | null
  scene?: THREE.Scene | null
}
//zustand
export interface menuHomeSlice {
  homeLamps: CarouselLamp[] | null
  currentLampHomeId: menuId
  setHomeLamps: (lamp: CarouselLamp[]) => void
  setCurrentLampHomeId: (currentLampHomeId: menuId) => void
}
export interface GLTFsceneSlice {
  currentScenes: GLTFscene[]
  addLampHomeScene: (addScene: GLTFscene) => void
}

export interface lampsSlice {
  lamps: Lamp[] | null
  currentLampId: menuId
  currentProgressStep: progressBar | null
  setCurrentProgressStep: (currentLampId: number) => void
  setCurrentLampId: (currentLampId: menuId) => void
  addLamps: (lamp: Lamp[]) => void
  updateLampFulfilledProgressStep: (
    currentLampId: idLamp,
    currentProgressStepId: number
  ) => void
}
