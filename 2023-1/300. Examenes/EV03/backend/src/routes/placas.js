import express from 'express'

import PlacaController from '../controller/placaController.js'

const { findAll, findOne, create, update } = PlacaController 

const router = express.Router()

router.get("/", findAll)
router.get("/:id", findOne)
router.post("/", create)
router.put("", update)

export default router;