import { create } from 'zustand'
import { createMenuHomeSlice } from './createMenuHomeSlice'
import { type menuHomeSlice } from '@/types/types'

export const useBoundStore = create<menuHomeSlice>()((...a) => ({
  ...createMenuHomeSlice(...a),
}))
