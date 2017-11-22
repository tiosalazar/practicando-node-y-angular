'use strict'
var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.PORT || 3000;
var BD = process.env.PORT || 'curso_node_angular2';

mongoose.connect(`mongodb://localhost:27017/${BD}`, (err, res) => {

	try{
        app.listen(port, () => {
		console.log(`API REST funcionando en http://localhost:${port}`);
		console.log(`Conectado exitosamente a la BD : ${BD}`);
	 });
	}catch(err){
		console.log('se ha presentado un error al conectarse');
		throw err;
	}

  
 

});

