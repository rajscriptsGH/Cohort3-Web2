import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count => count + 1)
  }

  useEffect(() => {
    setInterval(increaseCount, 1000)
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default App
