import Sequelize from 'sequelize'

const hostname = '127.0.0.1'
const username = 'postgres'
const password = 'friends'
const database = 'matricula2024'
const dbPort = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: dbPort,
    dialect: dialect,
    operatorAliases: false
})

export default sequelize;