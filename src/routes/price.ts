import { Router } from 'express';
import priceController from 'controllers/price.controller';

const router = Router();

/**
 * @route POST /price
 * @desc pricing order according to user inputs
 * @access PUBLIC
 */
router.post('/', priceController)

module.exports = router;
