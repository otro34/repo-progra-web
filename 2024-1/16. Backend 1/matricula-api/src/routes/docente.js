import express from 'express';
import docenteController from '../controllers/docente.js';

const router = express.Router();

router.get('/', docenteController.findAll);
router.post('/', docenteController.create);

export default router;