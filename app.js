var express = require('express'),
  mongoose = require('mongoose'),
  errorHandler = require('errorhandler'),
  fs = require('fs'),
  config = require('./config/config');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

var app = express();
module.exports = app;

require('./config/express')(app, config);
require('./config/routes')(app);

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
};

app.listen(config.port);
console.log('app is running on port '+ config.port)
