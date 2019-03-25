class PaymentBill{
    constructor(employee){
        this.employee=employee;
    }
    calculatePayment(){
        return this.employee.getSalary();
    }
    
}
module.exports=PaymentBill;