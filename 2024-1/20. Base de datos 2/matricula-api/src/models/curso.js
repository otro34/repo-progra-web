import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

const Curso = sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Curso;

