import app from './app.js';
import sequelize from './src/config/database.js';

async function main() {
    try {
        
        const init = process.argv[2];

        if (init)
            await sequelize.sync({ force: true });
        else 
            await sequelize.sync({ force: false });
        
        console.log('Database synchronized');

        const port = process.env.PORT || 3001;
        
        app.listen(port, () => {
            console.log('Server running on port 3001');
        });

    } catch (error) {
        console.error(error)
    }
}

main();