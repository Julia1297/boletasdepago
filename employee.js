class Employee{
    constructor(ci,name,salary){
        this.name=name;
        this.ci=ci;
        this.salary=salary;
    }
    getSalary(){
        return this.salary;
    }
}
module.exports=Employee;