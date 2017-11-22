'use-strict'

var Album = require('../models/album');

function getAlbum(req,res){
	 var id= req.params.id;
     
     Album.findById(id,(err, album)=>{
     	if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!album) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ningún usuario"}); 
		 }else{
		 	res.status(200).send({obj: album,error: '',
	   	 		message: ""}); 
		 }
         
     });
}

function getAlbums(req,res) {
	Album.find({}, (err, album) =>{
		 if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!album) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ningún Album"}); 
		 }else{
		 	res.status(200).send({obj: album,error: '',
	   	 		message: ""}); 
		 }
	});
}

function saveAlbum(req,res) {

	  var album  = new Album();

	  var params = req.body;

	   album.title= params.title;
	   album.description = params.description;


	   album.save((err, albumStored)=>{
	   	 if (err) {
	   	 	res.status(500).send({obj: album,error: err,
	   	 		message: "Se ha presentado un error al crear el Album"}); 
	   	 }else if (!albumStored) {
             res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha guardado ningún Album"}); 
	   	 }else{
	   	 	res.status(200).send({obj: albumStored,error:'',message: "Album creado correctamente"
			       }); 
	   	 }
	   	 
	   });  
}

function updateAlbum(req,res) {
	var id= req.params.id; 
	var update = req.body;

	Album.findByIdAndUpdate(id, update, (err, AlbumUpdated)  => {
       if (err) {
	   	 	res.status(500).send({obj: AlbumUpdated,error: err,
	   	 		message: "Se ha presentado un error al actualizar el Album"}); 
	   	 }else{
	   	  res.status(200).send({obj: AlbumUpdated,error:'',message: "Album actualizado correctamente"
			       }); 	
	   	 }
	   	 

	});

}

function deleteAlbum(req,res) {
	var id= req.params.id; 

		Album.findByIdAndRemove(id, (err, AlbumDelete)  => {
       if (err) {
	   	 	res.status(500).send({obj: AlbumDelete,error: err,
	   	 		message: "Se ha presentado un error al eliminar el Album"}); 
	   	 }else if (!AlbumDelete) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ningún Album"}); 
		 }else{
	   	  res.status(200).send({obj: AlbumDelete,error:'',message: "Album eliminado correctamente"
			       }); 	
	   	 }
	   	 
	});

}

module.exports={
	getAlbum,
	getAlbums,
	saveAlbum,
	updateAlbum,
	deleteAlbum
}