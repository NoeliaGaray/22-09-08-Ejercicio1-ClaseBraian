var AutoLindo = /** @class */ (function () {
    function AutoLindo(paramNafta, paramRadio, paramCambio, paramRadioEnc, color) {
        this.nivelDeNafta = paramNafta;
        this.estacionDeRadio = paramRadio;
        this.cambioMoA = paramCambio;
        this.radioEncendida = paramRadioEnc;
        this.colorAuto = color;
    }
    AutoLindo.prototype.prenderApagarRadio = function () {
        if (this.radioEncendida === true) {
            this.radioEncendida = false;
        }
        else {
            this.radioEncendida = true;
        }
    };
    AutoLindo.prototype.obtenerLitrosNafta = function () {
        return this.nivelDeNafta;
    };
    AutoLindo.prototype.cajaAutomaticaManual = function () {
        return this.cambioMoA;
    };
    return AutoLindo;
}());
var autoNuevo = new AutoLindo(20, 108.8, 'automatico', false, 'rojo');
var autoViejo = new AutoLindo(30, 103.2, 'manual', true, 'verde');
console.log('El auto viejo tiene una caja de cambio', autoViejo.cajaAutomaticaManual(),'y es de color', autoViejo.colorAuto);
