import { create } from 'zustand'

interface ContentFile {
  content: string
  setContent: (content: string) => void
}
export const useContentFile = create<ContentFile>((set) => ({
  content: '',
  setContent: (content: string) => set({ content }),
}))
