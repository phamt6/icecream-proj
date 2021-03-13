const express = require('express');
const router = express.Router();
const price = require('./price');


router.get('/', (req, res) => {
    res.status(200).send();
});

router.use('/price', price);

module.exports = router;