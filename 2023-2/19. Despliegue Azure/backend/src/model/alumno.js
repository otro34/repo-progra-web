import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

import Carrera from './carrera.js'

const Alumno = sequelize.define('alumno', {
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
    idCarrera: {
        type: DataTypes.INTEGER
    }
})

Alumno.belongsTo(Carrera, {
    foreignKey: 'idCarrera',
    targetId: 'id'
});

Carrera.hasMany(Alumno, {
    foreignKey: 'idCarrera',
    targetId: 'id'
})

export default Alumno