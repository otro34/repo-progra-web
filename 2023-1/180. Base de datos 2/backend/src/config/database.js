import Sequelize from 'sequelize'

const hostname = '127.0.0.1'
const username = 'postgres'
const password = '123'
const database = 'cursos'
const port = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})


export default sequelize