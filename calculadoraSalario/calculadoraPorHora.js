class CalculadoraPorHora {
    constructor(montoPorHora,tarjetaHoras){

        this.montoPorHora=montoPorHora;
        this.tarjetaHoras=tarjetaHoras;
    }
    calcularSalario(){
       return this.montoPorHora*this.calcularHorasTotales();
    }
    calcularHorasTotales(){

        let cantidadDeHoras = 0;
        for (let i = 0; i <this.tarjetaHoras.length ; i++) {
            cantidadDeHoras = cantidadDeHoras + this.tarjetaHoras[i].obtenerCantidadDeHorasTrabajadas();
        }
        return cantidadDeHoras;
    }

}
module.exports=CalculadoraPorHora;
