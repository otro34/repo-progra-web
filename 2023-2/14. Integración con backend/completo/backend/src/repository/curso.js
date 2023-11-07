import base from './base.js'

let cursos = [{
    id: 1,
    nivel: 7,
    nombre: "Programación Web",
    creditos: 200,
    estado: "Activo",
    carrera: { id: 1}
},{
    id: 1,
    nombre: "Programación Web",
    creditos: 200,
    estado: "Activo",
    carrera: { id: 1}
}]

const findAll = () => cursos