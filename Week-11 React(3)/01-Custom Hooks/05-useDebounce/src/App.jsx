import { useEffect, useState } from "react"


import { useDebounce } from "./hooks/useDebounce"

function App() {
  const [inputValue, setInputValue] = useState("")

  const debouncedValue = useDebounce(inputValue, 200)

  function change(e) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    console.log("Expensive Operation");

  }, [debouncedValue])

  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  )
}

export default App
