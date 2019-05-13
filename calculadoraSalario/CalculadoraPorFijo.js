class CalculadoraPorFijo {
    constructor(salario, listaTarjetasAsistencia){
        this.salario=salario;
        this.listaTarjetasAsistencia=listaTarjetasAsistencia;
    }
    calcularSalario(){
        return Math.trunc((this.calcularDiasTrabajados()*this.salario)/this.calcularDiasLaboralesDelMesActual());
    }
    calcularDiasTrabajados(){
        return this.listaTarjetasAsistencia.length;
    }
    calcularDiasLaboralesDelMesActual(){
        let diasLaborales=0;
        let fechaHoraActual=new Date();
        let mesActual=fechaHoraActual.getMonth();
        let anioActual=fechaHoraActual.getFullYear();
        let fechaActual=new Date(anioActual,mesActual,1);
        let fechaUltimoDiaMes = new Date(anioActual, mesActual + 1, 0);
        while(fechaActual.getDate()<=fechaUltimoDiaMes && fechaActual.getMonth()==mesActual){
            if(fechaActual.getDay()>0 && fechaActual.getDay()<6){
                diasLaborales++;
            }
            fechaActual.setDate(fechaActual.getDate()+1);
        }
        return diasLaborales;
    }
}
module.exports=CalculadoraPorFijo;
