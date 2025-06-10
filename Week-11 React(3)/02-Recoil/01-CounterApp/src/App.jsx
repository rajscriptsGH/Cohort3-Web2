
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <Counter />
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0)

  return <div>
    {count}
    <IncreaseCounter setCount={setCount} />
    <DcreaseCounter setCount={setCount} />
  </div>
}

function IncreaseCounter({ setCount }) {
  return <div>
    <button onClick={() => { setCount(count => count + 1) }}>Increase</button>
  </div>
}
function DcreaseCounter({ setCount }) {
  return <div>
    <button onClick={() => { setCount(count => count - 1) }}>Decrease</button>
  </div>
}

export default App
