'use strict';

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://maineparnisari%40gmail.com:tentacle_wrangle_moe@smtp.gmail.com');

router.post('/', function (req, res) {
  var fromName = req.body.name;
  var fromEmail = req.body.email;
  var message = req.body.message;
  
  var formattedText = fromName + ' (' + fromEmail + ') dice: ' + message;
  var formattedEmail = fromName + ' (<a href="mailto:' + fromEmail + '">' + fromEmail + '</a>) dice: <b>' + message + '</b>.';
  
  console.log('Mensaje recibido: ' + formattedText);
  
  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: '"Sitio web 👥" <maineparnisari@gmail.com>', // sender address
      to: 'maineparnisari@gmail.com', // list of receivers
      subject: '[Estudio Propato] Contacto Web ✔', // Subject line
      text: formattedText, // plaintext body
      html: formattedEmail // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.sendStatus(500);
      }
      console.log('Mensaje enviado: ' + info.response);
      res.sendStatus(200);
  });
});

module.exports = router;
