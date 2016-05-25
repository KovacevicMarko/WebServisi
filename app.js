var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/webBaza');
var port = process.env.PORT || 8080; // na kom portu slusa server

//middleware za citanje zahteva
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get("/",function (req,res) {
  res.sendfile(__dirname + '/client/login.html');
}).get("/login.html",function (req,res) {
  res.sendfile(__dirname + '/client/login.html');});

//Middleware za rukovanje sa Userom
var user = require('./services/UserService')
app.use('/UserService/',user);

app.use('/', express.static(__dirname+'/client'));

//na kraju dodajemo middleware za obradu gresaka
app.use(function(err, req, res, next) {
  var message = err.message;
  var error = err.error || err;
  var status = err.status || 500;

  res.status(status).json({
    message: message,
    error: error
  });
});

//RUN SERVER

app.listen(port);

console.log('Server radi na portu ' + port);