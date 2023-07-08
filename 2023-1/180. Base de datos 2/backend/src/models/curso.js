// {id: 1, nombre: "POO", nivel: 4, carrera: "Sistemas", idDocente: 2}

import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Docente from "./docente.js"

const Curso = sequelize.define('cursos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    nivel: {
        type: DataTypes.INTEGER
    },
    carrera: {
        type: DataTypes.STRING
    },
    idDocente: {
        type: DataTypes.INTEGER
    }
})

Curso.belongsTo(Docente, {
    foreignKey: 'idDocente',
    targetId: 'id'
})

Docente.hasMany(Curso, {
    foreignKey: 'idDocente',
    targetId: 'id'
})

export default Curso