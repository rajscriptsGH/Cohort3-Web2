
import { useState, useContext, createContext } from "react"

const CountContext = createContext()

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0)

  return <CountContext.Provider value={{ count, setCount }}>
    {children}
  </CountContext.Provider>
}

function App() {

  return (
    <div>
      <Parent />
    </div>
  )
}
function Parent() {
  return <div>
    <CountContextProvider>
      <Value />
      <Increase />
      <Decrease />
    </CountContextProvider>
  </div>
}

function Value() {
  const { count } = useContext(CountContext)
  return <div>
    <p>Count:: {count}</p>
  </div>
}
function Increase() {
  const { setCount } = useContext(CountContext)

  return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Decrease() {
  const { setCount } = useContext(CountContext)
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>
}

export default App
