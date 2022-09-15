var PavaElectrica = /** @class */ (function () {
    function PavaElectrica(paramEncendido, paramTemperatura, paramUso) {
        this.estaEncendido = paramEncendido;
        this.temperaturaActual = paramTemperatura;
        this.paraQueUso = paramUso;
    }
    PavaElectrica.prototype.prenderApagar = function () {
        if (this.estaEncendido === true) {
            this.estaEncendido = false;
        }
        else {
            this.estaEncendido = true;
        }
    };
    PavaElectrica.prototype.obtenerTemperatura = function () {
        return this.temperaturaActual;
    };
    return PavaElectrica;
}());
var pavitaCocina = new PavaElectrica(false, 25, "mate");
var pavitaPatio = new PavaElectrica(true, 85, "tesito");
console.log("La pava electrica está a " + pavitaCocina.obtenerTemperatura() + " de temperatura");
