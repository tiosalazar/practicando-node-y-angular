interface CocheBase{
   
    getModelo():string;
    getColor():string;

}

class Coche implements CocheBase {
	
	public color:string;
	public modelo:string;
	public velocidad:number;

	constructor(modelo:any = null){
		this.velocidad =0;
		this.modelo = (modelo == null)?"BMW Generico":modelo;
		this.color = "Blanco";
	}

	public getColor():string{
      return this.color;
	}

	public getModelo():string{
      return this.modelo;
	}

	public getVelociad():number{
      return this.velocidad;
	}

	public setColor(color:string){
        this.color = color;
	}

	public acelerar (){
		this.velocidad++;
	}
	public frenar(){
		this.velocidad--;
	}
}

var coche = new Coche();
coche.setColor("amarillo");

console.log("El color del carro es : " + coche.getColor() );