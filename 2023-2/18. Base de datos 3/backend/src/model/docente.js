import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Curso from './curso.js'

const Docente = sequelize.define('docente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    idCurso: {
        type: DataTypes.INTEGER
    }
})

Docente.belongsTo(Curso, {
    foreignKey: 'idCurso',
    targetId: 'id'
})

export default Docente;

