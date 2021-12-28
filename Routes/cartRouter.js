const express = require('express');
const router = express.Router();

const cartController = require('../Controllers/cartController');

router.post('/add', cartController.addToCart);
router.get('/:id', cartController.getCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

module.exports =router;