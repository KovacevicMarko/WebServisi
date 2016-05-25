var express = require('express');
//var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// koristimo mongoose model koju smo kreirali u folderu model

var Project = require(__dirname+'/../model/Project'); // get the mongoose model


var ProjectRouter = express.Router();

ProjectRouter.