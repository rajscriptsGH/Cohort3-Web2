import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })
let userCount = 0;

wss.on("connection", (socket) => {
    userCount = userCount + 1
    console.log(`UserCount # ${userCount}`);

    socket.on('message', (message) => {
        console.log(`Message ${message.toString()} recieved form user ${userCount}`);
        setTimeout(() => {
            socket.send(`${message} send back from server`)
        }, 2000)

    })
})