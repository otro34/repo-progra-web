import express from 'express'
import DocenteController from '../controllers/docenteController.js';

const router = express.Router()

router.get("/", DocenteController.findAll)
router.post("/", DocenteController.create)
router.put("/", DocenteController.update)
router.delete("/:id", DocenteController.remove)
router.get("/:id", DocenteController.findOne)

export default router;