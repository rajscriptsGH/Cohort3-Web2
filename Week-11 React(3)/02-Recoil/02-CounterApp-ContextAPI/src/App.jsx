
import { createContext, useContext, useState } from 'react'
import './App.css'

const CounterContext = createContext()

function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CounterContext.Provider value={{ count, setCount }}>
        {children}
      </CounterContext.Provider>
    </div>
  )
}

function App() {

  return (
    <div>
      <Counter />
    </div>
  )
}
function Counter() {

  return <div>
    <CounterContextProvider>
      <CurrentCount />
      <IncreaseCounter />
      <DcreaseCounter />
    </CounterContextProvider>
  </div>
}

function CurrentCount() {
  const { count } = useContext(CounterContext)
  return <div>
    <p>{count}</p>
  </div>
}

function IncreaseCounter() {
  const { setCount } = useContext(CounterContext)
  return <div>
    <button onClick={() => { setCount(count => count + 1) }}>Increase</button>
  </div>
}

function DcreaseCounter() {
  const { setCount } = useContext(CounterContext)
  return <div>
    <button onClick={() => { setCount(count => count - 1) }}>Decrease</button>
  </div>
}

export default App
