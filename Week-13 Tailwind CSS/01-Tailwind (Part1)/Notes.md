# OTP notes

### What are we building?

You're building an OTP input — a group of boxes (like 6), where users type 1 digit in each box. Example:

```css
[1] [2] [3] [4] [5] [6]
```

After all boxes are filled, the "Sign Up" button becomes clickable.

### Big Picture Idea

You need:

- State to store the typed numbers

- Refs to focus each box programmatically

- A button that becomes active only when all boxes are filled

## Code Breakdown

✅ 1.` const ref = useRef([]);`

- Think of this as a list of boxes.

- We will use it to focus the next box after typing.

- Like: inputRefs.current[0] is the first box, inputRefs.current[1] is second, and so on.

✅ 2. `const [values, setValues] = useState(Array(number).fill(""));`

- This stores the digits you type in each box.

- Initially all boxes are empty → `["", "", "", "", "", ""]` if number = 6

✅ 3.` const [disabled, setDisabled] = useState(true);`

- This keeps track of the button.

- true → disabled

- false → enabled

✅ 4. `useEffect(() => { setDisabled(values.includes("")); }, [values]);`
This watches the values array.

- If any box is empty → button stays disabled

- If all boxes are filled → button becomes enabled

  - 🔁 It automatically runs every time you type in a box.

✅ 5.` handleChange(val, index)`

- This runs when you type a digit.

- Example: You type 3 in the second box (index 1):

- It updates values[1] = "3"

- Then focuses the next box → inputRefs.current[2].focus()

✅ 6. `handleBackspace(index)`

- This runs when you press Backspace:

- It clears the box

- Then focuses the previous box

✅ 7. The Loop: Creating Input Boxes

```js
Array(number).fill(1).map((\_, index) => (
<SubOtpBox ... />
))
```

- This creates as many <input> boxes as the number you pass (like 6).

- Each box:

  - Has its own value from values[index]

  - Can focus on next/previous box using inputRefs

✅ 8. `SubOtpBox` Component

- This is the actual input field.

```js
<input
  value={value}
  ref={reference}
  maxLength={1}
  onChange={(e) => {
    if (digit) onChange(val);
  }}
  onKeyUp={(e) => {
    if (Backspace) onBackspace();
  }}
/>
```

- Only allows 1 digit

- Only accepts 0-9

- Uses ref to focus itself

✅ 9. The Button

```js
<button disabled={disabled}>Sign Up</button>
```

- Disabled if any box is empty

- Enabled only if all are filled

#### Example Flow (You type 6-digit OTP)

- You type 1 → goes in box 1 → focus moves to box 2

- You type 2 → goes in box 2 → focus moves to box 3

- ...until box 6

- All boxes filled → disabled = false → "Sign Up" becomes clickable

#### Simple Demo

```jsx
export function DemoOTP() {
  return <OTP number={6} />;
}
```
