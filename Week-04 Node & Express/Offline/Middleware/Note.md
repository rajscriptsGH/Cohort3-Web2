# 🔁 Express Middleware – Revision Notes

_✅ What is Middleware?_

    -A function with access to req, res, and next().

    -Runs during the request-response cycle.

    -Used to execute code, modify req/res, end request, or pass control.

_Syntax_

**function middleware(req, res, next) {
// logic
next(); // or res.send() to end cycle
}
**
