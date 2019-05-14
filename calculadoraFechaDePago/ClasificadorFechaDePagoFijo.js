const funcionesFecha = require("../otros/FuncionesFecha");

class ClasificadorFechaDePagoFijo{

    correspondePagar(fechaActual){
        return this.calcularFechaDePago(fechaActual)==fechaActual.getDate();
    }
    calcularFechaDePago(fecha){
        return funcionesFecha.calcularUltimoDiaHabilDelMes(fecha);
    }

}
module.exports=ClasificadorFechaDePagoFijo;