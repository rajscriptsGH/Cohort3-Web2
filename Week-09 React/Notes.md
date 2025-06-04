# What React is and Why We Use It

React is a JavaScript library for building user interfaces, especially single-page applications (SPAs). It’s maintained by Meta (Facebook) and a large open-source community.

# 💡 Why Use React?

🔁 Reusable Components: Break UI into reusable, self-contained pieces.

⚡ Efficient Updates: Uses a virtual DOM to update only what's needed.

🔄 Declarative Syntax: You describe what the UI should look like.

🧠 State Management: Easily manage dynamic data with hooks.

# What JSX Is and How to Write Basic Components

JSX (JavaScript XML) is a syntax that looks like HTML but runs in JavaScript.

Example:

```
function App() {
    return <h1>Hello React!</h1>;
}
```

# JSX Rules:

You can write HTML-like syntax inside JS files.

You must return only one root element.

You can embed variables with {}.

Class attributes become className.

# Components

In React, components are the building blocks of the user interface. They allow you to split the UI into independent, reusable pieces that can be thought of as custom, self-contained HTML elements.

# useState

`useState` is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.

# useEffect

Before we understand `useEffect` , let’s understand what are `Side effects`.

## Side effects

Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:

- **Fetching data** from an API.
- **Modifying the DOM** manually.
- **Subscribing to events** (like WebSocket connections, timers, or browser events).
- **Starting a clock**

These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.

---

### Problem in running side effects in React components

If you try to introduce side effects directly in the rendering logic of a component (in the return statement or before it), React would run that code every time the component renders. This can lead to:

- **Unnecessary or duplicated effects** (like multiple API calls).
- **Inconsistent behavior** (side effects might happen before rendering finishes).
- **Performance issues** (side effects could block rendering or cause excessive re-rendering).
