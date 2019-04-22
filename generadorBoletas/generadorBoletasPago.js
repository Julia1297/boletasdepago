import BoletaDePago from '../boleta/boletaDePago';
class GeneradorBoletasDePago{
    constructor(empleados,fechaActual){
        this.empleados=empleados;
        this.fechaActual=fechaActual;
        this.boletasGeneradas=[];
    }
   
    generarBoletasDePagoParaTodosLosEmpleados(){
        for (let empleado of this.empleados) {
            let boletaDePago = new BoletaDePago();
            boletaDePago.generarBoleta(empleado,);
            this.boletasGeneradas.push(boletaDePago);
        }
    }
}


module.exports=GeneradorBoletasDePago;