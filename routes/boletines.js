'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var results = [ {
    title: 'Boletín Agosto 2019',
    type: 'pdf',
    link: 'boletines/agosto2019.pdf'
  }, {
    title: 'Boletín Septiembre 2019',
    type: 'pdf',
    link: 'boletines/septiembre2019.pdf'
  }
];
  
  res.send(results);
});

module.exports = router;

module.exports = router;
