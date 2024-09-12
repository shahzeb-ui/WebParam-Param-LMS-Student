import { create } from 'zustand'

export const useStore = create((set) => ({
  courseId: 'me',
  setCourseId: (newCourseId:string) => set({ courseId: newCourseId }),
}))