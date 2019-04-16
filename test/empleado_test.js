var expect = require('chai').expect

import Empleado from '../empleado';
import CalculadoraPorFijo from '../calculadora/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadora/calculadoraPorHora';
import CalculadoraPorComision from '../calculadora/calculadoraPorComision';
import TarjetaHoras from '../tarjetaHoras';
import TarjetaVentas from '../tarjetasVentas';
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
import BoletaDePago from '../boletaDePago';
import GeneradorBoletasDePago from '../generadorBoletasPago';
let empleados = [];

describe('boletas de pago para empleados', function () {
    
    it('obtener salario para un empleado fijo que gana 1800', function () {
        let calculadora = new CalculadoraPorFijo(1800);
        let fechaIncioLaboral = new Date(2019, 3, 9);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        expect(empleado.obtenerSalario()).equal(1800);
    });

    it('obtener el salario para un empleado por hora de 200', function () {
        let tarjetaHoras = new TarjetaHoras("2018-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHoras]);
        let fechaIncioLaboral = new Date(2019, 3, 9);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        expect(empleado.obtenerSalario()).equal(800);
    });

    it('obtener salario para un empleado por comision de 5%', function () {
        let tarjetaVentas = new TarjetaVentas(500, "2018-03-22");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let empleado = new Empleado("Erick", 1, calculadora);
        expect(empleado.obtenerSalario()).equal(225);
    });

    it('obtener salario para un empleado con 3 tarjetas de horas', function () {
        let tarjetaHoras = new TarjetaHoras("2018-03-22", "16:00:00", "20:00:00");
        let tarjetaHoras1 = new TarjetaHoras("2018-03-23", "16:00:00", "20:00:00");
        let tarjetaHoras2 = new TarjetaHoras("2018-03-24", "16:00:00", "20:00:00");

        let lista = [tarjetaHoras, tarjetaHoras1, tarjetaHoras2];

        let calculadora = new CalculadoraPorHora(200, lista);
        let empleado = new Empleado("Erick", 1, calculadora);

        expect(empleado.obtenerSalario()).equal(2400);
    });

    it('recibe un empleado y genera su boleta de pago', function () {
        let fechaActual = new Date(2019, 3, 5);
        let calculadora1 = new CalculadoraPorFijo(1800);
        let fechaIncioLaboral = new Date(2019, 3, 8);
        let calculadoraDeFecha1 = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado1 = new Empleado("Erick", 1, calculadora1, calculadoraDeFecha1);
        let boletaPago = new BoletaDePago();
        boletaPago.generarBoleta(empleado1, fechaActual);


    });

    it('recibe todos los empleados y genera sus boletas de pago', function () {
        let fechaActual = new Date(2019, 3, 5);
        crearListaDeEmpleados();
        let generadorDeBoletas = new GeneradorBoletasDePago(empleados, fechaActual);
        generadorDeBoletas.generarBoletasDePagoParaTodosLosEmpleados();
        
    });

    function crearListaDeEmpleados() {
        let calculadora1 = new CalculadoraPorFijo(1800);
        let fechaIncioLaboral1 = new Date(2019, 3, 9);
        let calculadoraDeFecha1 = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral1);
        let empleado1 = new Empleado("Erick", 1, calculadora1, calculadoraDeFecha1);

        let tarjetaVentas = new TarjetaVentas(500, "2018-03-22");
        let calculadora2 = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let fechaIncioLaboral2 = new Date(2019, 3, 8);
        let calculadoraDeFecha2 = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral2);
        let empleado2 = new Empleado("Juan", 1, calculadora2,calculadoraDeFecha2);


        let tarjetaHoras1 = new TarjetaHoras("2018-03-22", "08:00:00", "12:00:00");
        let calculadora3 = new CalculadoraPorHora(200, [tarjetaHoras1]);
        let fechaIncioLaboral3 = new Date(2019, 3, 2);
        let calculadoraDeFecha3 = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral3);
        let empleado3 = new Empleado("Ana", 1, calculadora3, calculadoraDeFecha3);


        let tarjetaHoras2 = new TarjetaHoras("2018-03-22", "08:00:00", "12:00:00");
        let calculadora5 = new CalculadoraPorHora(500, [tarjetaHoras2]);
        let fechaIncioLaboral5 = new Date(2019, 3, 15);
        let calculadoraDeFecha5 = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral5);
        let empleado5 = new Empleado("Maria", 1, calculadora5, calculadoraDeFecha5);

        empleados = [empleado1,empleado2, empleado3, empleado5];
    }
});