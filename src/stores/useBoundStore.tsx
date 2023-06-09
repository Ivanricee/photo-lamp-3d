import { create } from 'zustand'
import { createMenuHomeSlice } from './createMenuHomeSlice'
import {
  type GLTFsceneSlice,
  type menuHomeSlice,
  lampsSlice,
} from '@/types/types'
import { create3DSceneSlice } from './create3DSceneSlice'
import { createLampSlice } from './createLampSlice'

export const useBoundStore = create<
  menuHomeSlice & GLTFsceneSlice & lampsSlice
>()((...a) => ({
  ...createMenuHomeSlice(...a),
  ...create3DSceneSlice(...a),
  ...createLampSlice(...a),
}))
