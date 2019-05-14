const funcionesFecha = require("../otros/FuncionesFecha");

class ClasificadorFechaDePagoPorComision {

    correspondePagar(fechaActual){
        return         funcionesFecha.esViernes(fechaActual) && funcionesFecha.esSemanaPar(fechaActual);
    }


}

module.exports = ClasificadorFechaDePagoPorComision;
