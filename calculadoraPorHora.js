import Calculadora from './calculadora';
class CalculadoraPorHora extends Calculadora{
    constructor(montoPorHora,tarjetaHoras){
        super();
        this.montoPorHora=montoPorHora;
        this.tarjetaHoras=tarjetaHoras;
    }
    calcularSalario(){
       return this.montoPorHora*this.tarjetaHoras.obtenerCantidadDeHorasTrabajadas();
    }
}
module.exports=CalculadoraPorHora;
