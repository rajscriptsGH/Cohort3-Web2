import { useEffect, useState } from 'react'
import Feed from './components/Feed.jsx'
import Notification from './components/Notification.jsx'
import Messages from './components/Messages.jsx'
import Jobs from './components/Jobs.jsx'
import Requests from './components/Requests.jsx'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState("feed")

  useEffect(() => {
    console.log("Inside useEffect" + currentTab);
  }, [currentTab])

  return (
    <div>
      <div style={{ backgroundColor: 'blue', color: 'white' }}>
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
      </div>

      {currentTab === 'feed' && <Feed />}
      {currentTab === 'notification' && <Notification />}
      {currentTab === 'messages' && <Messages />}
      {currentTab === 'jobs' && <Jobs />}
      {currentTab === 'request' && <Requests />}
    </div >
  )


}

export default App
