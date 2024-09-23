
import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

import Alumno from './alumno.js'
import CursoMatricula from './cursoMatricula.js'

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

Matricula.belongsTo(Alumno, { foreignKey: 'idAlumno', targetId: 'id' })

CursoMatricula.belongsTo(Matricula, { foreignKey: 'idMatricula', targetId: 'id' })

Matricula.hasMany(CursoMatricula, { foreignKey: 'idMatricula' })    

export default Matricula;