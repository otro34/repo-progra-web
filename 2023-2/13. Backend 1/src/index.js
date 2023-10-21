import express from 'express';
import bodyParser from 'body-parser'

import docenteRoutes from './routes/docente.js';

var app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/docente", docenteRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.')
})