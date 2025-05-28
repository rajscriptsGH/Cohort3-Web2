import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
    <h1>useState</h1>
    <Counter />
   </div>
  )
}

function Counter(){
  const [count, setCount] =  useState(0)

  function increasCount(){
    setCount(count + 1)
  }
  function decreaseCount(){
    setCount(count - 1)
  }
  function resetCount(){
    setCount(0)
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increasCount}>IncreaseCount</button>
    <button onClick={decreaseCount}>DecreaseCount</button>
    <button onClick={resetCount}>ResetCount</button>
  </div>
}

export default App
