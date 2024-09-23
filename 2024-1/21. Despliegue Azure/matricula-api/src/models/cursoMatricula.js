import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

import Curso from './curso.js';

const CursoMatricula = sequelize.define('cursomatricula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCurso: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idMatricula: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

CursoMatricula.belongsTo(Curso, 
    { foreignKey: 'idCurso', targetId: 'id' })


export default CursoMatricula;