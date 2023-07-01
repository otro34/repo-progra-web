import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import marcasRoutes from './src/routes/marcas.js'
import modelosRoutes from './src/routes/modelos.js'
import placasRoutes from './src/routes/placas.js'

let app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
  return res.json({ result: 'OK'})  
})

app.use("/marcas", marcasRoutes);
app.use("/modelos", modelosRoutes);
app.use("/placas", placasRoutes);

app.listen(3001, () => {
    console.log('app is running!')
})