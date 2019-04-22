var expect = require('chai').expect;

import Empleado from '../empleado/empleado.js';
import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHoras from '../tarjetas/tarjetaHora';
import TarjetaVentas from '../tarjetas/tarjetaVenta';
import TarjetaAsistencia from '../tarjetas/tarjetaAsistencia';
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';
import BoletaDePago from '../boleta/boletaDePago';
import GeneradorBoletasDePago from '../generadorBoletas/generadorBoletasPago';
let empleados = [];
let boletasEsperadas = [];

describe('Generador de boletas de pago',function(){
    it('recibe todos los empleados y genera sus boletas de pago', function () {
        crearListaDeEmpleados();
        let generadorDeBoletas = new GeneradorBoletasDePago(empleados);
        generadorDeBoletas.generarBoletasDePagoParaTodosLosEmpleados();
        let index=0;
        for (let boletaResultante of generadorDeBoletas.boletasGeneradas) {
            let boletaEsperada = boletasEsperadas[index];
            expect(boletaEsperada).equal(boletaResultante);
            index++;
        }
    });

    function crearListaDeEmpleados() {
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-22");
        let calculadora1 = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);;
        let fechaIncioLaboral1 = new Date(2019, 3, 22);
        let calculadoraDeFecha1 = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral1);
        let empleado1 = new Empleado("Erick", 1, calculadora1, calculadoraDeFecha1,"Deposito");
        let fechaDePago1 = new Date(2019,3,30);
        fechaDePago1.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 81
                            Tipo de moneda: Bs
                            Metodo de pago: Deposito
                            Fecha de pago: ${fechaDePago1}`;

        let tarjetaVentas = new TarjetaVentas(500, "2019-03-22");
        let calculadora2 = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let fechaIncioLaboral2 = new Date(2019, 3, 2);
        let calculadoraDeFecha2 = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral2);
        let empleado2 = new Empleado("Juan", 1, calculadora2,calculadoraDeFecha2,"Efectivo");
        let fechaDePago2 = new Date(2019,3,12);
        fechaDePago2.toString();
        let boletaEsperad2=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 225
                            Tipo de moneda: Bs
                            Metodo de pago: Efectivo
                            Fecha de pago: ${fechaDePago2}`;

        let tarjetaHoras1 = new TarjetaHoras("2019-03-22", "08:00:00", "12:00:00");
        let calculadora3 = new CalculadoraPorHora(200, [tarjetaHoras1]);
        let fechaIncioLaboral3 = new Date(2019, 3, 22);
        let calculadoraDeFecha3 = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral3);
        let empleado3 = new Empleado("Ana", 1, calculadora3, calculadoraDeFecha3,"Efectivo");
        let fechaDePago3 = new Date(2019,3,26);
        fechaDePago3.toString();
        let boletaEsperad3=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 800
                            Tipo de moneda: Bs
                            Metodo de pago: Efectivo
                            Fecha de pago: ${fechaDePago3}`;

        let tarjetaHoras2 = new TarjetaHoras("2019-03-22", "08:00:00", "12:00:00");
        let calculadora5 = new CalculadoraPorHora(500, [tarjetaHoras2]);
        let fechaIncioLaboral5 = new Date(2019, 3, 22);
        let calculadoraDeFecha5 = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral5);
        let empleado5 = new Empleado("Maria", 1, calculadora5, calculadoraDeFecha5,"Cheque");
        let fechaDePago5 = new Date(2019,3,26);
        fechaDePago5.toString();
        let boletaEsperad5=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 2000
                            Tipo de moneda: Bs
                            Metodo de pago: Cheque
                            Fecha de pago: ${fechaDePago5}`;
        empleados = [empleado1];
        boletasEsperadas = [boletaEsperada,boletaEsperad2,boletaEsperad3,boletaEsperad5];
    }
});