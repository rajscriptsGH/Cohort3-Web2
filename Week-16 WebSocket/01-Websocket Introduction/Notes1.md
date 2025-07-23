# What is Backend Communication?

Backend communication refers to how different services, servers, or components in the backend exchange data — either internally or with the frontend.

## Types of Backend Communication

### 1. HTTP (REST API)

- Most common communication method using endpoints like /api/user

- Stateless, uses GET, POST, PUT, DELETE, etc.

- Simple and scalable

- Example:

```http
GET /api/products
```

✅ Use for:

- CRUD operations

- Most client-server communication

### 2. WebSockets

- Persistent, full-duplex communication

- Real-time updates (chat, notifications, live data)

Example:

```ts
socket.send("ping");
socket.onmessage = (e) => console.log(e.data);
```

Use for:

- Chat apps

- Multiplayer games

- Live dashboards

### 3. gRPC

- Remote Procedure Call (RPC) over HTTP/2

- Strongly typed (uses .proto files)

- Binary data → very fast

Use for:

- Microservices communication

- High-performance systems

### 4. GraphQL

- Query language for APIs

- Client asks exactly what it needs

- Uses a single /graphql endpoint

Example:

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

Use for:

- Flexible data fetching

- Reducing over-fetching

### 5. Message Queues (MQs)

- Async communication using queues (RabbitMQ, Kafka, etc.)

- Decouples services

- Helps with scaling, retries, background jobs

Use for:

- Event-driven architecture

- Background processing

- Distributed systems

### 6. Server-Sent Events (SSE)

- One-way real-time communication (server → client)

- Over HTTP, simpler than WebSocket

Use for:

- Notifications

- Live news feeds

### Backend Communication Methods

| Method        | Direction         | Real-Time | Use Case                           |
|---------------|------------------|-----------|------------------------------------|
| **REST API**   | Client → Server   | ❌         | CRUD, forms, mobile/web apps        |
| **WebSocket**  | Both Ways         | ✅         | Chat, games, notifications          |
| **GraphQL**    | Client → Server   | ❌         | Flexible queries                    |
| **gRPC**       | Both Ways         | ❌         | Microservices, internal APIs        |
| **Message Queue** | Backend ↔ Backend | ✅     | Async jobs, event-driven systems    |
| **SSE**        | Server → Client   | ✅         | Live feeds, stock prices            |
