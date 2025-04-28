import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/hts', (req, res) => {
    res.send('Hello World from hts')
})
app.post('/hts', (req, res) => {
    res.send('Hello World from hts on post')
})

app.listen(3000)