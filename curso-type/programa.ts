//definición de Modulos
module Tienda{
    export  class Ropa  {
     	
     	constructor(public titulo:string) {
     		alert(titulo);
     	}
     }

     export class Informatica {
     	
     	constructor(public titulo:string) {
     		alert('Tienda de tecnologia : '+titulo);
     	}
     }
}

import Informatica =  Tienda.Informatica;
let cargar_informatica = new Informatica('Super 1');

//Decoradores
function arranque(lanzar:string) {	
	return  (target: Function) => {
		target.prototype.lanzamiento = function():void{
			console.log(lanzar);
		}
	}
}
//Usar decoradores
@arranque("lanzamiento")
class Programa {

	public nombre: string;
	public version: string;

	setNombre(nombre:string){
		this.nombre = nombre;
	}
	setVersion(version:string){
		this.version = version;
	}
	getNombre():string{
		return this.nombre;
	}
	getVersion():string{
		return this.version;
	}
	
}

class EditorVideo extends Programa {
	
	public timeline:number;

	setTimeline(timeline:number){
		this.timeline=timeline;
	}
	getTimeline():number{
		return this.timeline;
	}

	getAllData():string{
		return this.getNombre()+"-"+ this.getVersion()+"-"+this.getTimeline()
	}
}

var editor = new EditorVideo();
editor.setVersion("1.1.0");
editor.setNombre("Camtasia Studio");
editor.setTimeline(15);

console.log(editor.getAllData());

//Logica del formulario

var programas:any =[];

function guardar() {
	var nombre:string = (<HTMLInputElement>document.getElementById('nombre')).value.toString(); 
    var version:string = (<HTMLInputElement>document.getElementById('version')).value.toString(); 
 
     var programa = new Programa();

     programa.setNombre(nombre);
     programa.setVersion(version);
     programas.push(programa);

     var list:string ="";

     for (var i=0; i < programas.length; i++) {
     	list = list+"<li>"+programas[i].getNombre()+"</li>";
     }
     var listado = <HTMLElement> document.getElementById('listado');
     listado.innerHTML=list;
     (<HTMLInputElement>document.getElementById('nombre')).value ="";
}