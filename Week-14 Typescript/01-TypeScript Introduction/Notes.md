## What is TypeScript?

- TypeScript is a superset of JavaScript that adds static typing. It helps catch errors during development instead of in the browser.

If you know JavaScript, TypeScript builds on top of it makes your code safer and more readable.

### Type Example

```
- string let name: string = "Raj"
- number let age: number = 21
- boolean let isCool: boolean = true
- any let data: any = "anything"
- undefined let x: undefined = undefined
```

## Example:

```ts
let myName: string = "Raj";
let age: number = 21;
let isStudent: boolean = true;
```

- Note: Try changing myName = 12 and see how TypeScript throws an error.

# Functions with Types

```ts
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Razz")); // OK
console.log(greet(5)); // Error!
```

# Objects

```ts
let person: { name: string; age: number } = {
  name: "Raj",
  age: 22,
};
```
