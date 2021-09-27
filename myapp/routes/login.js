var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let loginController = require('../controllers/loginController')

router.get('/', loginController.index);

module.exports = router;
