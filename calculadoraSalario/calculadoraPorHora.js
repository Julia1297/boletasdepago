class CalculadoraPorHora {
    constructor(montoPorHora,listaTarjetasHora){

        this.montoPorHora=montoPorHora;
        this.listaTarjetasHora=listaTarjetasHora;
    }
    calcularSalario(){
       return this.montoPorHora*this.calcularHorasTotales();
    }
    calcularHorasTotales(){

        let cantidadDeHoras = 0;
        for (let i = 0; i <this.listaTarjetasHora.length ; i++) {
            cantidadDeHoras = cantidadDeHoras + this.listaTarjetasHora[i].obtenerCantidadDeHorasTrabajadas();
        }
        return cantidadDeHoras;
    }

}
module.exports=CalculadoraPorHora;
