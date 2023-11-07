import express from 'express'

import docenteController from '../controllers/docente.js'

const routes = express.Router()

routes.get('/', docenteController.findAll ) // localhost:3001/docente
routes.post('/', docenteController.create )
routes.get('/:id', docenteController.findOne )
routes.put('/', docenteController.update )
routes.delete('/:id', docenteController.remove)

export default routes