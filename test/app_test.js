var expect = require('chai').expect

import PaymentBill from '../paymentBill';
import Employee from '../employee';

describe('boletas de pago',function(){
    it('calcular el salario de un empleado',function(){
        let employee = new Employee(1,"Erick",5);
        let paymentbill = new PaymentBill(employee);
        expect(paymentbill.calculatePayment()).equal(5);
    });
});