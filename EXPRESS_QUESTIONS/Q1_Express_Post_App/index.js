import config from './config/index.js';
import app from './app.js';

(async () => {
    try {
        app.on('error', (error) => {
            console.error('Error: ', error);
            throw error;
        });
        const onListening = () => {
            console.log(`Server is running on port ${config.PORT}`);
        }
        app.listen(config.PORT, onListening);
    } catch (error) {
        console.error('Error: ', error);
        throw error;   
    }
})();