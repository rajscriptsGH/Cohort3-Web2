
import { useState, useRef } from 'react'
// useState: Manages state (here, the current count).

// useRef: Stores a mutable reference that doesn’t trigger a re-render when updated. You’ll use it to store the timer ID.
import './App.css'

function App() {
  const [currentValue, setCurrentvalue] = useState(1)
  let timer = useRef();
  //  currentValue: A state variable holding the current number on the stopwatch.

  // setCurrentvalue: A function to update currentValue.

  // useRef(): Creates a reference object (initially undefined). You’ll store the timer ID in timer.current.


  function startCount() {
    let value = setInterval(() => {
      setCurrentvalue(count => count + 1)
    }, 1000)
    timer.current = value
  }
  // setInterval: Runs a function every 1 second (1000 ms).

  // setCurrentvalue(count => count + 1): Updates the state by incrementing the previous value.

  // timer.current = value: Stores the interval ID in the ref so we can stop it later.

  function stopCount() {
    clearInterval(timer.current)
  }
  // clearInterval(timer.current): Stops the timer using the ID stored in timer.current.

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
