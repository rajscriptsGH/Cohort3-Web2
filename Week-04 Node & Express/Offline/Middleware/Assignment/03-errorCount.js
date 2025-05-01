/*
You have to create a middleware for logging the number of errors on a server

You have been given an express server which has a few endpoints.

Your task is to
1. Ensure that if there is ever an exception, the end user sees a status code of 404
2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
*/

import express from "express";
const app = express();

let errorCount = 0;

app.get("/user", function (req, res) {
    throw new Error("Some Error");
    res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
    // return a json response with errorCount variable value
    res.status(200).json({ errorCount });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(404).send({});
    errorCount++;
});

app.listen(3000);