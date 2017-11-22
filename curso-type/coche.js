var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.modelo = (modelo == null) ? "BMW Generico" : modelo;
        this.color = "Blanco";
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getVelociad = function () {
        return this.velocidad;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor("amarillo");
console.log("El color del carro es : " + coche.getColor());
