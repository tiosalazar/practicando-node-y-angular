'use-strict'

var User = require('../../User.js');

function getUser(req,res) {
	var id= req.params.id; 

	User.findById(id, function (err, users) {
		 if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!users) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ningún usuario"}); 
		 }else{
		 	res.status(200).send({obj: users,error: '',
	   	 		message: ""}); 
		 }
	})
}

function getUsers(req,res) {
	User.find({}).sort('_id').exec((err, users) =>{
		 if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!users) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ningún usuario"}); 
		 }else{
		 	res.status(200).send({obj: users,error: '',
	   	 		message: ""}); 
		 }
	});
}

function saveUser(req,res) {

	  var user  = new User();

	  var params = req.body;

	   user.nombre= params.nombre;
	   user.apellido = params.apellido;
	   user.password= params.password;

	   user.save((err, userStored)=>{
	   	 if (err) {
	   	 	res.status(500).send({obj: user,error: err,
	   	 		message: "Se ha presentado un error al crear el usuario"}); 
	   	 }else{
	   	 	res.status(200).send({obj: user,error:'',message: "Usuario creado correctamente"
			       }); 
	   	 }
	   	 
	   });  
}

function updateUser(req,res) {
	var id= req.params.id; 
	var update = req.body;

	User.findByIdAndUpdate(id, update, (err, userUpdated)  => {
       if (err) {
	   	 	res.status(500).send({obj: userUpdated,error: err,
	   	 		message: "Se ha presentado un error al actualizar el usuario"}); 
	   	 }else{
	   	  res.status(200).send({obj: userUpdated,error:'',message: "Usuario actualizado correctamente"
			       }); 	
	   	 }
	   	 

	});

}

function deleteUsuer(req,res) {
	var id= req.params.id; 

	User.findById(id, function(err, user){
      if (err) {
		 	res.status(500).send({obj: '',error: err,
	   	 		message: "Error al ejecutar la consulta"}); 
		 }else if (!user) {
          res.status(404).send({obj: '',error: err,
	   	 		message: "No se ha encontrado ningún usuario"}); 
		 }else{
		 	user.remove( err =>{
		 		 if (true) {
                res.status(200).send({obj: user,error: '',
	   	 		message: "El usuario ha sido borrado con éxito."}); 
		 		 }else{
            res.status(500).send({obj: user,error: err,
	   	 		message: "El usuario no se ha podido eliminar"}); 
		 		 }
		 	});
		 	
		 }
	});
}

module.exports={
	getUser,
	getUsers,
	saveUser,
	updateUser,
	deleteUsuer
}