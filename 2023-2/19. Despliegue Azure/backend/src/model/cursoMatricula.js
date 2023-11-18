import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Curso from './curso.js'
import Matricula from './matricula.js'

const CursoMatricula = sequelize.define('cursomatricula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idMatricula: {
        type: DataTypes.INTEGER,
    },
    idCurso: {
        type: DataTypes.INTEGER
    }
})

CursoMatricula.belongsTo(Matricula, {
    foreignKey: 'idMatricula',
    targetId: 'id'
})

CursoMatricula.hasMany(Curso, {
    foreingKey: 'idCurso',
    targetId: 'id'
})

export default CursoMatricula;