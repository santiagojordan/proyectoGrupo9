var express = require('express');
var router = express.Router();
const miPerfilController = require('../controllers/miPerfilController')


router.get('/', miPerfilController.index);



module.exports = router;
