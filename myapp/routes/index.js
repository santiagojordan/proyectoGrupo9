var express = require('express');
var router = express.Router();
const controller = require("../controllers/indexController")

/* GET home page. */
router.get('/index', controller.index);

let indexController = require('../controllers/indexController')

router.get('/', indexController.index);

module.exports = router;
