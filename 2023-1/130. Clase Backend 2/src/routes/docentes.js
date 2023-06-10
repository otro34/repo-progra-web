import express from 'express'
import DocenteController from '../controllers/docenteController.js';

const router = express.Router()

router.get("/", DocenteController.findAll)

export default router;