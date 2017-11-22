function hola_mundo(nombre) {
	 
	 return "Hola Mundo "+nombre;
}

//variables y tipos
var nombre:string = "David Salzar";
var variable_cambiante:any = 5;
var edad:number = 22;
var programador:boolean=true;

var langs:Array<string> = ["PHP", "JavaScript", "CSS"];

var elemento = document.getElementById("container");

elemento.innerHTML = hola_mundo(nombre);

//let var

var a =7;
var b =12;

if (a ===7) {
	let a =4; // la variable a nivel de bloque no afecta la global
	var b = 1; // al usar var reemplazo el valor de b 
	console.log("Dentro del if "+a+ " - "+b);
}

console.log("Fuera  del if "+a+ " - "+b);


//Funciones y tipado

function devuelveNumero(num:number):string {
	return "Número devuelto "+num;
}

function devuelveString(texto:string):number {
	if (texto ="hola") {
		return 66;
	}else{
		return 24;
	}
}
function devuelveAny(texto:string):any {
	return "joder";
}

alert(devuelveNumero(34) );
alert(devuelveString("hola") );