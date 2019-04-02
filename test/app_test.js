var expect = require('chai').expect

import Empleado from '../empleado';
import CalculadoraPorFijo from '../calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraPorComision';
import TarjetaHoras from '../tarjetaHoras';
import TarjetaVentas from '../tarjetasVentas';

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
        let calculadora = new CalculadoraPorHora(200,tarjetaHoras);
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
        let calculadora = new CalculadoraPorHora(200,tarjetaHoras);
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


});
