import { Lamp, ProgressBar, lampsSlice } from '@/types/types'
import { StateCreator } from 'zustand'
import { PROGRESS_BAR } from '@/const'
import { produce } from 'immer'

const { LAMP } = PROGRESS_BAR

export const createLampSlice: StateCreator<lampsSlice> = (set) => ({
  lamps: null,
  currentLampId: null,
  currentProgressStep: {
    id: 1,
    step: LAMP,
    name: 'Lamp',
    status: 'pending',
    position: null,
    rotation: null,
  },
  setCurrentProgressStep: (currentLampId) => {
    set((state) => {
      if (state.lamps) {
        const lampIndex = state.lamps.findIndex(
          (lamp: any) => lamp.id === currentLampId
        )
        const currentLamp = state.lamps[lampIndex]
        const progressNextStep = currentLamp.progressBar?.find(
          (step: any) => step.status === 'pending'
        )
        return {
          currentProgressStep: {
            id: progressNextStep?.id,
            step: progressNextStep?.step,
            name: progressNextStep?.name,
            status: progressNextStep?.status,
            position: progressNextStep?.position,
            rotation: progressNextStep?.rotation,
          },
        }
      }
      return {
        currentProgressStep: {
          ...state.currentProgressStep,
        },
      }
    })
  },
  //change next progress step on click
  setCurrentLampId: (currentLampId) =>
    set({
      currentLampId,
    }),
  addLamps: (lamps) =>
    set({
      lamps,
    }),
  updateLampFulfilledProgressStep: (currentLampId, currentProgressStepId) =>
    set(
      produce((draft) => {
        const lampIndex = draft.lamps.findIndex(
          (lamp: any) => lamp.id === currentLampId
        )
        const progressStepIndex = draft.lamps[lampIndex].progressBar.findIndex(
          (step: any) => step.id === currentProgressStepId
        )
        draft.lamps[lampIndex].progressBar[progressStepIndex].status =
          'fulfilled'
      })
    ),
})
