import { getRates as getKitRates } from "./api/kit.js";
import express, { response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, './build')))
const PORT = 5500;

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
})

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