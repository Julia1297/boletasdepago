import Employee from './employee';
class EmployeeForHour extends Employee{
    constructor(ci,name,salary,hours){
        super();
        this.ci=ci;
        this.name=name;
        this.salary=salary;
        this.hours=hours;
    }
    getSalary(){
        return this.salary*this.hours;
    }
}
module.exports=EmployeeForHour;