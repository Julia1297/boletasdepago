class BoletaDePago{
    constructor(){
        
    }
   
    generarBoleta(empleado){
        let boleta =       `BOLETA DE PAGO
                            Ci: ${empleado.obtenerCi()}
                            Empleado: ${empleado.obtenerNombre()}
                            Salario: ${empleado.obtenerSalario()}
                            Tipo de moneda: Bs
                            Metodo de pago: ${empleado.obtenerMetodoPago()}
                            Fecha de pago: ${empleado.obtenerFechaPago().toString()}`;
        return boleta;
    }
}


module.exports=BoletaDePago;