/*
Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?
*/

import express from 'express'
import jwt from 'jsonwebtoken'
const app = express();

app.use(express.json())

function verifyLogged() {

}










app.listen()