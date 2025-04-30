import express, { json } from "express";
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
                healthy: false,
            },
            {
                healthy: false,
            },
        ],
    },
];

app.use(express.json());                                                          //to able to parse and get json body  

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

//to send kidney whether it is healthy or not
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;                                           //to take input
    user[0].kidneys.push({
        healthy: isHealthy                                                          //to increase the no of kidney
    })
    res.json({
        msg: "Done!"                                                                //just a msg that it is done
    })
})


//to replace a kidney and make it healthy
app.put('/', (req, res) => {
    if (isThereAtleastOneUnhealthyKidney) {
        for (let i = 0; i < user[0].kidneys.length; i++) {
            user[0].kidneys[i].healthy = true;
        }
        res.json({})
    } else {
        res.status(411)
    }

})

//to remove unhealthy kidney
app.delete('/', (req, res) => {
    if (isThereAtleastOneUnhealthyKidney) {
        let newKidney = [];                                                            //array of new healthy kidney              
        for (let i = 0; i < user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidney.push({                                                      //push kidney if it is healthy
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidney;
        res.json({
            msg: "Deleted"
        })
    } else {
        res.status(441).json({                                                       //it return there is something wrong in input data
            msg: "There is no bad kidney"
        })
    }

})

//function to check whether there is a unhealthy kidney or not
function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys.healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(port, () => {
    console.log(`Doctor is checking in room no: ${port}`);
});
