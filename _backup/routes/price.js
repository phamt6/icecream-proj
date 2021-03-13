const { Router } = require('express');
const router = Router();
const priceController = require('../controllers/price.controller');

/**
 * @route POST /price
 * @desc pricing order according to user inputs
 * @access PUBLIC
 */
router.post('/', priceController)

module.exports = router;
