var expect = require('chai').expect
import Email from '../email';

describe('notificaciones', function () {

    it('Notificacion para Gmail', async function () {
        this.timeout(10000);
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: 'edwinatahuichi92@gmail.com',
            subject: 'Boleta de Pago 1',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
        let correoGmail = new Email(opcionesDeEnvio);
        correoGmail.iniciarConexion();
        let respuesta= await correoGmail.enviarNotificacion()
        expect(respuesta).equal("mensaje enviado");
    });

    it('Notificacion para hotmail', async function () {
        this.timeout(10000);
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: 'edwinatahuichi92@hotmail.com',
            subject: 'Boleta de Pago 2',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
        let correoHotmail = new Email(opcionesDeEnvio);
        correoHotmail.iniciarConexion();
        let respuesta= await correoHotmail.enviarNotificacion()
        expect(respuesta).equal("mensaje enviado");
    });

    it('Notificacion para Facebook',  function () {
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: 'https://www.facebook.com/edwin.atahuichi',
            subject: 'Boleta de Pago 3',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
        let correoFacebook = new Email(opcionesDeEnvio);
        expect(correoFacebook.enviarNotificacionFacebook()).equal("mensaje enviado");
    });

    it('Notificacion para WhatsApp',  function () {
        let opcionesDeEnvio = {
            from: 'juantopex123@gmail.com',
            to: '74320193',
            subject: 'Boleta de Pago 4',
            text: 'La descripccion de la boleta de pago sera enviando en este campo'
          };
        let whatsapp = new Email(opcionesDeEnvio);
        expect(whatsapp.enviarNotificacionWhatsapp()).equal("mensaje enviado");
    });

});