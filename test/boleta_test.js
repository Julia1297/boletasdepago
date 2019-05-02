var expect = require('chai').expect;

import Empleado from '../empleado/empleado.js';
import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaVenta from '../tarjetas/tarjetaVenta';
import TarjetaAsistencia from '../tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
import BoletaDePago from '../boleta/boletaDePago';


describe('boleta de pago',function(){
    it('recibe un empleado fijo y genera su boleta de pago', function () {
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-02");
        let calculadora = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);

        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Deposito");
        let boletaPago = new BoletaDePago();
        let fechaDePago = new Date(2019,3,30);
        fechaDePago.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 78
                            Tipo de moneda: Bs
                            Metodo de pago: Deposito
                            Fecha de pago: ${fechaDePago}`;
        let boletaResultante=boletaPago.generarBoleta(empleado);
        expect(boletaEsperada).equal(boletaResultante);
    });


    it('recibe un empleado por hora y genera su boleta de pago', function () {
        let tarjetaHora1 = new TarjetaHora("2019-03-02", "08:00:00", "12:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1]);
        expect(calculadora.calcularSalario()).equal(800);
        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Efectivo");
        let boletaPago = new BoletaDePago();
        let fechaDePago = new Date(2019,3,5);
        fechaDePago.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 800
                            Tipo de moneda: Bs
                            Metodo de pago: Efectivo
                            Fecha de pago: ${fechaDePago}`;
        let boletaResultante=boletaPago.generarBoleta(empleado);
        expect(boletaEsperada).equal(boletaResultante);
    });

    it('recibe un empleado por comision y genera su boleta de pago', function () {
        let tarjetaVenta = new TarjetaVenta(500, "2018-03-02");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVenta]);

        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Cheque");
        let boletaPago = new BoletaDePago();
        let fechaDePago = new Date(2019,3,12);
        fechaDePago.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 225
                            Tipo de moneda: Bs
                            Metodo de pago: Cheque
                            Fecha de pago: ${fechaDePago}`;
        let boletaResultante=boletaPago.generarBoleta(empleado);
        expect(boletaEsperada).equal(boletaResultante);
    });
});