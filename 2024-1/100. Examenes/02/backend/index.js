import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import citaRouter from './src/routes/cita.js';
import pacienteRouter from './src/routes/paciente.js';
import especialidadRouter from './src/routes/especialidad.js';
import doctorRouter from './src/routes/doctor.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201"});
})

app.use('/cita', citaRouter);
app.use('/paciente', pacienteRouter);
app.use('/especialidad', especialidadRouter);
app.use('/doctor', doctorRouter);

app.listen(3001,() => {
    console.log('Server is running on port 3001')
})


