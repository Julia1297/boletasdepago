var expect = require('chai').expect

import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaVenta from '../tarjetas/tarjetaVenta';

describe('Calculadora de salario', function () {

    it('calcular salario para un empleado fijo', function () {
        let calculadora = new CalculadoraPorFijo(1800);
        expect(calculadora.calcularSalario()).equal(1800);
    });

    it('calcular el salario para un empleado por hora con 1 tarjeta de hora', function () {
        let tarjetaHora1 = new TarjetaHora("2018-03-22", "08:00:00", "12:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1]);
        expect(calculadora.calcularSalario()).equal(800);
    });

    it('calcular el salario para un empleado por hora con mas de 1 tarjeta de hora', function () {
        let tarjetaHora1 = new TarjetaHora("2018-03-22", "08:00:00", "12:00:00");
        let tarjetaHora2 = new TarjetaHora("2018-03-22", "15:00:00", "18:00:00");
        let tarjetaHora3 = new TarjetaHora("2018-03-23", "15:00:00", "19:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1, tarjetaHora2, tarjetaHora3]);
        expect(calculadora.calcularSalario()).equal(2200);
    });
    
    it('calcular el salario para un empleado por comision con 10% de comision y 1 tarjeta de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2018-03-22");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        expect(calculadora.calcularSalario()).equal(1050);
    });
    
    it('calcular el salario para un empleado por comision con 10% de comision y mas de 1 tarjeta de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2018-03-22");
        let tarjetaVenta2 = new TarjetaVenta(900, "2018-03-23");
        let tarjetaVenta3 = new TarjetaVenta(300, "2018-03-23");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3]);
        expect(calculadora.calcularSalario()).equal(1170);
    });

});