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
      if (err) next(err);
      res.json(data);
    });
  })
  .get('/projects/:id', function(req, res) {
    Project.findOne({
      "_id" : req.params.id
    }, function(err, data, next) {
      if (err) next(err);
      res.json(data);
    });
  })
  .get('/projectsForUser/:userID', function (req,res) {
    //todo: staviti req.session.user._id umesto parametra
    Project.find({'usersOnProject' : req.params.userID}, function(err,data,next) {
      if (err) next(err);
      //console.log(pera);
      res.json(data);
    })
  })
  .post('/addProject', function(req, res, next) {
    var project = new Project(req.body);
    project.creator = req.session.user._id;
    project.save(function(err, data) {
      if (err) next(err);
      
      res.json({success:true,data:data});

    });
  })
  .post('/addUsersOnProject/:projectID', function(req, res, next){
    Project.findOne({"_id" : req.params.projectID}
    ).exec(function(err,data){
      if(err) next(err);
      var project = data;
      project.usersOnProject = req.body;
      project.save(function (err2,data) {
        if (err2) next(err2);
        res.json(data);
      });
    });
  })
  .delete('/project/:id', function(req, res, next) {
      Project.remove({
        "_id": req.params.id
        }, function(err, successIndicator) {
      if (err) next(err);
        res.json(successIndicator);
      });
    });
  
  
  
module.exports = ProjectRouter;