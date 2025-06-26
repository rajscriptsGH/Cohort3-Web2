# TypeScript

# Prerequisites

- Install Node.js
  -- Download - from official website
  -- Verifry
  ````node -v
    npm -v```
  ````

# Step 1: Set Up TypeScript

- 🛠 Install Node.js (if not installed)
- Go to https://nodejs.org/ and download LTS version.

- 📦 Install TypeScript globally
- Open your terminal:

```bash
npm install -g typescript
```

- Check if it's installed:

```bash
tsc -v
```

# Step 2: Your First TypeScript File

- Create a folder and file

```bash
mkdir folder_name
cd folder_name
touch index.ts
```

- Write this in index.ts

```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

- Now compile it:

```bash
tsc -b
or
npx tsc -b
```

- This creates an index.js file.

- Run it:

```bash
node index.js
```

- You’ll see:

`Hello, TypeScript!`

# Step 3: Basic Types

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

# Step 4: Functions with Types

```ts
function greet(name: string): string {
  return "Hello, " + name;
}

console.log(greet("Razz")); // OK
console.log(greet(5)); // Error!
```

# Step 5: Objects

```ts
let person: { name: string; age: number } = {
  name: "Raj",
  age: 22,
};
```
