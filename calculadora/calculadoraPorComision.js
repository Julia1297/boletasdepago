import Calculadora from './calculadora';
class CalculadoraPorComision {
    constructor(salarioBase, porcentajeComision, tarjetaVentas) {
        this.salarioBase = salarioBase;
        this.porcentajeComision = porcentajeComision;
        this.tarjetaVentas = tarjetaVentas;
    }
    calcularSalario() {
        return this.salarioBase + (this.porcentajeComision * this.calcularMontoTotalDeVentas());
    }
    calcularMontoTotalDeVentas() {
        let cantidadDeMonto = 0;
        for (let i = 0; i < this.tarjetaVentas.length; i++) {
            cantidadDeMonto = cantidadDeMonto + this.tarjetaVentas[i].obtenerMontoVendido();
        }
        return cantidadDeMonto;
    }
}
module.exports = CalculadoraPorComision;
