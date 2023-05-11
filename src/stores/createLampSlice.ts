import { lampsSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createLampSlice: StateCreator<lampsSlice> = (set) => ({
  lamps: null,
  addLamps: (lamps) =>
    set({
      lamps,
    }),
})
