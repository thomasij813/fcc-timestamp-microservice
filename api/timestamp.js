var moment = require('moment');
var chrono = require('chrono-node');

exports.parseTimestamp = function(req, res, next) {
  var timestamp = req.params.timestamp;
  var dateObj = {};
  // if timestamp is a unix date
  if (/^\d*$/.exec(timestamp)) {
    var natural = moment(parseInt(timestamp) * 1000).format('MMMM DD, YYYY');
    if (natural === 'Invalid date')
      return res.json({unix: null, natural: null});
    dateObj.natural = natural;
    dateObj.unix = timestamp;
    res.json(dateObj);
  }
  // if timestamp is a natural language string
  else {
    var iso = chrono.parseDate(timestamp);
    if (!iso) return res.json({unix: null, natural: null});
    dateObj.natural = timestamp;
    dateObj.unix = moment(iso).unix();
    res.json(dateObj);
  }
};
