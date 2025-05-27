# useState

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

# useEffect

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
