const OrderService = require('../services/OrderService');

const priceController = (req, res) => {
    const orderService = new OrderService(req.body);

    try {
        res.status(200).json(orderService.makeOrder());
    }
    catch (err) {
        res.status(500).json({
            err: err.message
        });
    }
}

module.exports = priceController;