var expect = require('chai').expect

import CalculadoraPorFijo from '../calculadora/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadora/calculadoraPorHora';
import CalculadoraPorComision from '../calculadora/calculadoraPorComision';
import TarjetaHoras from '../tarjetaHoras';
import TarjetaVentas from '../tarjetasVentas';

describe('Test de Calculadora para los pagos', function () {
    it('generar la tarjeta de horas para un empleado por horas ', function () {
        let tarjetaDeHoras = new TarjetaHoras("2018-03-22", "16:00:00", "20:00:00");
        let resultado = tarjetaDeHoras.obtenerCantidadDeHorasTrabajadas();
        let esperado = 4;
        expect(resultado).equal(esperado);
    });

    it('calcular cantidad de horas de una Tarjeta de horas', function () {
        let tarjetaHoras = new TarjetaHoras("2018-03-22", "08:00:00", "14:00:00");
        expect(tarjetaHoras.obtenerCantidadDeHorasTrabajadas()).equal(6);
    });

    it('calcular monto vendido de una Tarjeta de ventas', function () {
        let tarjetaVentas = new TarjetaVentas(600, "2018-03-22");
        expect(tarjetaVentas.obtenerMontoVendido()).equal(600);
    });

    it('calcular salario fijo', function () {
        let calculadora = new CalculadoraPorFijo(1800);
        expect(calculadora.calcularSalario()).equal(1800);
    });

    it('calcular salario por hora', function () {
        let tarjetaHoras = new TarjetaHoras("2018-03-22", "08:00:00", "12:00:00");
        let tarjetaHoras1 = new TarjetaHoras("2018-03-22", "15:00:00", "18:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHoras, tarjetaHoras1]);
        expect(calculadora.calcularSalario()).equal(1400);
    });

    it('calcular salario con 10% de comision', function () {
        let tarjetaVentas = new TarjetaVentas(500, "2018-03-22");
        let tarjetaVentas1 = new TarjetaVentas(500, "2018-03-23");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVentas, tarjetaVentas1]);
        expect(calculadora.calcularSalario()).equal(1100);
    });

});