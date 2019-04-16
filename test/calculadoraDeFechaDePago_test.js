var expect = require('chai').expect
import CalculadoraDeFechaDePagoPorHora from '../calculadoraFechaDePago/calculadoraDeFechaDePagoPorHora';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/calculadoraDeFechaDePagoFijo';
import CalculadoraDeFechaDePagoPorComision from '../calculadoraFechaDePago/CalculadoraDeFechaDePagoPorComision';

describe('Tests para calcular fechas de pago', function () {
it('recibe una fecha y devuelve la fecha del viernes para pagar a un empleado por hora', function () {

    let fechaIncioLaboral = new Date(2019, 3, 8);
    let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
    let fechaResultante = calculadoraDeFecha.calcularFechaDePago();
    let fechaEsperada = new Date(2019, 3, 12);
    let dia = fechaResultante.getDay();
    let mes = fechaResultante.getMonth();
    let anio = fechaResultante.getFullYear();

    let diaEsperado = fechaEsperada.getDay();
    let mesEsperado = fechaEsperada.getMonth();
    let anioEsperado = fechaEsperada.getFullYear();

    expect(dia).equal(diaEsperado);
    expect(mes).equal(mesEsperado);
    expect(anio).equal(anioEsperado);

});

it('recibe una fecha y devuelve la fecha del ultimo dia habil del mes para un empleado fijo', function () {

    let fechaIncioLaboral = new Date(2019, 5, 3);
    let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
    let fechaResultante = calculadoraDeFecha.calcularFechaDePago();
    let fechaEsperada = new Date(2019, 5, 28);
    let dia = fechaResultante.getDate();
    let mes = fechaResultante.getMonth();
    let anio = fechaResultante.getFullYear();

    let diaEsperado = fechaEsperada.getDate();
    let mesEsperado = fechaEsperada.getMonth();
    let anioEsperado = fechaEsperada.getFullYear();

    expect(dia).equal(diaEsperado);
    expect(mes).equal(mesEsperado);
    expect(anio).equal(anioEsperado);

});
it('recibe una fecha y devuelve la fecha del 2do viernes para pagar a un empleado por comision', function () {

    let fechaIncioLaboral = new Date(2019, 3, 8);
    let comprabanteDeFechaHora = new CalculadoraDeFechaDePagoPorComision(fechaIncioLaboral);
    let fechaResultante = comprabanteDeFechaHora.calcularFechaDePago();
    let day = fechaResultante.getDate();
    let month = fechaResultante.getMonth();
    let year = fechaResultante.getFullYear();

    let fechaEsperada = new Date(2019, 3, 19);
    let diaEsperado = fechaEsperada.getDate();
    let mesEsperado = fechaEsperada.getMonth();
    let anioEsperado = fechaEsperada.getFullYear();

    expect(year).equal(anioEsperado);
    expect(month).equal(mesEsperado);
    expect(day).equal(diaEsperado);

});

});