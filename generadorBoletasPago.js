import BoletaDePago from './boletaDePago';
class GeneradorBoletasDePago{
    constructor(empleados,fechaActual){
        this.empleados=empleados;
        this.fechaActual=fechaActual;
        this.boletasGeneradas=[];
    }
   
    generarBoletasDePagoParaTodosLosEmpleados(){
        for (let empleado of this.empleados) {
            let boletaDePago = new BoletaDePago(empleado,this.fechaActual);
            this.boletasGeneradas.push(boletaDePago);
        }
    }
}


module.exports=GeneradorBoletasDePago;