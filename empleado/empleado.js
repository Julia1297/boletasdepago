class Empleado{
    constructor(nombre,ci,calculadora,calculadoraFechaPago){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadora=calculadora;
        this.calculadoraFechaPago=calculadoraFechaPago;
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
}


module.exports=Empleado;
