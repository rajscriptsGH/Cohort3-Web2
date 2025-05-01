# 🔁 Express Middleware – Revision Notes

_✅ What is Middleware?_

    -A function with access to req, res, and next().

    -Runs during the request-response cycle.

    -Used to execute code, modify req/res, end request, or pass control.

_Syntax_

_function middleware(req, res, next) {
// logic
next(); // or res.send() to end cycle
}_

# Types of Middleware

1. Application-Level

   app.use(middleware)

2. Route-Level

   app.get('/route', middleware, handler);

3. Error-Handling

   app.use(err, req, res, next) => return error

# Key Concepts:

i. Use next() to pass control.

ii. Middleware runs in order of definition.

iii. Can be chained on routes.

iv. Useful for logging, authentication, validation, error handling, etc.
