import { create } from 'zustand'

interface BearState {
    bears: number
    increase: (by: number) => void
}

export const useStore = create<BearState>()((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
}))