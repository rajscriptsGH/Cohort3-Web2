# React Hooks

- Hooks are special functions in React that let you "hook into" React features like state, lifecycle, and context — all in functional components (no need for classes!).

# Why Hooks Are Used in React

- Hooks were introduced to simplify and enhance React development. They allow functional components to do things only class components could do before — like handling state, running side effects, and using lifecycle methods.
  | Problem Before Hooks | How Hooks Help |
  | ------------------------------- | ------------------------------------------- |
  | Only class components had state | `useState` brings state to functions |
  | Messy lifecycle methods | `useEffect` handles side effects cleanly |
  | Repetitive logic in components | Custom hooks enable reuse |
  | Complex components hard to read | Hooks organize logic by feature |
  | `this` confusion | No need for `this` in functional components |

# 1.useState

- useState is a React Hook that lets you add state (dynamic data) to functional components

# What is useState?

- In React, state is data that can change over time — like user input, counters, toggles, etc.

* Before hooks, state was only available in class components. useState brings it to functional components.

-Syntax

```
const [state, setState] = useState(initialValue);
```

- state: The current value
- setState: A function to update it
- initialValue: The default starting value

# When to Use useState:

- Form input values
- Toggle flags (show/hide)
- Counters
- Any UI element that updates based on interaction

# 2.useEffect

- useEffect is a React Hook that lets you perform side effects in functional components — like fetching data, listening to events, or updating the DOM

```
useEffect(() => {
// your side effect logic here
}, [dependencies]);
```

- The function runs after the component renders

* The second argument (dependencies) controls when it runs

# Common Use Cases

| Task                     | `useEffect` Use? |
| ------------------------ | ---------------- |
| Fetching data            | ✅               |
| Setting up subscriptions | ✅               |
| Event listeners          | ✅               |
| Timers or intervals      | ✅               |
| Direct DOM manipulation  | ✅               |
