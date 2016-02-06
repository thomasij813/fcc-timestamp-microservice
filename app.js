var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes/index.js');

var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
