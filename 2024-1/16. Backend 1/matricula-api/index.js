import express from 'express';
import bodyParser from 'body-parser';

import docenteRouter from './src/routes/docente.js';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.json({ message: "Hello World", code: "201"});
})

app.use('/docente', docenteRouter);

app.listen(3001,() => {
    console.log('Server is running on port 3001')
})


