class ClasificadorFechaDePagoFijo{

    constructor(fechaDeInicioLaboral){
        this.fechaDeInicioLaboral = fechaDeInicioLaboral;
    }
    calcularFechaDePago(){
        let fechaDePago=this.obtenerFechaUltimoDiaDelMes();
        if(this.esDomingo(fechaDePago) || this.esSabado(fechaDePago)){
            fechaDePago = this.obtenerDiaHabil(fechaDePago);
        }
        return fechaDePago;
    }
    obtenerDiaHabil(fechaDePago){
        while(this.esDomingo(fechaDePago) || this.esSabado(fechaDePago)){
            fechaDePago.setDate(fechaDePago.getDate()-1);
        }
        return fechaDePago;
    }
    
    obtenerFechaUltimoDiaDelMes(){
        let fechaUltimoDiaMes = new Date(this.fechaDeInicioLaboral.getFullYear(), this.fechaDeInicioLaboral.getMonth() + 1, 0);
        return fechaUltimoDiaMes;
    }
    esDomingo(fechaDePago){
        return fechaDePago.getDay()==0;
    }
    esSabado(fechaDePago){
        return fechaDePago.getDay()==6;
    }
}
module.exports=ClasificadorFechaDePagoFijo;