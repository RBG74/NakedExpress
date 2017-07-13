var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;