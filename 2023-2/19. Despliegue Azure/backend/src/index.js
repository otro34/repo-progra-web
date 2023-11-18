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

        const port = process.env.PORT || 3001

        app.listen(port, () => {
            console.log('Servidor iniciado. Escuchando en puerto ' + port)
        })

    } catch(err) {
        console.error(err)
    }
}

main();

