import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'

import carritoRoutes from './routes/carrito.js';
import ordenRoutes from './routes/orden.js';
import albumRoutes from './routes/album.js';

var app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.json({ result: 'OK'})
})

app.use("/carrito", carritoRoutes);
app.use("/orden", ordenRoutes);
app.use("/album", albumRoutes);

app.listen(3001, () => {
    console.log('Servidor iniciado. Escuchando en puerto 3001')
})