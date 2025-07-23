
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef(null)  //to take reference form input

  function sendMessage() {
    if (!socket) {
      return;
    }

    const message = inputRef.current?.value;
    //@ts-ignore
    socket.send(message)
    inputRef.current.value = ""  //clear input field
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws);

    ws.onmessage = (ev) => {
      alert(ev.data)
    }
  }, [])

  return (
    <div>
      <h1>hello Chat App</h1>

      <div className='h-screen flex justify-center items-center gap-2'>
        <input ref={inputRef} className='h-9  rounded-lg px-4 py-2' type="text" placeholder='Message' />
        <button className='bg-blue-500 px-4 py-2 rounded-lg cursor-pointer' onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default App
