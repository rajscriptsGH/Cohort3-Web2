import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [one, setOne] = useState(1)

  function increase() {
    setCount(count + 1)
  }

  function oneCount() {
    setOne(one + 1)
  }

  return (
    <div>
      <h1>Dependency array</h1>
      <Counter count={count} one={one} />
      <button onClick={increase}>Increase</button>
      <button onClick={oneCount}>One</button>
    </div>
  )
}

function Counter(props) {
  console.log("inside counter");

  useEffect(() => {
    console.log("no useeffect");
  }, [])

  useEffect(() => {
    console.log("count useeffect");
  }, [props.count])

  useEffect(() => {
    console.log("one useeffect");

    return function () {
      console.log("cleanup");
    }
  }, [props.one])


  return <div>
    <h1>{props.count}</h1>
    <h1>{props.one}</h1>
  </div>
}

export default App
