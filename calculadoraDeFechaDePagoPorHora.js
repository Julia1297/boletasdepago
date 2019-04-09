class CalculadoraDeFechaDePagoPorHora{

    constructor(fechaDeInicioLaboral){
        this.fechaDeInicioLaboral = fechaDeInicioLaboral;
    }
    calcularFechaDePago(){
        let fechaDePago=this.fechaDeInicioLaboral;

        while(fechaDePago.getDay()!= 5){

            fechaDePago.setDate(fechaDePago.getDate()+1);
        }
        return fechaDePago;



    }

}

module.exports=CalculadoraDeFechaDePagoPorHora;
