const express = require('express');
const router = express.Router();
const coffeeTypesController = require('../Controllers/coffeeTypesController');

router.post('/coffeeTypes/random', coffeeTypesController.getCoffeeTypesRandom);
router.get('/coffeeTypes/all', coffeeTypesController.getCoffeeTypes);

module.exports = router;