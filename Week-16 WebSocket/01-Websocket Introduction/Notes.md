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

## How WebSocket Works (Step by Step)

- Client initiates a connection via HTTP handshake with a special header (Upgrade: websocket).

- Server accepts and upgrades the connection.

- Now the WebSocket connection is open and stays open.

- Both client & server can send/receive messages anytime.

- When done, either side can close the connection.
