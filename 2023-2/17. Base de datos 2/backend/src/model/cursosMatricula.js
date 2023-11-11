import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Curso from './curso.js'
import Matricula from './matricula.js'

const CursosMatricula = sequelize.define('cursomatricula', {
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

CursosMatricula.belongsTo(Matricula, {
    foreignKey: 'idMatricula',
    targetId: 'id'
})

CursosMatricula.hasMany(Curso, {
    foreingKey: 'idCurso',
    targetId: 'id'
})

export default CursosMatricula;