class AutoLindo {

    public nivelDeNafta: number;
    public radioEncendida: boolean;
    public estacionDeRadio: number;
    public cambioMoA: string;
    public colorAuto: string;

    constructor(paramNafta: number, paramRadio: number, paramCambio: string, paramRadioEnc: boolean, color: string) {
        this.nivelDeNafta = paramNafta;
        this.estacionDeRadio = paramRadio;
        this.cambioMoA = paramCambio;
        this.radioEncendida = paramRadioEnc;
        this.colorAuto = color;
    }

    prenderApagarRadio(): void {
        if (this.radioEncendida === true) {
            this.radioEncendida = false;
        }
        else {
            this.radioEncendida = true;
        }
    }

    obtenerLitrosNafta(): number {
        return this.nivelDeNafta;
    }

    cajaAutomaticaManual(): string {
        return this.cambioMoA;
    }

}

let autoNuevo: AutoLindo = new AutoLindo(20, 108.8, 'automatico', false, 'rojo');
let autoViejo: AutoLindo = new AutoLindo(30, 103.2, 'manual', true, 'verde');

console.log("El auto viejo tiene una caja de cambio " + autoViejo.cajaAutomaticaManual());