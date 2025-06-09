import { useState } from "react"

function App() {
  const { count, increase } = useCounter()

  return (
    <div>
      <button onClick={increase}>Increase: {count}</button>
    </div>
  )
}

function useCounter() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }
  return {
    count: count,
    increase: increase
  }
}

export default App
