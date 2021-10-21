var express = require('express');
var router = express.Router();
const resultadoBusquedaController = require('../controllers/resultadoBusquedaController')


router.get('/', resultadoBusquedaController.index);



module.exports = router