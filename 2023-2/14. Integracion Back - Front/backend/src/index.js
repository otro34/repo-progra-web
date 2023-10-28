import express from 'express';
import bodyParser from 'body-parser'

import docenteRoutes from './routes/docente.js';
import alumnoRoutes from './routes/alumno.js'
import cursoRoutes from './routes/curso.js'
import carreraRoutes from './routes/carrera.js'
import matriculaRoutes from './routes/matricula.js'


var app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/docente", docenteRoutes);
app.use("/alumno", alumnoRoutes);
app.use("/curso", cursoRoutes)
app.use("/carrera", carreraRoutes)
app.use("/matricula", matriculaRoutes)

app.listen(3001, () => {
    console.log('Servidor iniciado. Escuchando en puerto 3001')
})