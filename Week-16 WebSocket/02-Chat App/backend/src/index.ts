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

        // User wants to join a room
        if (msg.type === 'join') {
            allSockets.push({
                socket,
                room: msg.payload.roomId
            })
            console.log(`Client joind room: ${msg.payload.roomId}`);
        }

        // User wants to chat a room
        // Check Message Type
        if (msg.type === 'chat') {

            //Fins current user in allSocket
            const user = allSockets.find((user) => user.socket === socket)

            //Check if user exist or not
            if (!user) {
                console.log("User not found in room");
                return;
            }

            //If user exist then extract room and text form user
            const room = user.room
            const text = msg.payload.text

            //Broadcast to all user in that room
            allSockets.forEach((user) => {
                //Check for same room and sender themselves
                if (user.room == room && user.socket !== socket) {

                    //Send the chat messages
                    user.socket.send(JSON.stringify({
                        type: 'chat',
                        payload: {
                            text,
                            room
                        }
                    }))
                }
            })
        }
    })

    socket.on("close", () => {
        allSockets = allSockets.filter((user) => user.socket !== socket);
        console.log("Client disconnected");

    })
})