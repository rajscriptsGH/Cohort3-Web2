// useState — to create local state.
// createContext — to create a context object.
// useContext — to read values from context inside components.
import { useState, createContext, useContext } from 'react'

// creating a new context named BulbContext. Think of this as the global storage that will hold the bulb state.
const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true)

  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

// This component does 3 things:

//1. Defines the state bulbOn and updater setBulbOn.
//2. Wraps children in a BulbContext.Provider.
//3. Passes the state and updater in the value.

// ✅ Now any component inside <BulbProvider> can access bulbOn and setBulbOn.


// Using <BulbProvider> to wrap the <Light /> component, which means:
// Light, and all its children, can access the bulb state from the context.
// No need to manually pass props.
function App() {
  // const [bulbOn, setBulbOn] = useState(true)
  return (
    <div>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </div>
  )
  // return (
  //   <div>
  //     <BulbContext.Provider value={{
  //       bulbOn: bulbOn,
  //       setBulbOn: setBulbOn,
  //     }}>
  //       <Light />
  //     </BulbContext.Provider>
  //   </div>
  // )
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
//Using useContext(BulbContext) to read the bulbOn value from context.
// It conditionally renders "Bulb is on" or "Bulb is off".

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext)
  function toggle() {
    setBulbOn(!bulbOn)
  }
  // use useContext(BulbContext) to get both bulbOn and setBulbOn.
  // The toggle function flips the value: ON to OFF or vice versa.
  // The button calls toggle on click.

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>

}
export default App

/*
// Notes
Final Output (How it works):
App starts with bulbOn = true.

The message says "Bulb is on".

When the button is clicked, setBulbOn(!bulbOn) toggles the state.

The new state flows through the context, and all components update automatically.
*/