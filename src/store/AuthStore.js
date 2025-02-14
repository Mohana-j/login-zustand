import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }), // Store both username and name
  logout: () => set({ user: null }),
}));
