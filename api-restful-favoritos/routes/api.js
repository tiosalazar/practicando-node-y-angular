'use strict'

var express = require('express');
var UserController = require('../app/Http/Controllers/UserController.js');
var FavoritoController = require('../app/Http/Controllers/FavoritoController.js');
var api = express.Router();

api.get('/user',UserController.getUsers );
api.get('/user/:id',UserController.getUser );
api.post('/user',UserController.saveUser );
api.put('/user/:id',UserController.updateUser );
api.delete('/user/:id',UserController.deleteUsuer );


module.exports= api;