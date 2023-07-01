import express from 'express'

import MarcaController from '../controller/marcaController.js'

const { findAll } = MarcaController 

const router = express.Router()

router.get("/", findAll)

export default router;