import { useState } from 'react'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState("feed")



  return (
    <div>
      <button onClick={() => {
        setCurrentTab('feed')
      }} style={{ color: currentTab == "feed" ? "red" : "white", marginLeft: 5 }}>Feed</button>
      <button onClick={() => {
        setCurrentTab('notification')
      }} style={{ color: currentTab == "notification" ? "red" : "white", marginLeft: 5 }}>Notifications</button>
      <button onClick={() => {
        setCurrentTab('messages')
      }} style={{ color: currentTab == "messages" ? "red" : "white", marginLeft: 5 }}>Messages</button>
      <button onClick={() => {
        setCurrentTab('jobs')
      }} style={{ color: currentTab == "jobs" ? "red" : "white", marginLeft: 5 }}>Jobs</button>
      <button onClick={() => {
        setCurrentTab('request')
      }} style={{ color: currentTab == "request" ? "red" : "white", marginLeft: 5 }}>Request</button>
    </div >
  )
}

export default App
