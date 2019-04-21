class Empleado{
    constructor(nombre,ci,calculadora,fechaPago){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadora=calculadora;
        this.fechaPago=fechaPago;
    }
    obtenerSalario(){
        return this.calculadora.calcularSalario();
    }
    obtenerFechaPago(){
        return this.fechaPago.calcularFechaDePago();
    }
    obtenerNombre(){
        return this.nombre;
    }
    obtenerCi(){
        return this.ci;
    }
}


module.exports=Empleado;
