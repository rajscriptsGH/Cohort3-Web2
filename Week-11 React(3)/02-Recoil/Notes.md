# Introducing recoil

- A state management library for React that provides a way to manage global state with fine-grained control.

- Recoil minimizes unnecessary renders by only re-rendering components that depend on changed atoms

- The performance of a React app is measured by the number of re-renders. Each re-render is expensive, and you should aim to minimise it.

## Key concepts in recoil

- **Atoms:** Units of state that can be read from and written to from any component.
- **Selectors:** Functions that derive state from atoms or other selectors, allowing for computed state.
