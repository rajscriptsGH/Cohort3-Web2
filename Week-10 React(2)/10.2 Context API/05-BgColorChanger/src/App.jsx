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
    <button style={{ backgroundColor: 'red', border: 'none', borderRadius: 4, padding: 5 }} onClick={() => changeBgColor("red")}>Red</button>
    <button style={{ backgroundColor: 'blue', border: 'none', borderRadius: 4, padding: 5 }} onClick={() => changeBgColor("blue")}>Blue</button>
    <button style={{ backgroundColor: 'green', border: 'none', borderRadius: 4, padding: 5 }} onClick={() => changeBgColor("green")}>Green</button>
    <button style={{ backgroundColor: 'orange', border: 'none', borderRadius: 4, padding: 5 }} onClick={() => changeBgColor("orange")}>Orange</button>
    <button style={{ backgroundColor: 'purple', border: 'none', borderRadius: 4, padding: 5 }} onClick={() => changeBgColor("purple")}>Purple</button>
  </div>
}

export default App
