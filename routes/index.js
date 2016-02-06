var express = require('express');
var timestampApi = require('../api/timestamp.js');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/:timestamp', timestampApi.parseTimestamp);

module.exports = router;
