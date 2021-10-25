var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')


router.get('/:id?', usersController.index);



module.exports = router