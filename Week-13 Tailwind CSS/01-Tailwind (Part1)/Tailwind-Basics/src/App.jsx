import React from 'react'
import FlexTest from './components/FlexTest'
import GridTest from './components/GridTest'
import ResponsiveTest from './components/ResponsiveTest'
import Project1 from './components/Project1'
import { OTP } from './components/OTP'

function App() {
  return (
    <div>
      {/* <FlexTest /> */}
      {/* <GridTest /> */}
      {/* <ResponsiveTest /> */}
      {/* <Project1 /> */}
      <OTP number={6} />
    </div>
  )
}

export default App
