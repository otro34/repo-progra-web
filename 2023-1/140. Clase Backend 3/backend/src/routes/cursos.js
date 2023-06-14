import express from 'express'
import cursoController from '../controllers/cursoController.js';

const { findAll, create, update, remove, findOne } = cursoController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:id", remove)
router.get("/:id", findOne)

export default router;