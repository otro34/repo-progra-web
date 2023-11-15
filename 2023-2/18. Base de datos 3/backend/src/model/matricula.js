import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Alumno from './alumno.js'

const Matricula = sequelize.define('matricula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fechaMatricula: {
        type: DataTypes.DATE,
    },
    idAlumno: {
        type: DataTypes.INTEGER
    }
})

Matricula.belongsTo(Alumno, {
    foreignKey: 'idAlumno',
    targetId: 'id'
})

export default Matricula;

