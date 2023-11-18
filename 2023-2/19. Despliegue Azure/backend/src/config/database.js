import Sequelize from 'sequelize'

const hostname = 'jcromaina-20232-prograweb-db.postgres.database.azure.com'
const username = 'postgre'
const password = 'Password123'
const database = 'matricula'
const dbPort = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: dbPort,
    dialect: dialect,
    operatorAliases: false,
    pool: {
        max: 100,
        min:0,
        acquire: 20000,
        idle: 5000
    }
})

export default sequelize;