var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {title: '노래 검색', pageName:'musics/music.ejs'});
});

module.exports = router;