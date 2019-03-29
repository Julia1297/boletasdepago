var expect = require('chai').expect

import PaymentBill from '../paymentBill';
import Empleado from '../empleado';
import CalculadoraPorFijo from '../calculadoraPorFijo';
import CalculadoraPorHora from '../calculadoraPorHora';
import CalculadoraPorComision from '../calculadoraPorComision';
import TarjetaHoras from '../tarjetaHoras';
import TarjetaVentas from '../tarjetasVentas';

describe('boletas de pago',function(){
    it('generar la boleta de pago para un empleado fijo',function(){
        let c = new CalculadoraPorFijo(1800);
        let e = new Empleado("Erick",1,c); 
        expect(e.obtenerSalario()).equal(1800);
    });

    it('generar la boleta de pago para un empleado por hora',function(){
        let t = new TarjetaHoras("2018-03-22","16:00:00","20:00:00");
        let c = new CalculadoraPorHora(200,t);
        let e = new Empleado("Erick",1,c);
        expect(e.obtenerSalario()).equal(800);
    });

    it('generar la boleta de pago para un empleado por hora',function(){
        let t = new TarjetaVentas(500,"2018-03-22");
        let c = new CalculadoraPorComision(200,0.05,t);
        let e = new Empleado("Erick",1,c);
        expect(e.obtenerSalario()).equal(225);
    });
});