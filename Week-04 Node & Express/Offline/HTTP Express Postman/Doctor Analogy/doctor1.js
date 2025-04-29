import express from 'express'
// const express = require('express')
const app = express()

function calculateSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + i;
    }
    return sum;
}


app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("Your sum is: " + ans);
})

app.listen(3000)
