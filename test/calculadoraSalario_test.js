var expect = require('chai').expect

import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaVenta from '../tarjetas/tarjetaVenta';

describe('Calculadora de salario', function () {

    it('calcular salario fijo', function () {
        let calculadora = new CalculadoraPorFijo(1800);
        expect(calculadora.calcularSalario()).equal(1800);
    });

    it('calcular salario por hora', function () {
        let tarjetaHora1 = new TarjetaHora("2018-03-22", "08:00:00", "12:00:00");
        let tarjetaHora2 = new TarjetaHora("2018-03-22", "15:00:00", "18:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1, tarjetaHora2]);
        expect(calculadora.calcularSalario()).equal(1400);
    });

    it('calcular salario con 10% de comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2018-03-22");
        let tarjetaVenta2 = new TarjetaVenta(500, "2018-03-23");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1, tarjetaVenta2]);
        expect(calculadora.calcularSalario()).equal(1100);
    });

});