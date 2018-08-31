const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dictionary', (req, res, next) => {
  res.render('dictionary');
});

router.get('/converter', (req, res, next) => {
  res.render('converter');
});

module.exports = router;
