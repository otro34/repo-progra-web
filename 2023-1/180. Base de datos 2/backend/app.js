import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import docentesRoutes from './src/routes/docentes.js';
import cursosRoutes from './src/routes/cursos.js';

let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/docentes", docentesRoutes);
app.use("/cursos", cursosRoutes);

export default app