import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div style={{ backgroundColor: "black", color: '#fff', margin: 40 }}>
      <ToggleMessage />
      <ToggleMessage />
      <Notification
        title='request'
      />
      <Notification
        title='notification'
      />
      <Notification
        title='msg'
      />
    </div>
  )
}

function Notification({ title }) {
  const [notification, setNotification] = useState(0)

  function increaseNotis() {
    setNotification(notification + 1)
  }

  return (
    <div>
      <p>{notification}</p>
      <button onClick={increaseNotis}>{title}</button>
    </div>
  )
}
const ToggleMessage = () => {
  const [isVisible, setIsVisibel] = useState(true)

  function toggle() {
    setIsVisibel(!isVisible)
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Message</button>
      {isVisible && <p>This is conditionallly rendered</p>}
    </div>
  )
}

export default App
