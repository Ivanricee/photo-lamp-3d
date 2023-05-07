import { StateCreator } from 'zustand'
import { type GLTFsceneSlice } from '@/types/types'

export const create3DSceneSlice: StateCreator<GLTFsceneSlice> = (set) => ({
  currentScenes: [{ uuid: 'null', scene: null }],
  addLampHomeScene: (addScene) =>
    set((state) => ({
      currentScenes: {
        ...state.currentScenes,
        uuid: addScene.uuid,
        scene: addScene.scene,
      },
    })),
})
