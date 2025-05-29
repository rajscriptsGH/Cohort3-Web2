import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return <div>

   <h1>useEffect</h1>
   <Counter />
  </div>
  
}

function Counter(){
const [count, setCount] = useState(0)

console.log("counter");


//gaurd interval from re-rendering
useEffect(()=>{
  setInterval(()=>{
    setCount(function(count){
      return count+1;
    });
}, 1000);
console.log("Mounted");

},[])

  // function increaseCount(){
  //   setCount(count + 1)
  // }

  return <div>
    <h1>{count}</h1>
    {/* <button onClick={increaseCount}>IncreaseCount</button> */}
  </div>
}
export default App
