import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000;

app.post('/signup', (req, res) => {

})
app.post('/login', (req, res) => {

})
app.post('/todo', (req, res) => {

})
app.get('/todos', (req, res) => {

})





app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);

})