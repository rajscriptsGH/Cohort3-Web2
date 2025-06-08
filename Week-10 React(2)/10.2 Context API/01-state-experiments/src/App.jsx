
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
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    {bulbOn ? "Bulb is on" : "Bulb is off"}
  </div>

}

function ToggleBulbState() {

  return <div>
    <button>Toggle the bulb</button>
  </div>

}
export default App
