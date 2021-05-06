var express = require('express');
var router = express.Router();


var petsRouter = require('../components/pet/petsAPI');

router.use(petsRouter);

module.exports = router;
