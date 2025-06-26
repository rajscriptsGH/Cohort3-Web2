## What is TypeScript?

- TypeScript is a programming language developed and maintained by Microsoft.

- It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

- TypeScript is a superset of JavaScript that adds static typing. It helps catch errors during development instead of in the browser.

If you know JavaScript, TypeScript builds on top of it makes your code safer and more readable.

## Typescript compiler

- tsc is the official typescript compiler that you can use to convert Typescript code into Javascript
  There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are -

```
esbuild
swc
```

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

## tsconfig file

- The tsconfig file has a bunch of options that you can change to change the compilation process.
  Some of these include

### 1.target

- The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
- To try it out, try compiling the following code for target being ES5 and es2020

### 2.rootDir

- Where should the compiler look for .ts files. Good practise is for this to be the src folder

### 3.outDir

- Where should the compiler look for spit out the .js files.

### 4.noImplicitAny

- Try enabling it and see the compilation errors on the following code

```ts
const greet = (name) => `Hello, ${name}!`;
```

### 5.removeComments

- Weather or not to include comments in the final js file

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
