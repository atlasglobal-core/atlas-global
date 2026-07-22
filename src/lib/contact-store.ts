import { create } from "zustand";

interface ContactState {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  open: false,
  openDialog: () => set({ open: true }),
  closeDialog: () => set({ open: false }),
}));
