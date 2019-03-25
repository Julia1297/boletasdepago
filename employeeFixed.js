import Employee from './employee';
class EmployeeFixed extends Employee{
    constructor(ci,name,salary){
        super();
        this.name=name;
        this.ci=ci;
        this.salary=salary;
    }
    getSalary(){
        return this.salary;
    }

}
module.exports=EmployeeFixed;