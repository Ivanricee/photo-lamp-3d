import { StateCreator } from 'zustand'

import { type menuHomeSlice } from '@/types/types'

export const createMenuHomeSlice: StateCreator<menuHomeSlice> = (set) => ({
  homeLamps: null,
  currentLampHomeId: null,
  setHomeLamps: (lamps) => set({ homeLamps: lamps }),
  setCurrentLampHomeId: (currentLampHomeId) =>
    set({
      currentLampHomeId,
    }),
})
