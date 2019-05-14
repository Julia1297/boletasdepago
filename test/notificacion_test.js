import CalculadoraPorHora from "../calculadoraSalario/CalculadoraPorHora";

var expect = require('chai').expect;
import Email from '../notificaciones/Email';
import Facebook from '../notificaciones/Facebook';
import Whatsapp from '../notificaciones/Whatsapp';
import Empleado from '../empleado/Empleado';
import CalculadoraDeFechaDePagoPorHora from "../calculadoraFechaDePago/ClasificadorFechaDePagoPorHora";
import AsistenciaPorDia from "../tarjetas/AsistenciaPorDia";
import TarjetaAsistencia from "../tarjetas/TarjetaAsistencia";

describe('notificaciones', function () {

    it('deberia devolver vacio cuando un empleado no agrego ningun medio de notificacion',  function () {
        let empleado = new Empleado();
        expect(empleado.notificar()).equal("");
    });

    it('deberia de notificar por facebook a un empleado que  agrego facebook como medio de notificacion',  function () {
        let asistencia1 = new AsistenciaPorDia("2019-05-03", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Deposito");
        empleado = new Facebook(empleado);
        expect(empleado.notificar()).equal(" Facebook ");
    });

    it('deberia de notificar por facebook whatsapp y email a un empleado que  agrego estos 3 medios como medios de notificacion',  function () {
        let asistencia1 = new AsistenciaPorDia("2019-05-03", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoPorHora(fechaIncioLaboral);
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,"Deposito");
        empleado = new Facebook(empleado);
        empleado = new Whatsapp(empleado);
        empleado = new Email(empleado);

        expect(empleado.notificar()).equal(" Facebook  Whatsapp  Email ");
    });
});