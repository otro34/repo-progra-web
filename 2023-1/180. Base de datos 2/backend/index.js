import app from './app.js'
import sequelize from './src/config/database.js'

async function main() {
    try {
        const init =  process.argv[2];
        console.log({init})
        if (init)
            await sequelize.sync({force: true})
        else 
            await sequelize.sync({force: false})

        console.log('connection successful')
        
        app.listen(3001)

        console.log('app iniciada')
    }
    catch(err) {
        console.error('Connection error: ', err)
    }
}

main()