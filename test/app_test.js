var expect = require('chai').expect

import Empleado from '../empleado';
import CalculadoraPorFijo from '../calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraPorComision';
import TarjetaHoras from '../tarjetaHoras';
import TarjetaVentas from '../tarjetasVentas';
import ComprobanteDeFechaDePagoPorHora from '../ComprobanteDeFechaDePagoPorHora';
import ComprobanteDeFechaDePagoPorComision from '../ComprobanteDeFechaDePagoPorComision';

describe('boletas de pago',function(){
    it('calcular cantidad de horas de una Tarjeta de horas',function(){
        let tarjetaHoras= new TarjetaHoras("2018-03-22","08:00:00","12:00:00");
        expect(tarjetaHoras.obtenerCantidadDeHorasTrabajadas()).equal(4);
    });

    it('calcular monto vendido de una Tarjeta de ventas',function(){
        let tarjetaVentas = new TarjetaVentas(600,"2018-03-22");
        expect(tarjetaVentas.obtenerMontoVendido()).equal(600);
    });

    it('calcular salario fijo',function(){
        let calculadora = new CalculadoraPorFijo(1800);
        expect(calculadora.calcularSalario()).equal(1800);
    });

    it('calcular salario por hora',function(){
        let tarjetaHoras = new TarjetaHoras("2018-03-22","08:00:00","12:00:00");
        let calculadora = new CalculadoraPorHora(200,[tarjetaHoras]);
        expect(calculadora.calcularSalario() ).equal(800);
    });

    it('calcular salario con 10% de comision',function(){
        let tarjetaVentas = new TarjetaVentas(500,"2018-03-22");
        let calculadora = new CalculadoraPorComision(200,0.10,tarjetaVentas);
        expect(calculadora.calcularSalario()).equal(250);
    });

    it('generar la boleta de pago para un empleado fijo',function(){
        let calculadora = new CalculadoraPorFijo(1800);
        let empleado = new Empleado("Erick",1,calculadora); 
        expect(empleado.obtenerSalario()).equal(1800);
    });

    it('generar la boleta de pago para un empleado por hora',function(){
        let tarjetaHoras = new TarjetaHoras("2018-03-22","16:00:00","20:00:00");
        let calculadora = new CalculadoraPorHora(200,[tarjetaHoras]);
        let empleado = new Empleado("Erick",1,calculadora);
        expect(empleado.obtenerSalario()).equal(800);
    });

    it('generar la boleta de pago para un empleado por comision con 5% de comision',function(){
        let tarjetaVentas = new TarjetaVentas(500,"2018-03-22");
        let calculadora = new CalculadoraPorComision(200,0.05,tarjetaVentas);
        let empleado = new Empleado("Erick",1,calculadora);



        expect(empleado.obtenerSalario()).equal(225);
    });
    it('generar la tarjeta de horas para un empleado por horas ',function(){
        let tarjetaDeHoras  = new TarjetaHoras("2018-03-22","16:00:00","20:00:00");
        let resultado = tarjetaDeHoras.obtenerCantidadDeHorasTrabajadas();
        let esperado = 4;
        expect(resultado).equal(esperado);
    });

    it('generar la boleta de pago para un empleado  para 3 tarjetas de horas',function(){
        let tarjetaHoras = new TarjetaHoras("2018-03-22","16:00:00","20:00:00");
        let tarjetaHoras1 = new TarjetaHoras("2018-03-23","16:00:00","20:00:00");
        let tarjetaHoras2 = new TarjetaHoras("2018-03-24","16:00:00","20:00:00");

        let lista = [tarjetaHoras,tarjetaHoras1,tarjetaHoras2];

        let calculadora = new CalculadoraPorHora(200,lista);
        let empleado = new Empleado("Erick",1,calculadora);

        expect(empleado.obtenerSalario()).equal(2400);
    });

    //test para calcular fecha del proximo viernes

    it('recibe una fecha y devuelve la fecha del siguiente viernes',function(){

        let fechaIncioLaboral = new Date(2019,3,8);
        let  comprabanteDeFechaHora = new ComprobanteDeFechaDePagoPorHora(fechaIncioLaboral);
        let fechaResultante = comprabanteDeFechaHora.obtenerFechaDePago();
        let fechaEsperada = new Date(2019,3,12);
        let day  = fechaResultante.getDay();
        let month = fechaResultante.getMonth();
        let year = fechaResultante.getFullYear();

        let dayEsperado = fechaEsperada.getDay();
        let monthEsperado = fechaEsperada.getMonth();
        let yearEsperado = fechaEsperada.getFullYear();

        expect(day).equal(dayEsperado);
        expect(month).equal(monthEsperado);
        expect(year).equal(2019);

    });

    it('recibe una fecha y devuelve la fecha de Pago para Comision',function(){

        let fechaIncioLaboral = new Date(2019,3,8);
        let  comprabanteDeFechaHora = new ComprobanteDeFechaDePagoPorComision(fechaIncioLaboral);
        let fechaResultante = comprabanteDeFechaHora.obtenerFechaDePago();
        
        let day  = fechaResultante.getDate();
        let month = fechaResultante.getMonth();
        let year = fechaResultante.getFullYear();

        expect(year).equal(2019);
        expect(month).equal(3);
        expect(day).equal(19);
        
    });



});
