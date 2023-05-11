import { create } from 'zustand'
import { createMenuHomeSlice } from './createMenuHomeSlice'
import {
  type progressSilce,
  type GLTFsceneSlice,
  type menuHomeSlice,
  lampsSlice,
} from '@/types/types'
import { create3DSceneSlice } from './create3DSceneSlice'
import { createProgressSlice } from './createProgressSlice'
import { createLampSlice } from './createLampSlice'

export const useBoundStore = create<
  menuHomeSlice & GLTFsceneSlice & progressSilce & lampsSlice
>()((...a) => ({
  ...createMenuHomeSlice(...a),
  ...create3DSceneSlice(...a),
  ...createProgressSlice(...a),
  ...createLampSlice(...a),
}))
