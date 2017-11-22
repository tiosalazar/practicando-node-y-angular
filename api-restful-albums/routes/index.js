'use strict'

var express = require('express');
var AlbumController = require('../controllers/album');
var ImageController = require('../controllers/image');
var api = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: "./uploads"});

//Rutas Album
api.get('/album',AlbumController.getAlbums );
api.get('/album/:id',AlbumController.getAlbum );
api.post('/album',AlbumController.saveAlbum );
api.put('/album/:id',AlbumController.updateAlbum );
api.delete('/album/:id',AlbumController.deleteAlbum );

//Rutas Image
api.get('/images/:id?',ImageController.getImages );
api.get('/image/:id',ImageController.getImage );
api.post('/image',ImageController.saveImage );
api.put('/image/:id',ImageController.updateImage );
api.delete('/image/:id',ImageController.deleteImage );
  //subir imagen
  api.post('/image/upload/:id',multipartMiddleware,ImageController.uploadImage );
  api.get('/image/file/:imageFile',multipartMiddleware,ImageController.getImageFile ); 

module.exports= api;