import { create } from 'zustand'

const userStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({
        count: state.count + 1
    })),
    decrease: () => set((state) => ({
        count: state.count - 1
    })),
    reset: () => set({
        count: 0
    })
}))


export default userStore
