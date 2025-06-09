import { useState } from "react"


//Custom Hook
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

function App() {

  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

function Counter() {
  const { count, increase } = useCounter()

  return <div>
    <button onClick={increase}>Increase: {count}</button>
  </div>

}

export default App
