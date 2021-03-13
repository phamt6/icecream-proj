const createServer = require('./server');
const dotenv = require('dotenv');
dotenv.config();

const startServer = () => {
    const app = createServer();
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server is up and listening on PORT ${PORT}`);
    });
}

startServer();