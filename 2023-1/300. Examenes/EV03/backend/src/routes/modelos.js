import express from 'express'

import ModeloController from '../controller/modeloController.js'

const { findAll } = ModeloController 

const router = express.Router()

router.get("/", findAll)

export default router;