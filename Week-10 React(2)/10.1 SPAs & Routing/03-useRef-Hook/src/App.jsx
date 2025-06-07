import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef()

  function focusOnInput() {
    inputRef.current.focus()
  }
  return (
    < div >
      Signup < br />
      <input ref={inputRef} type="text" /> <br /> <br />
      <input type="text" /> <br />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  )
}

export default App
