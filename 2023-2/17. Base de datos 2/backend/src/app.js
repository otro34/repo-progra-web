import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import carreraRoutes from './routes/carrera.js'
import alumnoRoutes from './routes/alumno.js'
import cursoRoutes from './routes/curso.js'
import docenteRoutes from './routes/docente.js'

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/carrera", carreraRoutes)
app.use("/alumno", alumnoRoutes)
app.use("/docente", docenteRoutes)
app.use("/curso", docenteRoutes)

export default app;