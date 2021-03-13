const { Router } = require('express');

const priceRoute = Router();

/**
 * @route POST /price
 * @desc pricing order according to user inputs
 * @access PUBLIC
 */

priceRoute.post('/', (req, res) => {
    res.status(200).send();
})

module.exports = priceRoute;
