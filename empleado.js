class Empleado{
    constructor(nombre,ci,calculadora){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadora=calculadora;
    }
    obtenerSalario(){
        return this.calculadora.calcularSalario();
    }
}


module.exports=Empleado;
