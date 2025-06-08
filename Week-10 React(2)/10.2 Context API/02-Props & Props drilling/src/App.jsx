
import { useState } from 'react'

function App() {
  // State bulbOn: Initialized to true, meaning the bulb is initially ON.
  // setBulbOn: Function used to change the state.
  const [bulbOn, setBulbOn] = useState(true)
  return (
    <div>
      {/* // The Light component is rendered and given the bulbOn state and setBulbOn updater as props. */}
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  )
}

function Light({ bulbOn, setBulbOn }) {
  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}
// Light receives the state and its updater from App.

// It renders two child components:

{/* <LightBulb />: to display whether the bulb is ON or OFF. */ }

{/* <LightSwitch />: to toggle the bulb’s state. */ }

// This is a pure display component.
function LightBulb({ bulbOn }) {
  return <div>
    {/* // "Bulb is on" if bulbOn is true. */}
    {/* // "Bulb is off" if bulbOn is false. */}
    {bulbOn ? "Bulb is on" : "Bulb is off"}
  </div>
}
// It receives the bulbOn prop and displays a message:



function LightSwitch({ bulbOn, setBulbOn }) {
  // toggle() function flips the state using !bulbOn.
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>

}
export default App
