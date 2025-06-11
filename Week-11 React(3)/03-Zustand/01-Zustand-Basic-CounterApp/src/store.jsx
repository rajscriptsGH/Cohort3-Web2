import { create } from 'zustand'

// create() comes from Zustand.
// It creates a store (like a mini database for your app state).
// useStore is a custom hook you’ll use inside components to get or change data.
const useStore = create((set) => ({
    count: 0,  // initial value

    increase: () => set((state) => ({
        count: state.count + 1
    })),
    // increase is a function that uses set() to change the state.
    // It accesses the current state using (state) => ...
    // It returns a new object: { count: state.count + 1 }

    // Same logic applies for decrease and reset.
    decrease: () => set((state) => ({
        count: state.count - 1
    })),
    reset: () => set({
        count: 0
    })
}))


export default useStore
