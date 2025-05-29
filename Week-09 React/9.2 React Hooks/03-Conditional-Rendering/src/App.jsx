import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [counterVisible, setCounterVisible] = useState(true);

useEffect(()=>{
  setInterval(function(){
    setCounterVisible(c => !c)
  }, 5000)
}, [])

  return <div>
    <h1>useEffect</h1>
    {counterVisible && <Counter />}
  </div>
}

function Counter() {
  const [count, setCount] = useState(0)
  console.log("counter");

  useEffect(() => {
    let clock = setInterval(() => {
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
    console.log("Mounted");

    return function(){
      console.log("Unmounted");
      clearInterval(clock)
    }
  }, [])

  return <div>
    <h1>{count}</h1>
  </div>
}
export default App
