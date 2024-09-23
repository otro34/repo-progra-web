import Sequelize from 'sequelize'

const hostname = 'jcromaina-db-postresql-2024-1.postgres.database.azure.com'
const username = 'postgres'
const password = 'password123.'
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