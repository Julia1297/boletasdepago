class CalculadoraDeFechaDePagoFijo{

    constructor(fechaDeInicioLaboral){
        this.fechaDeInicioLaboral = fechaDeInicioLaboral;
    }
    calcularFechaDePago(){
        let fechaDePago=this.obtenerUltimoDiaDelMes();
        if(this.esDomingo(fechaDePago) || this.esSabado(fechaDePago)){
            this.obtenerDiaHabil(fechaDePago);
        }
        return fechaDePago;
    }
    obtenerDiaHabil(fechaDePago){
        while(this.esDomingo(fechaDePago) || this.esSabado(fechaDePago)){
            fechaDePago.setDate(fechaDePago.getDate()-1);
        }
        return fechaDePago;
    }
    
    obtenerUltimoDiaDelMes(){
        let ultimoDiaMes = new Date(this.fechaDeInicioLaboral.getFullYear(), this.fechaDeInicioLaboral.getMonth() + 1, 0);
        return ultimoDiaMes;
    }
    esDomingo(fechaDePago){
        return fechaDePago.getDay()==0;
    }
    esSabado(fechaDePago){
        return fechaDePago.getDay()==6;
    }
}
module.exports=CalculadoraDeFechaDePagoFijo;