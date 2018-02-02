var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var app = express();
var routes = require('./routes')(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.listen(3000, function() {
  db.sequelize.sync();
});

