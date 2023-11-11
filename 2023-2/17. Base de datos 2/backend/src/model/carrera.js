import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Carrera = sequelize.define('carrera', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    }
})

export default Carrera;