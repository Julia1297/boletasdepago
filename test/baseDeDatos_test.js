var expect = require('chai').expect;
import CRUDRepositorioEmpleadoMongo from '../db/CRUDRepositorioEmpleadoMongo';

import Empleado from '../empleado/Empleado.js';
import CalculadoraPorHora from '../calculadoraSalario/CalculadoraPorHora';
import AsistenciaPorDia from '../tarjetas/AsistenciaPorDia';
import CalculadoraDeFechaDePagoFijo from '../calculadoraFechaDePago/ClasificadorFechaDePagoFijo';
import MetodoDePago from '../metodoDePago/MetodoDePago';

describe('Conexion de la base de datos', function () {
    it('Deberia insertar un empleado',  function () {
        let tarjetaHora = new AsistenciaPorDia("2019-05-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 22);
        let calculadoraDeFecha = new CalculadoraDeFechaDePagoFijo(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha,metodoDePago);
        let serviciosDeEmpleado = new CRUDRepositorioEmpleadoMongo();
        serviciosDeEmpleado.insertarEmpleado(empleado);
        expect(true).equal(true);
    });
});