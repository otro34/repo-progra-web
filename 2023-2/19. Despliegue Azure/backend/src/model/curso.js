import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Carrera from './carrera.js'

const Curso = sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    creditos: {
        type: DataTypes.INTEGER
    },
    idCarrera: {
        type: DataTypes.INTEGER
    }
})

Curso.belongsTo(Carrera, {
    foreignKey: 'idCarrera',
    targetId: 'id'
})

export default Curso;

