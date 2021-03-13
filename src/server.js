const express = require('express');
const cors = require('cors');
const OrderService = require('./services/OrderService');

const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/api/v1', (req, res) => {
        res.status(200).send();
    });

    app.post('/api/v1/price', (req, res) => {
        const orderService = new OrderService(req.body);
        try {
            res.status(200).json(orderService.makeOrder());
        }
        catch (err) {
            res.status(500).json({
                err: err.message
            });
        }
    });

    app.get('*', (req, res) => {
        res.status(404).send();
    })

    return app;
}

module.exports = createServer;

