var express = require('express');
//var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// koristimo mongoose model koju smo kreirali u folderu model

var Project = require(__dirname+'/../model/Project'); // get the mongoose model


var ProjectRouter = express.Router();

ProjectRouter
  .get('/projects/', function(req, res) {
    Project.find({}, function(err, data, next) {
      res.json(data);
    });
  })
  .post('/addproject', function(req, res, next) {
    var project = new Project(req.body);
    console.log('JSON:' + req.body);
    project.save(function(err, data) {
      if (err) next(err);
      
      res.json(data);

    });
  });
  
module.exports = ProjectRouter;