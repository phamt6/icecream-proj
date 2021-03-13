const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 5000;

const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/api/v1', (req, res) => {
        res.status(200).send();
    })

    app.listen(PORT, () => {
        console.log(`Server is up and listening on PORT ${PORT}`);
    });

    return app;
}

module.exports = createServer;

