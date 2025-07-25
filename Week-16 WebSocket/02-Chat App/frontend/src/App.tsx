import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["Hii there", "Hello"]);
  const wsRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    
    //@ts-ignore
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col p-2">
      <h1 className="fixed top-0 bg-orange-500 h-10 rounded-lg text-white px-5 py-2 text-center font-semibold mt-1">
        Chat App
      </h1>

      <div className="h-[80vh] w-full bg-slate-700 rounded-xl p-5 mb-2">
        {messages.map((message) => (
          <div className="my-5">
            <span className="bg-white px-3 py-2 rounded-lg">{message}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        <input
          ref={inputRef}
          className="w-full bg-purple-800 text-white px-3 py-2 rounded-lg"
          type="text"
          placeholder="Write message"
        />

        <button
          onClick={() => {
            //@ts-ignore
            const message = inputRef.current.value;
            //@ts-ignore
            wsRef.current.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: message,
                },
              })
            );
          }}
          className="bg-blue-500 text-white px-7 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
