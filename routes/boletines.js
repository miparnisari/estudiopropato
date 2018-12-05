'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var results = [ {
    title: 'Boletín Junio 2018',
    type: 'pdf',
    link: 'boletines/junio2018.pdf'
  }, {
    title: 'Boletín Noviembre 2018',
    type: 'pdf',
    link: 'boletines/noviembre2018.pdf'
  }
];
  
  res.send(results);
});

module.exports = router;

module.exports = router;
