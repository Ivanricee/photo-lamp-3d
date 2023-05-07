export interface text3DTest {
  id: number
  title: string
  caption: string
  position: [number, number, number]
  rotation: [number, number, number]
}
export interface Lamp {
  id: number
  img: string
  alt: string
  size: number
  caption: string | null
  urlFile: string
  text3DTest: text3DTest | null
}
export type idLamp = typeof Pick<Lamp, 'id'>
export type urlFile = typeof Pick<Lamp, 'urlFile'>
export type menuId = idLamp | number
export type gltfData = typeof Pick<Lamp, 'id' | 'text3DTest'>
//zustand
export interface menuHomeSlice {
  homeLamps: Lamp[] | null
  currentLampHomeId: menuId
  setLamps: (lamp: Lamp[]) => void
  selectMenuHome: (selectedMenuItemHomeId: menuId) => void
}
export interface GLTFscene {
  uuid?: string | null
  scene?: THREE.Scene | null
}
export interface GLTFsceneSlice {
  currentScenes: GLTFscene[]
  addLampHomeScene: (addScene: GLTFscene) => void
}
