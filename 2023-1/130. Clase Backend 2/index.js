import express from 'express';
import bodyParser from 'body-parser';

import docentesRoutes from './src/routes/docentes.js';

var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/docentes", docentesRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.');
})