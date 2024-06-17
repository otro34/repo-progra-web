import express from 'express';
import docenteController from '../controllers/docente.js';

const router = express.Router();

router.get('/', docenteController.findAll);
router.get('/:id', docenteController.findOne);
router.post('/', docenteController.create);
router.delete('/:id', docenteController.remove);
router.put('/', docenteController.update);


export default router;