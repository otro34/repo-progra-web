import app from './app.js'
import sequelize from './config/database.js'

async function main() {
    try  {
        await sequelize.sync({force: true})

        console.log('conexión exitosa!')

        app.listen(3001, () => {
            console.log('Servidor iniciado. Escuchando en puerto 3001')
        })

    } catch(err) {
        console.error(err)
    }
}

main();

