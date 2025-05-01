import express from 'express'
let port = 3030
const app = express()

//simple function to return boolean if the age of the person is more than 14 or not
function isOldEnough(age) {
    if (age > 14) {
        return true;
    } else {
        return false;
    }
}
app.get('/ride2', (req, res) => {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "Successfully riden the ride2"
        })
    } else {
        res.status(411).json({
            msg: "Sorry, u are under age!!!"
        })
    }
})

//middleware to check the same
function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            msg: "Sorry, u are under age!!!"
        })
    }
}

app.get('/ride1', isOldEnoughMiddleware, (req, res) => {

    res.json({
        msg: "Successfully riden the ride1"
    })

})



app.listen(port, () => {
    console.log("App is running at: " + port);
})