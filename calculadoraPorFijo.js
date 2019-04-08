import Calculadora from './calculadora';
class CalculadoraPorFijo extends Calculadora{
    constructor(salario){
        super();
        this.salario=salario;
    }
    calcularSalario(){
        return this.salario;
    }  
}
module.exports=CalculadoraPorFijo;
