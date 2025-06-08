
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({ bulbOn }) {

  return <div>
    {bulbOn ? "Bulb is on" : "Bulb is off"}
  </div>

}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>

}
export default App
