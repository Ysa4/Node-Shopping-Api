const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');


router.post('/add', productController.addProudct);
router.get('/get/all', productController.getProducts);
router.get('/get/:id', productController.getProduct);

router.put('/:id', productController.updateProudct);
router.delete('/:id', productController.deleteProudct);










module.exports =router;