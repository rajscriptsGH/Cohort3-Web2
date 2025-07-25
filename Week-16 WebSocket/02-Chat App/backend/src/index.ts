import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 })

interface User {
    socket: WebSocket;
    room: string
}

let allSockets: User[] = []


wss.on("connection", (socket) => {
    console.log("Client connected");


    socket.on('message', (message) => {
        const msg = JSON.parse(message.toString())
        if (msg.type === 'join') {
            allSockets.push({
                socket,
                room: msg.payload.roomId
            })
            console.log(`Client joind room: ${msg.roomId}`);

        }
    })

    socket.on("close", () => {
        allSockets = allSockets.filter((user) => user.socket !== socket);
        console.log("Client disconnected");

    })
})