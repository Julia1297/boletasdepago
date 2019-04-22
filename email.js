var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'juantopex123@gmail.com',
      pass: 'chabone92'
    }
  });
  
  var mailOptions = {
    from: 'juantopex123@gmail.com',
    to: 'juantopex123@gmail.com',
    subject: 'Prueba de Correo',
    text: 'YA ENVIAA ;D!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });