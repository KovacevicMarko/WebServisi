var express = require('express');
//var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// koristimo mongoose model koju smo kreirali u folderu model

var Task = require(__dirname+'/../model/Task'); // get the mongoose model
var Project = require(__dirname+'/../model/Project'); // get the mongoose model
var User = require(__dirname+'/../model/User'); // get the mongoose model

var TaskRouter = express.Router();

TaskRouter
  .get('/tasks/:taskID', function(req,res,next){
    Task.findOne({"_id" : req.params.taskID}, function (err) {
      if (err) next(err);
      //res.json(data);
    }).populate('assigned_to').populate('comments')
    .exec(function(err,data){
      if(err) next(err);
      res.json(data);
    })
  })
  .get('/tasksForProject/:projectID', function(req, res) {
    // vraca sve taskove na datom projektu
    Project.findOne({"_id":req.params.projectID}, function(err,data, next) {
      if(err) next(err);
      
      if(data.tasks.length > 0){
        res.json({success: true ,tasks : data.tasks});  
      }
      else{
          res.json({success : false ,msg: "No tasks yet!"});
      }  
    });
  })
  .get('/tasksForUser/:userID',function(req, res) {
    // vraca sve taskove za datog usera
    Task.find({"assigned_to":req.params.userID}, function(err,data, next) {
      if(err) next(err);
      
      if(data.length>0){
        res.json({success: true ,tasks : data});  
      }
      else{
          res.json({success : false ,msg: "No tasks for this user!"});
      }  
    });
  })
  .post('/changeTask', function (req,res,next) {
    var user = req.session.user;
    var changes = req.body;
    var taskID = changes._id;
    
    Task.findOne({"_id" : taskID}, function (err, data) {
      if (err) next(err);
      var task = data;
      
      for (var property in changes) {
          if (property != "_id") {
            for (var taskProperty in task._doc) {//todo: smisliti nesto lepse od _doc
              if (property === taskProperty) {
                task[taskProperty] = changes[property];
                break;
              }
            }
          }
      }
      var taskUpdate = { "taskChanges": changes, "dateOfChange" : new Date()}; //todo: staviti req.session.user._id
      task.taskUpdateHistory.push(taskUpdate);
      //task.status = STATUS.INPROGRESS;
      task.save(function(err) {
        if (err) next(err);
        
        res.json(task);
      });
      
    })
  })
  .post('/task/:projectID', function(req,res,next) {
    var task = new Task(req.body);
    task.save(function (err) {
      if (err) next(err);
    });
    
    Project.find({"_id" : req.params.projectID},
      function(err,data){
        if(err) next(err);
        var project = data[0];
        project.tasks.push(task._id);
        project.save();
        res.json(project);
      });
  })
  .delete('/task/:taskID',function(req,res,next) {
    Task.remove({"_id" : req.params.taskID}, function (err,data) {
      if (err) next(err);
      res.json({success:true});
    })
  });
  
  module.exports = TaskRouter;