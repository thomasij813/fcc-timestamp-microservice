var moment = require('moment');
var express = require('express');
var chrono = require('chrono-node');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/:timestamp', function(req, res, next) {
  var timestamp = req.params.timestamp;
  var dateObj = {};
  // if timestamp is a unix date
  if (/^\d*$/.exec(timestamp)) {
    dateObj.natural = moment(parseInt(timestamp) * 1000).format('MMMM DD, YYYY');
    dateObj.unix = timestamp;
  }
  // if timestamp is a natural language string
  else {
    var iso = chrono.parseDate(timestamp);
    dateObj.natural = timestamp;
    dateObj.unix = moment(iso).unix();
  }
  res.json(dateObj);
});

module.exports = router;
