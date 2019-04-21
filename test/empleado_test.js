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
import GeneradorBoletasDePago from '../generadorBoletas/generadorBoletasPago';
let empleados = [];
// const mongoose = require('mongoose');

// //connect to db-------------------------------------------------------------
// mongoose.connect('mongodb://localhost/BoletasBd', { useNewUrlParser: true })
//     .then(db => console.log("DB conectada"))
//     .catch(err => console.log(err));
// //--------------------------------------------------------------------------
describe('boletas de pago para empleados', function () {
    
    it('obtener salario para un empleado fijo que gana 1800', function () {
        let calculadora = new CalculadoraPorFijo(1800);
        let fechaIncioLaboral = new Date(2019, 3, 9);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        expect(empleado.obtenerSalario()).equal(1800);
    });
    it('obtener el salario para un empleado por hora de 200', function () {
        let tarjetaHoras = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHoras]);
        let fechaIncioLaboral = new Date(2019, 3, 9);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha);
        expect(empleado.obtenerSalario()).equal(800);
    });

    it('obtener salario para un empleado por comision de 5%', function () {
        let tarjetaVentas = new TarjetaVenta(500, "2018-03-22");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let empleado = new Empleado("Erick", 1, calculadora);
        expect(empleado.obtenerSalario()).equal(225);
    });

    it('obtener salario para un empleado por hora con 3 tarjetas de horas', function () {
        let tarjetaHoras = new TarjetaHora("2018-03-22", "16:00:00", "20:00:00");
        let tarjetaHoras1 = new TarjetaHora("2018-03-23", "16:00:00", "20:00:00");
        let tarjetaHoras2 = new TarjetaHora("2018-03-24", "16:00:00", "20:00:00");

        let lista = [tarjetaHoras, tarjetaHoras1, tarjetaHoras2];

        let calculadora = new CalculadoraPorHora(200, lista);
        let empleado = new Empleado("Erick", 1, calculadora);

        expect(empleado.obtenerSalario()).equal(2400);
    });

    it('obtener salario para un empleado por comision con 3 tarjetas de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2018-03-22");
        let tarjetaVenta2 = new TarjetaVenta(300, "2018-03-22");
        let tarjetaVenta3 = new TarjetaVenta(100, "2018-03-22");

        let lista = [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3];

        let calculadora = new CalculadoraPorComision(700,0.07,lista);
        let empleado = new Empleado("Erick", 1, calculadora);

        expect(empleado.obtenerSalario()).equal(763);
    });
});
