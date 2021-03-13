const express = require('express');
const cors = require('cors');
const OrderService = require('./services/OrderService');
const routes = require('./routes/index');

const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/v1', routes);

    app.get('*', (req, res) => {
        res.status(404).send();
    })

    return app;
}

module.exports = createServer;

