
import { useState } from 'react'
import usePrev from './usePrev.jsx'
function App() {
  const [state, setState] = useState(0)
  const prev = usePrev(state)

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => { setState(state => state + 1) }}>Increase</button>
      <p>Prev value is {prev}</p>
    </div>
  )
}

export default App

