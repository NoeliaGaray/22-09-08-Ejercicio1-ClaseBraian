class PavaElectrica {

    public estaEncendido : boolean;
    public temperaturaActual : number;
    public paraQueUso : string;

    constructor(paramEncendido: boolean,paramTemperatura: number, paramUso: string){
        this.estaEncendido = paramEncendido;
        this.temperaturaActual = paramTemperatura;
        this.paraQueUso = paramUso;
    }

        prenderApagar (): void{
            if (this.estaEncendido===true){
                this.estaEncendido=false;
            }else{
                this.estaEncendido=true;
            }
        }

        obtenerTemperatura (): number{
            return this.temperaturaActual;
        }
        
    }

    let pavitaCocina = new PavaElectrica(false,25,"mate");
    let pavitaPatio = new PavaElectrica(true,85,"tesito");

    console.log("La pava electrica está a",pavitaCocina.obtenerTemperatura(),"de temperatura");
