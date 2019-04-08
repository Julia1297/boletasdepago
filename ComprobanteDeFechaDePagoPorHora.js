class ComprobanteDeFechaDePagoPorHora{

    constructor(fechaDeInicioLaboral){
        this.fechaDeInicioLaboral = fechaDeInicioLaboral;
    }
    obtenerFechaDePago(){
        let fechaDePago=this.fechaDeInicioLaboral;

        while(fechaDePago.getDay()!= 5){

            fechaDePago.setDate(fechaDePago.getDate()+1);
        }
        return fechaDePago;



    }

}

module.exports=ComprobanteDeFechaDePagoPorHora;
