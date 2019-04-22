class CalculadoraPorHora {
    constructor(montoPorHora,listaTarjetasHora){

        this.montoPorHora=montoPorHora;
        this.listaTarjetasHora=listaTarjetasHora;
        this.horasExtras=0;
    }
    calcularSalario(){
       return this.montoPorHora*this.calcularHorasTotales()+this.montoPorHora*this.horasExtras;
    }
    calcularHorasTotales(){

        let cantidadDeHoras = 0;
        for (let i = 0; i <this.listaTarjetasHora.length ; i++) {
            let horasTrabajadas=this.listaTarjetasHora[i].obtenerCantidadDeHorasTrabajadas();
            cantidadDeHoras = cantidadDeHoras + horasTrabajadas;
            if(this.hizoHorasExtras(horasTrabajadas)){
                this.registrarHorasExtras(horasTrabajadas);
                cantidadDeHoras=cantidadDeHoras-this.descontarHorasExtrasDeLaCantidadDeHoras(horasTrabajadas);
            }
        }
        return cantidadDeHoras;
    }
    registrarHorasExtras(horasTrabajadas){
        this.horasExtras=this.horasExtras+(horasTrabajadas-8)*1.5;
    }
    descontarHorasExtrasDeLaCantidadDeHoras(horasTrabajadas){
        return horasTrabajadas-8;
    }
    hizoHorasExtras(horasTrabajadas){
        return horasTrabajadas>8;
    }
}
module.exports=CalculadoraPorHora;
