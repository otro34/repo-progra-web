import app from './app.js';
import sequelize from './src/config/database.js';

async function main() {
    try {
        
        await sequelize.sync({ force: true });
        
        console.log('Database synchronized');
        
        app.listen(3001, () => {
            console.log('Server running on port 3000');
        });

    } catch (error) {
        console.error(error)
    }
}

main();