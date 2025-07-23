
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on('connection', (socket) => {
    console.log('WS server connected');

    setInterval(() => {
        socket.send("Hello from WS " + Math.random())
    }, 500)

    //client 
    socket.on("msg", (e) => {
        console.log(e.toString());

    })
})