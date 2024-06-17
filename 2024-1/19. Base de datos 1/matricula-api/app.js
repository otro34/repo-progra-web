import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docenteRouter from './src/routes/docente.js';
import cursoRouter from './src/routes/curso.js';
import alumnoRouter from './src/routes/alumno.js';
import matriculaRouter from './src/routes/matricula.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201"});
})

app.use('/docente', docenteRouter);
app.use('/curso', cursoRouter);
app.use('/alumno', alumnoRouter);
app.use('/matricula', matriculaRouter);

export default app;
