'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3010;
var BD = process.env.PORT || 'app_albums';

mongoose.connect(`mongodb://localhost:27017/${BD}`, (err, res) => {

	try{
        app.listen(port, () => {
		console.log(`API Albums REST funcionando en http://localhost:${port}`);
		console.log(`Conectado exitosamente a la BD : ${BD}`);
	 });
	}catch(err){
		console.log('se ha presentado un error al conectarse');
		console.log('El error es '+err);
		throw err;
	}

  
 

});
