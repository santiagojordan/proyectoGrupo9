var express = require('express');
var router = express.Router();

let agregarPostController = require('../controllers/agregarPostController')

router.get('/', agregarPostController.index);



module.exports = router