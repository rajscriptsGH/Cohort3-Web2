import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send("Hello app get")
})
app.get('/about', (req, res) => {
    res.send("Hello app from about")
})
app.get('/skill', (req, res) => {
    res.send("Hello app skill section")
})


app.listen(3000, () => {
    console.log("Server is listening at port: 3000...");

});
