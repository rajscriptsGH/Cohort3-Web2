
import { useState, createContext, useContext } from 'react'

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true)

  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}>
        <Light />
      </BulbContext.Provider>
    </div>
  )
}

function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb is on" : "Bulb is off"}
  </div>

}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext)
  function toggle() {
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>

}
export default App

