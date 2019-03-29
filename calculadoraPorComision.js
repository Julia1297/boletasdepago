import Calculadora from './calculadora';
class CalculadoraPorComision extends Calculadora{
    constructor(salarioBase,porcentajeComision,tarjetaVentas){
        super();
        this.salarioBase=salarioBase;
        this.porcentajeComision=porcentajeComision;
        this.tarjetaVentas=tarjetaVentas;
    }
    calcularSalario(){
        return this.salarioBase+(this.porcentajeComision*this.tarjetaVentas.obtenerMontoVendido());
    }
}
module.exports=CalculadoraPorComision;