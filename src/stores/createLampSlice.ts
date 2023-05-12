import { lampsSlice } from '@/types/types'
import { StateCreator } from 'zustand'

export const createLampSlice: StateCreator<lampsSlice> = (set) => ({
  lamps: null,
  currentLampId: null,
  setCurrentLampId: (currentLampId) =>
    set({
      currentLampId,
    }),
  addLamps: (lamps) =>
    set({
      lamps,
    }),
})
