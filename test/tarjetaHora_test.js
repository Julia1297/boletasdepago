var expect = require('chai').expect
import TarjetaHora from '../tarjetas/tarjetaHora';

describe('',function(){
    it('calcular cantidad de horas de una Tarjeta de horas', function () {
        let tarjetaHora = new TarjetaHora("2018-03-22", "08:00:00", "14:00:00");
        expect(tarjetaHora.obtenerCantidadDeHorasTrabajadas()).equal(6);
    });
});