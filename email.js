var nodemailer = require('nodemailer');

class Email {

  constructor(opcionesDeEnvio) {
    this.conexion;
    this.opcionesDeEnvio=opcionesDeEnvio;
  }

  iniciarConexion() {
    this.conexion = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'juantopex123@gmail.com',
        pass: 'chabone92'
      }
    });
  }

  enviarNotificacion() {
    let conexionTemp = this.conexion;
    let opcionesDeEnvioTemp = this.opcionesDeEnvio

    let promesa = new Promise(
      function (resolve, reject) {
        conexionTemp.sendMail(opcionesDeEnvioTemp, function (error, info) {
          if (error) {
            resolve("No se envio, Error");
          } else {
            resolve("mensaje enviado");
          }
        });
      }
    );
    return promesa;
  }

  enviarNotificacionFacebook(){
    //Falta implementar para Facebook 
    return "mensaje enviado";
  }
  
  enviarNotificacionWhatsapp(){
    //Falta implementar para  Whatsapp
    return "mensaje enviado";
  }

}
module.exports = Email;

