var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '전시 검색', pageName:"exhibits/exhibit.ejs" });
});

module.exports = router;