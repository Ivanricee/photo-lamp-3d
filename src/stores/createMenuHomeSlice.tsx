import { StateCreator } from 'zustand'
import { type menuHomeSlice } from '@/types/types'

export const createMenuHomeSlice: StateCreator<menuHomeSlice> = (set) => ({
  lampHome: { id: 1, urlMesh: '' },
  setLamp: (lampHome) =>
    set((state) => ({
      lampHome: {
        ...state.lampHome,
        id: lampHome.id,
        urlMesh: lampHome.urlMesh,
      },
    })),
})
