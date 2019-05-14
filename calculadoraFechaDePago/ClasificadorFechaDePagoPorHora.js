const funcionesFecha = require("../otros/FuncionesFecha");

class ClasificadorFechaDePagoPorHora{

    correspondePagar(fechaActual){
        return funcionesFecha.esViernes(fechaActual);
    }

}

module.exports=ClasificadorFechaDePagoPorHora;
