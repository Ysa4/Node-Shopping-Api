const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');

router.post('/makeOrder', orderController.makeOrder);
router.get('/getOrders/', orderController.getAllOrders);
router.get('/getOrders/:id', orderController.getOrders);
router.get('/getOrder/:id', orderController.getSingleOrder);
router.delete('/:id', orderController.deleteOrder);












module.exports =router;