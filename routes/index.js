var express = require('express');
var router = express.Router();
const axios = require('axios');

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

/* GET home page. */
router.get('/get', async function(req, res, next) {
  try {
    const response = await axios.get('http://www.mocky.io/v2/5c8b27fd2e00007e75d64f1d')
    res.send(response)
  } catch (error) {
    next(error)
  }
});

/* GET home page. */
router.get('/504', async function(req, res, next) {
  try {
    const response = await axios.get('http://www.mocky.io/v2/5c8b28ad2e0000e873d64f23')
    res.send(response)
  } catch (error) {
    next(error)
  }
});

/* GET home page. */
router.get('/407', async function(req, res, next) {
  try {
    const response = await axios.get('http://www.mocky.io/v2/5c8b29042e0000e476d64f25')
    res.send(response)
  } catch (error) {
    next(error)
  }
});

/* GET home page. */
router.get('/api', async function(req, res, next) {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH',
      responseType: 'text'
    })
    console.log(response)
    res.json(response.data)
  } catch (error) {
    console.log(error.message)
    next(error)
  }
});

/* GET home page. */
router.get('/qbs', async function(req, res, next) {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://sandbox.api.intuit.com/quickbooks/v4/customers/99890890/bank-accounts',
      responseType: 'text'
    })
    res.json(response.data)
  } catch (error) {
    next(error)
  }
});

module.exports = router;
