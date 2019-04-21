var expect = require('chai').expect;

import Empleado from '../empleado/empleado.js';
import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaVenta from '../tarjetas/tarjetaVenta';
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';

describe('calcular el salario para empleados y su fecha de paga', function () {
    
    it('obtener salario para un empleado fijo que gana 1800', function () {
        let calculadora = new CalculadoraPorFijo(1800);
        let empleado = new Empleado("Erick", 1, calculadora);
        expect(empleado.obtenerSalario()).equal(1800);
    });

    it('obtener la fecha de paga para un empleado fijo', function () {
        let tarjetaHora = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha);
        let fechaResultante = empleado.obtenerFechaPago().toString();
        let fechaEsperada = new Date(2019, 5, 28).toString();
        
        expect(fechaEsperada).equal(fechaResultante);
    });

    it('obtener el salario para un empleado por hora con 1 tarjeta de venta y 200 de salario por hora', function () {
        let tarjetaHora = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let empleado = new Empleado("Erick", 1, calculadora);
        expect(empleado.obtenerSalario()).equal(800);
    });

    it('obtener la fecha de paga para un empleado por hora', function () {
        let tarjetaHora = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        let fechaResultante = empleado.obtenerFechaPago().toString();
        let fechaEsperada = new Date(2019, 5, 7).toString();
        expect(fechaEsperada).equal(fechaResultante);
    });
    
    
    it('obtener el salario para un empleado por hora con mas de 1 tarjeta de venta y 200 de salario por hora', function () {
        let tarjetaHoras = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let tarjetaHoras1 = new TarjetaHora("2018-03-23", "16:00:00", "20:00:00");
        let tarjetaHoras2 = new TarjetaHora("2018-03-24", "16:00:00", "20:00:00");

        let lista = [tarjetaHoras, tarjetaHoras1, tarjetaHoras2];

        let calculadora = new CalculadoraPorHora(200, lista);
        let empleado = new Empleado("Erick", 1, calculadora);

        expect(empleado.obtenerSalario()).equal(2400);
    });

    it('obtener salario para un empleado por comision con 1 tarjeta de venta y 5% de comision', function () {
        let tarjetaVentas = new TarjetaVenta(500, "2018-03-22");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let empleado = new Empleado("Erick", 1, calculadora);
        expect(empleado.obtenerSalario()).equal(225);
    });

    it('obtener salario para un empleado por comision con 3 tarjetas de venta y 7% de comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2018-03-22");
        let tarjetaVenta2 = new TarjetaVenta(300, "2018-03-22");
        let tarjetaVenta3 = new TarjetaVenta(100, "2018-03-22");

        let lista = [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3];

        let calculadora = new CalculadoraPorComision(700,0.07,lista);
        let empleado = new Empleado("Erick", 1, calculadora);

        expect(empleado.obtenerSalario()).equal(763);
    });

    it('obtener la fecha de paga para un empleado por comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2018-03-22");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        let fechaResultante = empleado.obtenerFechaPago().toString();
        let fechaEsperada = new Date(2019, 5, 14).toString();
        expect(fechaEsperada).equal(fechaResultante);
    });
});
