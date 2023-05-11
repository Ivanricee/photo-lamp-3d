import { PROGRESS_BAR } from '@/const'
import { progressSilce } from '@/types/types'
import { StateCreator } from 'zustand'
import { produce } from 'immer'
const { LAMP, IMG } = PROGRESS_BAR

export const createProgressSlice: StateCreator<progressSilce> = (set) => ({
  progressStep: [
    {
      id: 1,
      step: LAMP,
    },
    {
      id: 2,
      step: IMG,
    },
  ],
  currentProgressStep: {
    id: 1,
    step: LAMP,
  },

  addProgressBarItem: (progressItems) =>
    set(
      produce((draft) => {
        draft.currentProgressStep.push(progressItems)
      })
    ),
})
