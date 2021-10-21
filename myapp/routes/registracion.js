var express = require('express');
var router = express.Router();
const registracionController = require('../controllers/registracionController')


router.get('/', registracionController.index);




module.exports = router;