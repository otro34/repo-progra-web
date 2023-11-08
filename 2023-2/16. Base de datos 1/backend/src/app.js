import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import carreraRoutes from './routes/carrera.js'

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/carrera", carreraRoutes)

export default app;