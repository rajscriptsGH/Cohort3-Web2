
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on('connection', (socket) => {
    console.log('WS server connected');

    //client 
    socket.on("message", (e) => {
        console.log(e.toString());
        console.log(e.toString() === "ping");

        if (e.toString() === 'ping')
            socket.send("pong")
    })
})