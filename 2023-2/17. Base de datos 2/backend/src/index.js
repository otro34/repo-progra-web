import app from './app.js'
import sequelize from './config/database.js'

async function main() {
    try  {

        const init = process.argv[2]

        if (init)
            await sequelize.sync({force: true})
        else
            await sequelize.sync({force: false})

        console.log('conexión exitosa!')

        app.listen(3001, () => {
            console.log('Servidor iniciado. Escuchando en puerto 3001')
        })

    } catch(err) {
        console.error(err)
    }
}

main();

