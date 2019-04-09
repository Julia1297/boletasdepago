class ComprobanteDeFechaDePagoPorComision {
    constructor(fechaDeInicioLaboral) {
        this.fechaDeInicioLaboral = fechaDeInicioLaboral;
    }
    obtenerFechaDePago() {
        let fechaDePago = this.fechaDeInicioLaboral;
        fechaDePago.setDate(fechaDePago.getDate() +  this.obtenerDiasRestanteParaViernes() + 7);
        return fechaDePago;
    }

    obtenerDiasRestanteParaViernes() {
        return 5 - this.fechaDeInicioLaboral.getDay();
    }
}

module.exports = ComprobanteDeFechaDePagoPorComision;
