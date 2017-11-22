'use-strict'

var path = require('path');
var Image = require('../models/image');
var Album = require('../models/album');

function getImage(req,res) {
	var id = req.params.id;

	Image.findById(id,(err,image)=>{
       if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!image) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ninguna imagen"}); 
		 }else{
		 	Album.populate(image,{path:'album'},(err, image)=>{
               if (err) {
		 	     res.status(500).send({obj: '',error: err,
	   	 		    message: "Error al ejecutar la consulta"}); 
		        }else{
		        	 res.status(200).send({obj: image,error: '',
	   	 		message: ""}); 
		        }
		 	});
		 }

	});
}
function getImages(req,res) {
	var album_id = req.params.id;
	if (!album_id) {
    var find= Image.find({}).sort('title');
	}else{
	var find =Image.find({album:album_id }).sort('title');
	}
	//
	find.exec((err, image) =>{
		 if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!image) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ninguna Imagen"}); 
		 }else{
		 	Album.populate(image,{path:'album'},(err, image)=>{
               if (err) {
		 	     res.status(500).send({obj: '',error: err,
	   	 		    message: "Error al ejecutar la consulta"}); 
		        }else{
		        	 res.status(200).send({obj: image,error: '',
	   	 		message: ""}); 
		        }
		 	});
		 }
	   });
}

function saveImage(req,res) {

	  var image  = new Image();

	  var params = req.body;

	   image.title= params.title;
	   image.picture =null;
	   image.album =params.album;


	   image.save((err, imageStored)=>{
	   	 if (err) {
	   	 	res.status(500).send({obj: "",error: err,
	   	 		message: "Se ha presentado un error al crear la imagen"}); 
	   	 }else if (!imageStored) {
             res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha guardado ninguna Imagen"}); 
	   	 }else{
	   	 	res.status(200).send({obj: imageStored,error:'',message: "Imagen creado correctamente"
			       }); 
	   	 }
	   	 
	   });  
}

function updateImage(req,res) {
	var id= req.params.id; 
	var update = req.body;

	Image.findByIdAndUpdate(id, update, (err, ImageUpdated)  => {
       if (err) {
	   	 	res.status(500).send({obj: ImageUpdated,error: err,
	   	 		message: "Se ha presentado un error al actualizar la Imagen"}); 
	   	 }else{
	   	  res.status(200).send({obj: ImageUpdated,error:'',message: "Imagen actualizado correctamente"
			       }); 	
	   	 }
	   	 

	});

}

function deleteImage(req,res) {
	var id= req.params.id; 

		Image.findByIdAndRemove(id, (err, ImageDelete)  => {
       if (err) {
	   	 	res.status(500).send({obj: ImageDelete,error: err,
	   	 		message: "Se ha presentado un error al eliminar la Imagen"}); 
	   	 }else if (!ImageDelete) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ninguna Imagen"}); 
		 }else{
	   	  res.status(200).send({obj: ImageDelete,error:'',message: "Imagen eliminado correctamente"
			       }); 	
	   	 }
	   	 
	});

}

function uploadImage(req,res) {
	 var id = req.params.id;
     var filename = 'No subido';

     if (req.files) {
          var file_path = req.files.image.path;
          var file_split = file_path.split("\\");
              filename = file_split[1];

        Image.findByIdAndUpdate(id, {picture:filename}, (err, ImageUpdated)  => {
       if (err) {
	   	 	res.status(500).send({obj: ImageUpdated,error: err,
	   	 		message: "Se ha presentado un error al actualizar la Imagen"}); 
	   	 }else if(!ImageUpdated){
               res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ninguna Imagen"}); 
	   	 }else{
	   	  res.status(200).send({obj: ImageUpdated,error:'',message: "Imagen actualizado correctamente"
			       }); 	
	   	 }	 
	  });      
     }else{
       res.status(200).send({obj: '',error:'No se ha subido niinguna imagen',message: "No se ha subido niinguna imagen"
			       }); 
     } 
}

var fs = require('fs');
function getImageFile(req,res) {
	var imageFile = req.params.imageFile;

//res.status(200).send({obj: '',error:'',message: "Imagen actualizado correctamente"
//			       }); 	

	fs.exists('./uploads/'+imageFile, (exists) =>{
        if (exists) {
        	res.sendFile(path.resolve('./uploads/'+imageFile));
        }else{
        	 res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ninguna Imagen"}); 
        }
	});
	

}

module.exports={
	getImage,
	getImages,
	saveImage,
	updateImage,
	deleteImage,
	uploadImage,
	getImageFile
}