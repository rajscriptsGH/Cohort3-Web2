# What is WebSocket?

- WebSocket is a communication protocol that allows real-time, two-way interaction between a client (like a browser) and a server.

- Unlike HTTP (which is one-way — request → response), WebSocket stays connected, allowing instant updates (like live chat, online games, or stock prices)

## Why do we need WebSocket?

HTTP is:

- Stateless (doesn’t remember old connections).

- One-way (client asks, server replies).

- Slow for real-time updates (polling or refresh required).

WebSocket:

- Is persistent (once connected, stays open).

- Is full-duplex (both client and server can talk any time).

- Is fast & efficient (less overhead than HTTP).

### Use Cases for WebSockets

- **Real-Time Applications**: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.

- **Live Feeds**: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.

- **Interactive Services**: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interaction.


## How WebSocket Works (Step by Step)

- Client initiates a connection via HTTP handshake with a special header (Upgrade: websocket).

- Server accepts and upgrades the connection.

- Now the WebSocket connection is open and stays open.

- Both client & server can send/receive messages anytime.

- When done, either side can close the connection.

## HTTP vs WebSocket

| Feature         | HTTP                      | WebSocket               |
|-----------------|---------------------------|-------------------------|
| Connection      | New for every request     | Persistent              |
| Direction       | Client → Server only      | Both ways (Full-duplex) |
| Real-time use   | Not suitable              | Perfect for real-time   |
| Efficiency      | Less efficient            | More efficient          |
| Protocol        | Request/Response          | Event-driven            |
| Use Cases       | REST APIs, websites       | Chat apps, games, live data |

## Can you store a WebSocket object (socket) directly in a database?

No, you can't (and shouldn't) store a live WebSocket object in a database.

### Why not?

A WebSocket object is:

- An in-memory, live connection between a client and a server.

- Tied to a particular request and IP address.

- Not serializable (you can't JSON.stringify() it).

- Useless when stored, because you can't restore a socket from disk and make it "work" again — it dies when the server restarts or disconnects.
