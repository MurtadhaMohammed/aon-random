import { create } from "zustand";

export const useAppStore = create((set, get) => ({
  course: null,
  loading: true,
  courses: [],
  isUpdate: false,
  setUpdate: () => set({ isUpdate: !get().isUpdate }),
  setCourse: (course) => set({ course }),
  setCourses: (courses) => set({ courses }),
  setLoading: (loading) => set({ loading }),
}));
