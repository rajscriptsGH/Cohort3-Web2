import { useState } from "react"

function App() {
  const [bgColor, setBgColour] = useState("black")

  return (
    <div style={{ height: '100vh', width: '100%', backgroundColor: bgColor }}>

      <ButtonComponent bgColor={bgColor} setBgColour={setBgColour} />
    </div>
  )
}


function ButtonComponent({ setBgColour }) {

  function changeBgColor(colour) {
    setBgColour(colour)
  }

  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <button onClick={() => changeBgColor("red")}>Red</button>
    <button onClick={() => changeBgColor("blue")}>Blue</button>
    <button onClick={() => changeBgColor("green")}>Green</button>
    <button onClick={() => changeBgColor("orange")}>Orange</button>
    <button onClick={() => changeBgColor("purple")}>Purple</button>
  </div>
}

export default App
