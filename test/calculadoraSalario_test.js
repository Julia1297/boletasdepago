var expect = require('chai').expect

import CalculadoraPorFijo from '../calculadoraSalario/calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraSalario/calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraSalario/calculadoraPorComision';
import TarjetaHora from '../tarjetas/tarjetaHora';
import TarjetaAsistencia from '../tarjetas/tarjetaAsistencia';
import TarjetaVenta from '../tarjetas/tarjetaVenta';
let DiasTrabajados=[];
describe('Calculadora de salario', function () {

    it('calcular salario para un empleado fijo que asistio un dia laboral del mes', function () {
        let tarjetaAsistencia = new TarjetaAsistencia("2019-03-22");
        let calculadora = new CalculadoraPorFijo(1800,[tarjetaAsistencia]);
        expect(calculadora.calcularSalario()).equal(78);
    });

    it('calcular salario para un empleado fijo que asistio 10 dias laborales del mes', function () {
        DiezDiasTrabajados();
        let calculadora = new CalculadoraPorFijo(1800,DiasTrabajados);
        expect(calculadora.calcularSalario()).equal(782);
    });
    function DiezDiasTrabajados(){
        let tarjetaAsistencia1 = new TarjetaAsistencia("2019-03-2");
        let tarjetaAsistencia2 = new TarjetaAsistencia("2019-03-3");
        let tarjetaAsistencia3 = new TarjetaAsistencia("2019-03-5");
        let tarjetaAsistencia4 = new TarjetaAsistencia("2019-03-8");
        let tarjetaAsistencia5 = new TarjetaAsistencia("2019-03-12");
        let tarjetaAsistencia6 = new TarjetaAsistencia("2019-03-15");
        let tarjetaAsistencia7 = new TarjetaAsistencia("2019-03-16");
        let tarjetaAsistencia8 = new TarjetaAsistencia("2019-03-17");
        let tarjetaAsistencia9 = new TarjetaAsistencia("2019-03-18");
        let tarjetaAsistencia10 = new TarjetaAsistencia("2019-03-19");
        DiasTrabajados=[tarjetaAsistencia1,tarjetaAsistencia2,tarjetaAsistencia3,tarjetaAsistencia4,
                        tarjetaAsistencia5,tarjetaAsistencia6,tarjetaAsistencia7,tarjetaAsistencia8,
                        tarjetaAsistencia9,tarjetaAsistencia10];
    }

    it('calcular el salario para un empleado por hora con 1 tarjeta de hora', function () {
        let tarjetaHora1 = new TarjetaHora("2019-03-22", "08:00:00", "12:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1]);
        expect(calculadora.calcularSalario()).equal(800);
    });

    it('calcular el salario para un empleado por hora con mas de 1 tarjeta de hora', function () {
        let tarjetaHora1 = new TarjetaHora("2019-03-22", "08:00:00", "12:00:00");
        let tarjetaHora2 = new TarjetaHora("2019-03-23", "08:00:00", "18:00:00");
        let tarjetaHora3 = new TarjetaHora("2019-03-24", "07:00:00", "19:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora1, tarjetaHora2, tarjetaHora3]);
        expect(calculadora.calcularSalario()).equal(5800);
    });
    
    it('calcular el salario para un empleado por comision con 10% de comision y 1 tarjeta de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-03-22");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        expect(calculadora.calcularSalario()).equal(1050);
    });
    
    it('calcular el salario para un empleado por comision con 10% de comision y mas de 1 tarjeta de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-03-22");
        let tarjetaVenta2 = new TarjetaVenta(900, "2019-03-23");
        let tarjetaVenta3 = new TarjetaVenta(300, "2019-03-23");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3]);
        expect(calculadora.calcularSalario()).equal(1170);
    });

});