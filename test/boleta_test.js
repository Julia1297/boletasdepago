var expect = require('chai').expect;

import Empleado from '../empleado/Empleado.js';
import CalculadoraPorFijo from '../calculadoraSalario/CalculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/CalculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/CalculadoraPorComision';
import AsistenciaPorDia from '../tarjetas/AsistenciaPorDia';
import TarjetaVenta from '../tarjetas/TarjetaVenta';
import TarjetaAsistencia from '../tarjetas/TarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/ClasificadorFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/ClasificadorFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/ClasificadorFechaDePagoPorComision';
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
        let asistencia1 = new AsistenciaPorDia("2019-03-02", "08:00:00", "12:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
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