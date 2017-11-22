'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/api');
var web = require('./routes/web');

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use ((req, res, next)=>{
  
   res.header('Access-Control-Allow-Origin','*');
   res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
   res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
   res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

   next();

});

app.use('/api',api);
app.use('/',web);



module.exports=app;
