
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [currentValue, setCurrentvalue] = useState(1)
  let timer = useRef();


  function startCount() {
    let value = setInterval(() => {
      setCurrentvalue(count => count + 1)
    }, 1000)
    timer.current = value

  }
  function stopCount() {
    clearInterval(timer.current)

  }

  return (
    <div>
      <h1>StopWatch using useRef</h1>
      {currentValue}
      <br />
      <button onClick={startCount}>Start</button>
      <button onClick={stopCount}>Stop</button>
    </div>
  )
}

export default App
