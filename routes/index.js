var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/error', function(req, res, next) {
  try {
    JSON.parse([34324324, '432498732498'])
  } catch (error) {
    next(error)
  }
});

module.exports = router;
