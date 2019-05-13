const funcionesFecha = require("../otros/FuncionesFecha");

// name is a member of myModule due to the export above
class CalculadoraPorFijo {
    constructor(salario,fechaInicioTrabajo){
        this.salario=salario;
        this.fechaInicioTrabajo=fechaInicioTrabajo;
    }
    calcularSalario(){
        if(this.empezoATrabajarRecien()){
            return this.obtenerSueldoDiasRestantesDelMes();
        }
        return this.salario;
    }
    obtenerSueldoDiasRestantesDelMes(){

        let salarioDia = this.calcularSalarioDia();
        console.log(salarioDia);
        let diasTrabajados = funcionesFecha.contarDiasHabilesDeUnMesDesde(this.fechaInicioTrabajo.getDate(),this.fechaInicioTrabajo);
        console.log(diasTrabajados);
        return Math.round(salarioDia * diasTrabajados);
    }

    calcularSalarioDia() {
        return this.salario / funcionesFecha.contarDiasHabilesDeUnMesDesde(1,this.fechaInicioTrabajo);
    }

    empezoATrabajarRecien() {
        console.log(this.empezoATrabajarEsteMes() , this.empezoATrabajarEsteAnio());

        return this.empezoATrabajarEsteMes() && this.empezoATrabajarEsteAnio();
    }

    empezoATrabajarEsteMes(){
        console.log(this.fechaInicioTrabajo.getMonth(), (new Date().getMonth()));
        return this.fechaInicioTrabajo.getMonth() === (new Date().getMonth());
    }

    empezoATrabajarEsteAnio(){
        return this.fechaInicioTrabajo.getFullYear() == (new Date().getFullYear());
    }

}
module.exports=CalculadoraPorFijo;
