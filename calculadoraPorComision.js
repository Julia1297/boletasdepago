import Calculadora from './calculadora';
class CalculadoraPorComision {
    constructor(salarioBase,porcentajeComision,tarjetaVentas){
        this.salarioBase=salarioBase;
        this.porcentajeComision=porcentajeComision;
        this.tarjetaVentas=tarjetaVentas;
    }
    calcularSalario(){
        return this.salarioBase+(this.porcentajeComision*this.tarjetaVentas.obtenerMontoVendido());
    }
}
module.exports=CalculadoraPorComision;
