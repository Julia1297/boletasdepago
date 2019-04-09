class BoletaDePago{
    constructor(){
        
    }
   
    generarBoleta(empleado,fechaActual){
        this.ci=empleado.obtenerCi();
        this.empleado=empleado.obtenerNombre();
        this.fechaActual=fechaActual;
        this.salarioApagar=empleado.obtenerSalario();
        this.fechaQueSePago=empleado.obtenerFechaPago();
    }
}


module.exports=BoletaDePago;