export interface Lamp {
  id: number
  img: string
  alt: string
  size: number
  caption?: string | null
  urlMesh: string
}
export type idLamp = typeof Pick<Lamp, 'id'>
//zustand
export interface menuHomeSlice {
  lampHome: idLamp
  setLamp: (lamp: idLamp) => void
}
