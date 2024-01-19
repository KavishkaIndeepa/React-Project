var express = require('express');
var router = express.Router();

const {productsList,test} = require("../constants/const")
const ProductsController = require('../controller/ProductController');

/* GET users listing. */
router.get('/all', ProductsController.getAllProducts);

router.post('/save', ProductsController.saveProduct);

router.get('/find/:id', ProductsController.getProduct);

router.put('/update/:id', ProductsController.updateProduct);

router.delete('/delete/:id', ProductsController.deleteProducts);

module.exports = router;
