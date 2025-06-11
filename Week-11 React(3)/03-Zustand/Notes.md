## Zustand

- Zustand is a small, fast, and scalable state management library for React applications. It's beginner-friendly and much simpler than Redux, making it perfect if you're just starting out but want something powerful.

- “Zustand” is a German word meaning “state.”
  It helps you manage and share state (data) between components in React without much boilerplate code.

## Why Choose Zustand Over Others?

- Easy to use (no boilerplate like Redux)

- Super fast and minimal

- Supports both global and local state

- No Provider wrapper needed

- Great for testing and debugging

- Works with server-side rendering (Next.js)

## Installation

```
npm install zustand
```

## Basic Usage

### 1.Create a Store

```js
import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))

export default useStore
```

### 2.Use the Store in Components

```js
import React from 'react'
import useStore from './store'

function Counter() {
  const { count, increase, decrease, reset } = useStore()

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
```

- That's it — no Provider, no reducer, just a simple hook.

### How Zustand Works (Internally)

- Zustand uses hooks and functional updates

- `create()` makes a custom hook (useStore)

- `set()`updates the state

- You access the state using the hook

### Real-World Use Cases

- Managing form data

- Shopping cart

- Authentication state

- Game or animation states

- Global loading/error flags

### Summary

| Concept      | Description                    |
| ------------ | ------------------------------ |
| `create()`   | Creates the store              |
| `set()`      | Updates the state              |
| `get()`      | Reads the current state        |
| No Provider  | Zustand doesn’t need context   |
| Easy Testing | State is testable and reusable |
