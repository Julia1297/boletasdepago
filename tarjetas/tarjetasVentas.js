class TarjetaVentas{
    constructor(montoVendido,fecha){
        this.montoVendido=montoVendido;
        this.fecha=fecha;
    }
    obtenerMontoVendido(){
        return this.montoVendido;
    }
}
module.exports=TarjetaVentas;
