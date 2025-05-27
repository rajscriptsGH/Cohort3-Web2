
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function onClickPress(){
    setCount(count + 1)
  }

  return (
    <div>
      <button id='btn' onClick={onClickPress}>Counter {count}</button>
    </div>

  )
}

export default App
