
import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

const Matricula = sequelize.define('matricula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fechaMatricula: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idAlumno: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Matricula;