var expect = require('chai').expect

import PaymentBill from '../paymentBill';
import EmployeeFixed from '../employeeFixed';
import EmployeeForHour from '../employeeForHour';

describe('boletas de pago',function(){
    it('generar la boleta de pago para un empleado fijo',function(){
        let employee = new EmployeeFixed(1,"Erick",500);
        let paymentbill = new PaymentBill(employee);
        expect(paymentbill.calculatePayment()).equal(500);
    });

    it('generar la boleta de pago para un empleado por hora',function(){
        let employee = new EmployeeForHour(2,"Alavaro",40,3);
        let paymentbill = new PaymentBill(employee);
        expect(paymentbill.calculatePayment()).equal(120);
    });
});