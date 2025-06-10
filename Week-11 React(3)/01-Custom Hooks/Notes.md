# Custom Hook – Summary Notes

🔹 What is a Custom Hook?

```
A custom hook is a JavaScript function that starts with use and lets you reuse logic across multiple components.
```

🔹 Why Use Custom Hooks?

```
-Code reuse: Share logic without duplicating code.
-Clean components: Move logic out of components.
-Better abstraction: Separate UI from business logic.
```

🔹 Where to Use?

```
-When multiple components share common logic, like:
-Form handling
-Fetching data
-Storing previous values (usePrev)
-Authentication logic
-Event listeners, etc.
```

🔹 Syntax

```
function useCustomHook(args) {
// useState, useEffect, etc.
return value
}
```

🔹 Example – usePrev

```
function usePrev(value) {
const ref = useRef()
useEffect(() => {
ref.current = value
}, [value])
return ref.current
}
```

# ⚠️ Rules of Custom Hooks

```
-Must start with use
-Can use other hooks inside
-Follow Rules of Hooks
```

# Benefits

Improves readability, maintainability, and testability of code
