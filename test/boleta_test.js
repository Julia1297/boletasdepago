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
import BoletaDePago from '../boleta/boletaDePago';


describe('',function(){
    it('recibe un empleado fijo y genera su boleta de pago', function () {
        let fechaActual = new Date(2019, 3, 5);
        let calculadora = new CalculadoraPorFijo(1800);

        let fechaIncioLaboral = new Date(2019, 3, 8);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        let boletaPago = new BoletaDePago();
        boletaPago.generarBoleta(empleado, fechaActual);
    });
    it('recibe un empleado por hora y genera su boleta de pago', function () {
        let fechaActual = new Date(2019, 3, 5);
        let tarjetaHora = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);

        let fechaIncioLaboral = new Date(2019, 3, 8);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        let boletaPago = new BoletaDePago();
        boletaPago.generarBoleta(empleado, fechaActual);
    });
    it('recibe un empleado por comision y genera su boleta de pago', function () {
        let fechaActual = new Date(2019, 3, 5);
        let tarjetaVenta = new TarjetaVenta(500, "2018-03-22");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVenta]);

        let fechaIncioLaboral = new Date(2019, 3, 8);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        let boletaPago = new BoletaDePago();
        boletaPago.generarBoleta(empleado, fechaActual);
    });
});