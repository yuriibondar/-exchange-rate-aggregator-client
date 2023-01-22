import { getRates as getKitRates } from "./api/kit.js";
import express, { response } from 'express';

const app = express();
const PORT = 5500;

app.get("/api/kit", (req, res) => {
    getKitRates()
    .then(response => res.send(response.data))
    .catch(error => {
        res.status(500).send(error.message);
    });
})

app.listen(PORT, error => {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);