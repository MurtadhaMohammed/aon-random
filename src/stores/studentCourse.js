import { create } from "zustand";

export const useStudentCourse = create((set) => ({
  setStudentCourse: (studentCourse) => set({ studentCourse }),
  studentCourse: [],
}));
