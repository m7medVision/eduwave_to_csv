import { create } from 'zustand'

export const useContentFile = create((set) => ({
  content: '',
  setContent: (content: string) => set({ content }),
}))
