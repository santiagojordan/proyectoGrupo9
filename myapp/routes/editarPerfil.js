var express = require('express');
var router = express.Router();


let editarPerfilController = require('../controllers/editarPerfilController')

router.get('/', editarPerfilController.index);



module.exports = router