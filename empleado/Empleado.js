class Empleado{
    constructor(nombre,ci,calculadora,calculadoraFechaPago,metodoPago){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadora=calculadora;
        this.calculadoraFechaPago=calculadoraFechaPago;
        this.metodoPago=metodoPago;
    }
    obtenerSalario(){
        return this.calculadora.calcularSalario();
    }
    obtenerFechaPago(){
        return this.calculadoraFechaPago.calcularFechaDePago();
    }
    obtenerNombre(){
        return this.nombre;
    }
    obtenerCi(){
        return this.ci;
    }
    obtenerMetodoPago(){
        return this.metodoPago;
    }
}


module.exports=Empleado;
