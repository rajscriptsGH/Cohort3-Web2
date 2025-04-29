import { json } from "body-parser";
import express from "express";
const app = express();
const port = 3030;

const user = [
    {
        name: "Sharma",
        kidneys: [
            {
                healthy: false,
            },
            {
                healthy: true,
            },
            {
                healthy: true,
            },
        ],
    },
];

app.use(express.json());

app.get("/", (req, res) => {
    let sharmaKidney = user[0].kidneys;
    let noOfKidney = sharmaKidney.length;
    let healthyKidney = 0;
    for (let i = 0; i < sharmaKidney.length; i++) {
        if (sharmaKidney[i].healthy) {
            healthyKidney += 1;
        }
    }
    const unHealthyKidney = noOfKidney - healthyKidney;

    res.json({
        sharmaKidney,
        noOfKidney,
        healthyKidney,
        unHealthyKidney,
    });
});

app.post('/', (req, res) => {

})

// app.put('/', (req, res) => {

// })

// app.delete('/', (req, res) => {

// })

app.listen(port, () => {
    console.log(`Doctor is checking in room no: ${port}`);
});
