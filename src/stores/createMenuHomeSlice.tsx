import { StateCreator } from 'zustand'

import { type menuHomeSlice } from '@/types/types'

export const createMenuHomeSlice: StateCreator<menuHomeSlice> = (set) => ({
  homeLamps: null,
  currentLampHomeId: null,
  setLamps: (lamps) => set({ homeLamps: lamps }),
  selectMenuHome: (selectedMenuItemHomeId) =>
    set({
      currentLampHomeId: selectedMenuItemHomeId,
    }),
})
