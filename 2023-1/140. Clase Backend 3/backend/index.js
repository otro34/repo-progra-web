import express from 'express';
import bodyParser from 'body-parser';

import docentesRoutes from './src/routes/docentes.js';
import cursosRoutes from './src/routes/cursos.js';


var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/docentes", docentesRoutes);
app.use("/cursos", cursosRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado.');
})