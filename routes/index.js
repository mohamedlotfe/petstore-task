var express = require('express');
var router = express.Router();


var productsRouter = require('../components/product/productsAPI');

router.use(productsRouter);

module.exports = router;
