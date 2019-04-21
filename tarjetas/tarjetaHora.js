class TarjetaHora{
    constructor(fecha,horaEntrada,horaSalida){
        this.fecha=fecha;
        this.horaEntrada=horaEntrada;
        this.horaSalida=horaSalida;
    }
    obtenerCantidadDeHorasTrabajadas(){
        let d1= new Date(this.fecha+"T"+this.horaEntrada+"Z");
        let d2= new Date(this.fecha+"T"+this.horaSalida+"Z");
        return d2.getHours() - d1.getHours();
    }
}

module.exports=TarjetaHora;
