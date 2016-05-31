var express = require('express');
//var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// koristimo mongoose model koju smo kreirali u folderu model

var Task = require(__dirname+'/../model/Task'); // get the mongoose model
var Project = require(__dirname+'/../model/Project'); // get the mongoose model


var TaskRouter = express.Router();

TaskRouter
  .get('/project/:id', function(req, res) {
    Project.findOne({"_id":req.params.id}, function(err,data, next) {
      if(err) next();
      
      if(data.tasks){
        res.json({success: true ,tasks : data.tasks});  
      }
      else{
          res.json({success : false ,msg: "No tasks yet!"});
      }  
    });
  });
  
  module.exports = TaskRouter;