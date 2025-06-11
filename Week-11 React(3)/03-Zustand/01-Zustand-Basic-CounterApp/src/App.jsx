import React from 'react'
import useStore from './store'
import './App.css'

function App() {
  const { count, increase, decrease, reset } = useStore()
  // useStore() lets you access the store data and the functions from anywhere.
  //   This returns:
  // count: the current value
  // increase, decrease, reset: actions you defined
  
  return (
    <div>
      Counter app using Zustand
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
