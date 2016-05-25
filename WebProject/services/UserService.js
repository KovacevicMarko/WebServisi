var express = require('express');
//var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// koristimo mongoose model koju smo kreirali u folderu model

var User = require(__dirname+'/../model/User'); // get the mongoose model

var UserRouter = express.Router(); // koristimo express Router

// definisanje ruta za usera
UserRouter
  .get('/user/:username', function(req, res, next) {
    User.findOne({
      "username": req.params.username
    }).exec(function(err, entry) {
      // ako se desila greska predjemo na sledeci middleware (za rukovanje greskama)
      if (err) next(err);
      res.json(entry);
    });
  })
  .get('/user/', function(req, res) {
    User.find({}, function(err, data, next) {
      res.json(data);
    });
  })
  .post('/user/signUp', function(req, res, next) {
    var user = new User(req.body);
    console.log('JSON:' + req.body);
    user.save(function(err, data) {
      if (err) next(err);
      
      res.json(data);

    });
  })
   .post('/user/signIn', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    
    User.findOne({
      "username": username,
      "password" : password
    }).exec(function(err, user) {
      // ako se desila greska predjemo na sledeci middleware (za rukovanje greskama)
      if (err) next(err);
      if(user==null)
      {
        res.send('Wrong username or password!'); 
        next();
      }
      else{
        res.json(user);
      }
    });
  })
 
  .delete('/user/:username', function(req, res, next) {
    User.remove({
      "_username": req.params.id
    }, function(err, successIndicator) {
      if (err) next(err);
      res.json(successIndicator);
    });
  });
  
module.exports = UserRouter;