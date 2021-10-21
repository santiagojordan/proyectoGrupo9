var express = require('express');
var router = express.Router();

let detallePostController = require('../controllers/detallePostController')


router.get('/:id?', detallePostController.index);



module.exports = router