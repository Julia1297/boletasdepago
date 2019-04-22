class BoletaDePago{
    constructor(){
        
    }
   
    generarBoleta(empleado,metodoPago){
        let boleta =       `BOLETA DE PAGO
                            Ci: ${empleado.obtenerCi()}
                            Empleado: ${empleado.obtenerNombre()}
                            Salario: ${empleado.obtenerSalario()}
                            Tipo de moneda: Bs
                            Metodo de pago: ${metodoPago}
                            Fecha de pago: ${empleado.obtenerFechaPago().toString()}`;
        return boleta;
    }
}


module.exports=BoletaDePago;